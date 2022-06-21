'use strict';

const { server } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing our auth features', () => {

  it('Should allow users to signup, with a POST to `signup', async () => {
    let response = await request.post('/signup').send({
      username: 'micha',
      password: 'ineffable',
    });

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('micha');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('ineffable');
  });

  it('should allow a user to `signin` with the correct password', async () => {
    let authString = 'micha:ineffable';
    let encodedString = base64.encode(authString);
    let response = await request.post('/signin').set('Authorization', `Basic ${encodedString}`);

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('micha');
  });
});
