const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    const bucketName = event.Records[0].s3.bucket.name;
    const fileName = event.Records[0].s3.object.key;
    const fileSize = event.Records[0].s3.object.size;
    
    console.log('event: ', bucketName, fileName, fileSize);
    
    const params = {
        Bucket: bucketName,
        Key: 'images.json',
    }
    
    try {
        const imageManifest = await s3.getObject(params).promise();
        
        let manifestData = JSON.parse(imageManifest.Body.toString());
        console.log('did this work?', manifestData);
        
        manifestData.push({
            name: fileName, 
            size: fileSize, 
            type: 'image'
        });
        console.log(manifestData)
        let manifestBody = JSON.stringify(manifestData);
     
        const newManifest = await s3.putObject({...params, Body: manifestBody, ContentType:  'application/json'}).promise();
        console.log('new manifest data', newManifest)
        console.log('we got here');
        
    } catch(e){
        console.log(e);
        
        if(e.message === 'The specified key does not exist.'){
            const newManifest = {
                Bucket: bucketName,
                Key: 'images.json',
                Body: JSON.stringify([{ name: fileName, size: fileSize, type: 'image'}]),
                ContentType: 'application/json',
            }
            const manifest = await s3.putObject(newManifest).promise();
            console.log('JSON file created for bucket', manifest);
        }
        console.log('need to create images.json');
    }
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
