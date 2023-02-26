'use strict';

const serverConfig = {
	url: 'http://localhost:5000'
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
	return request(endpoint, data = {});
}

function putRequest(endpoint) {
	return request(endpoint, data = {});
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