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

    let response = {statusCode:  null, body: null};

    try {
      let friendRecords = await friendModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(friendRecords);

    } catch(e){
      console.error(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }
    
    return response;
};
