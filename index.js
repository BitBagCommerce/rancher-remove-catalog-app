const core = require('@actions/core');
const https = require('https');

try {
    const data = JSON.stringify({});
    const options = {
        hostname: core.getInput('rancherUrl').replace(/http(s)?\:\/\//g, ''),
        port: 443,
        path: `/v1/catalog.cattle.io.apps/${core.getInput('appNamespace')}/${core.getInput('appName')}?action=uninstall`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${core.getInput('rancherToken')}`
        }
    };

    const request = https.request(options, (response) => {
        response.on('data', function (chunk) {
            console.log('Got response')
        });

        response.on('end', function () {
            if (response.statusCode > 299 || response.statusCode < 200) {
                core.setFailed("Api call failed with response code " + response.statusCode);
            } else {
                console.log('App removed');
            }
        });
    });

    request.on('error', error => core.setFailed(error.message));
    request.write(data);
    request.end();
} catch (error) {
    core.setFailed(error.message)
}
