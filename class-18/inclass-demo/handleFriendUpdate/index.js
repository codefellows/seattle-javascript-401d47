const dynamoose = require('dynamoose');

const friendSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const friendModel = dynamoose.model('friend-demo', friendSchema);

exports.handler = async (event) => {
  const response = {statusCode: null, body: null};
    
  // console.log( 'query string params', event.queryStringParameters);
  // console.log('path params', event.pathParameters);

  let pathId = event.pathParameters.id;
  let { id, name, phone } = event.queryStringParameters;
  let friend = {id, name, phone};

  console.log('path id', pathId);
  console.log('id', id, 'name', name, 'phone', phone);

  try {
    const updatedFriend = await friendModel.update(friend);
    response.statusCode = 200;
    response.body = JSON.stringify(updatedFriend);
  } catch (e) {
    console.error(e);

    response.statusCode = 500;
    response.body = JSON.stringify(e.message);

  }
 
  return response;
};
