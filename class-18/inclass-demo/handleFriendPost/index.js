// third party library
const dynamoose = require('dynamoose');
// to be continued... (code locally and zip up)

// create schema 
const friendSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

// create model
const friendModel = dynamoose.model('friend-demo', friendSchema);

exports.handler = async (event) => {
  console.log(event.queryStringParameters);

  let {id, name, phone} = event.queryStringParameters;
  let friend = {id, name, phone}

  let response = {statusCode:  null, body: null};

  try {
    let newFriend = await friendModel.create(friend)
    response.statusCode = 200;
    response.body = JSON.stringify(newFriend);

  } catch(e){
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }
  
  return response;
};
