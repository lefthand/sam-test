var time = require('time');
exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: '{"response": "The time in Los Angeles: ' + currentTime.toString() + '"}',
    });
};
