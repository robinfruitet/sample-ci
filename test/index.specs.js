var request = require('supertest');
var api = require('../index');

describe('contacts', function() {
	describe('GET /contacts', function () {
		it('should return the lis of contacts', function() {
			return request(api)
			.get('/contacts')
			.send()
			.expect(200);
		});
	});
	
	describe('POST /contacts/:name', function () {
		it('should create a new contacts', function() {
			return request(api)
			.post('/contacts/foo')
			.send()
			.expect(200);
		});
	});
	
	describe('PUT /contacts/:name/:new', function () {
		it('should update contacts with the same name by the new', function() {
			return request(api)
			.put('/contacts/foo/bar')
			.send()
			.expect(200);
		});
	});
	
	describe('DELETE /contacts/:name', function () {
		it('should delete contacts with the same name', function() {
			return request(api)
			.delete('/contacts/foo')
			.send()
			.expect(200);
		});
	});
})