async function request(url) {
	let res = await fetch(url);
	return await res.json();
}

export default request;

console.log("request.js workss")