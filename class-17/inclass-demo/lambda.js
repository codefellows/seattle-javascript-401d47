const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    // reading from bucket - non-dynamic proof of life
    // let bucketName = '401d47-numbers-demo';
    // let key = 'numbers.json';
        let image = 'lucky.jpg'
    
    // let  numbers = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    // let strigifiedNumbers = numbers.Body.toString();
    // let myNumbers = JSON.parse(strigifiedNumbers) 
    // console.log('numbers:', myNumbers);
    
    // dynamically get the newly uploaded file
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    
    let  object = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    let strigifiedNumbers = object.Body.toString();
    let myNumbers = JSON.parse(strigifiedNumbers) 
    console.log('numbers:', myNumbers);
    
    let { numberOne, numberTwo } = myNumbers.numbers;
    let result = numberOne + numberTwo;
    
    console.log('result:', result)
    // TODO implement
    const payload = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return payload;
};
