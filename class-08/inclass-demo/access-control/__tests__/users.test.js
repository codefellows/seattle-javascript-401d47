'use strict';

const jwt = require('jsonwebtoken');
const { Users, sequelize } = require('../src/models');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

beforeAll (async () => {
  await sequelize.sync();
});

afterAll (async () => {
  await sequelize.drop();
  // if tests aren't passing maybe its a multiple - async issue
  // await sequelize.close();
});

describe('UsersModel Tests', () => {
  test('User should have a token', async () => {
    const testUser = await Users.create({username: 'Ryan', password: 'pass123'});
    const { token } = testUser;
    const validToken = jwt.verify(testUser.token , SECRET);

    expect(token).toBeTruthy();
    expect(validToken).toBeTruthy();
  });
});
