'use strict';

const { server } = require('../src/server.js');
const { sequelize } = require('../src/models');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll (async () => {
  await sequelize.sync();
});

afterAll (async () => {
  await sequelize.drop();
  // if tests aren't passing maybe its a multiple - async issue
  // await sequelize.close();
});

describe('Auth Tests', () => {
  test('allows a user to signup with a POST to /signup', async () => {
    // create mockResponse
    let response = await mockRequest.post('/signup').send({
      username: 'tester',
      password: 'pass123',
    });

    console.log('Response Body', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('tester');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('pass123');
  });
});
