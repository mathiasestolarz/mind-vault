'use strict';

import request from './requests.js';

const requestConfig = {
	endpoint: '/api/notes'
}

export default async function processSearch(input) {
	return request.getRequest(requestConfig.endpoint)
	.then((notes) => {
		return notes.filter(note => note.title.includes(input));
	})
	.catch(err => console.error(err));
}