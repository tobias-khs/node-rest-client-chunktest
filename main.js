var Client = require('node-rest-client').Client;

var options = {
        mimetypes: {
            json: [
                'application/json',
                'application/json;charset=utf-8',
                'application/json;charset=UTF-8'
            ]
        }
    }
	// Hopefully using this character works...
	badCharacter = '�';

var getText = function(file) {
    var args = {
            headers: {
                'Content-Type': 'text/plain',
                'Accept': 'text/plain'
            }
        };
    new Client(options).get('http://localhost:8888/'+file+'.txt', args, function(data, response) {
        if (response.statusCode !== 200) {
			console.error('[%s] Error status code: %s', file, response.statusCode);
            return;
        }
		console.log('[%s] Data received.', file);
		console.log('[%s] Contains corrupted character %s:', file, badCharacter, (data.indexOf(badCharacter) >= 0));
		//console.log(data);
    }).on('error', function(err) {
		console.error('[%s] Error: %s', file, err.stack || err.message || JSON.stringify(err));
    });
};

console.log('Getting text:');
getText('small');
getText('large');


