'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../collections');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API', () => {

  test('Create a person', async() => {
    let response = await mockRequest.post('/people').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
  });

  test('Should read from people', () => {
    expect(true).toBe(false);
  });

  test('Should update a person', () => {
    expect(true).toBe(false);
  });

  test('Should delete a person', () => {
    expect(true).toBe(false);
  });
});
