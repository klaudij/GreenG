async function request(url) {
	console.log("request works 1")
	let res = await fetch(url);
	return await res.json();
	
}
export default request;
console.log("request works 2")