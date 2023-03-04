'use strict';

const serverConfig = {
	url: process.env.NEXT_PUBLIC_API_BASE_URL
}

async function request(endpoint, data = {}) {
	const url = serverConfig.url.concat(endpoint);
	return fetch(url, data)
	.then((response) => response.json())
	.catch(err => console.error(err));
}

function getRequest(endpoint) {
	return request(endpoint);
}

function postRequest(endpoint, data) {
	return request(endpoint, data);
}

function putRequest(endpoint) {
	return request(endpoint, data);
}

function deleteRequest(endpoint) {
	return request(endpoint);
}

const requestObj = {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest
};

export default requestObj;