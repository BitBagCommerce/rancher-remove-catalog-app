const core = require('@actions/core');
const https = require('https');

try {
    const options = {
        hostname: core.getInput('rancherUrl'),
        port: 443,
        path: `/v1/catalog.cattle.io.clusterrepos/${core.getInput('appNamespace')}/${core.getInput('appName')}?action=uninstall`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${core.getInput('rancherToken')}`
        },
        json: data
    };

    https
        .request(options)
        .on('error', error => core.setFailed(error.message));
} catch (error) {
    core.setFailed(error.message)
}
