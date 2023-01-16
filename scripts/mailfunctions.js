//Function for getting the content/information about emails
async function listAllEmails(token, query) {
    const params = {
        method: 'GET',
        q: query,
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    };

    var previousResponse = await doFetch("https://gmail.googleapis.com/gmail/v1/users/me/messages", "", [], params);
    return previousResponse

    
}
console.log(listAllEmails('category:promotions'));
// listAllEmails();
// console.log(listAllEmails(token, 'category:promotions'))



async function getSizeOfEmails(token, messages){
    sizes = [];
    body = "";
    i = 1;
    limit = messages.length - (messages.length * 0.25);
    const regex = /(?<="sizeEstimate":.)[0-9]*/gi

    console.log('Limit: ', limit)

    while(messages.length > limit){
        body = body.concat(`--batch_boundary\r\nContent-Type:application/http\r\n\r\nGET /gmail/v1/users/me/messages/${messages[0].id}?fields=sizeEstimate\r\n\r\n`);
        messages.shift();
        i++;

        if(i >= 75){
            body = body.concat('--batch_boundary--')
            const response = await batchGet(body, token);
            const text = await response.text();
            console.log(text)
            const sizeEstimates = await text.match(regex);
            console.log(sizeEstimates);
            if(sizeEstimates != null){
                sizes = sizes.concat(sizeEstimates);
            }
            console.log('Amount of sizes in list: ', sizes.length)
            body = "";
            i = 0;
        }
    }

    const totalSizeEstimate = sizes.reduce((accumulator, value) => {
        return accumulator + parseInt(value);
    }, 0);

    return totalSizeEstimate * 4
}

// getSizeOfEmails()

function batchGet(body, token){
    const params = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'multipart/mixed; boundary=batch_boundary',
        },
        body: body};

    return fetch('https://www.googleapis.com/batch/gmail/v1', params)
}

function doFetch(url = "https://gmail.googleapis.com/gmail/v1/users/me/messages",
                 pageToken = "",
                 previousResponse = [],
                 params) {

    return fetch(`${url}?pageToken=${pageToken}&maxResults=${500}`, params)
        .then(response => response.json())
        .then(data => {
            previousResponse = previousResponse.concat(data.messages);
            if (data.nextPageToken) {
                return doFetch("https://gmail.googleapis.com/gmail/v1/users/me/messages", data.nextPageToken, previousResponse, params)
            }else{
                return previousResponse;
            }
        });
}
