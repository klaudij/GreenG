  /**
   * Sample JavaScript code for gmail.users.getProfile
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyDfyqhoP8BGIyjshmpwv6uQ-zD-_KnVejo");
    return gapi.client.load("https://gmail.googleapis.com/$discovery/rest?version=v1")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

  var amountOfEmails = '';
  var sizeOfInbox = '';

  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.gmail.users.getProfile({
      "userId": "me"
    })
    .then(async function(response){
     const data = response.result.messagesTotal;
      console.log(data);

      document.getElementById('uitstoot').innerHTML = `${parseFloat((data / 1048576) * 2.26 / 1000).toFixed(2)} kilograms of CO2 per year`;
    }),
              function(err) { console.error("Execute error", err); };
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "856218307906-b8rgvheq5t0o74a7950blbdl4vb7s43o.apps.googleusercontent.com"});
  });

  