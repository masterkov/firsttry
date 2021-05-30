const merge = require ("deepmerge");
const { config }  = require ("./wdio.conf");

exports.config = merge(
    config,
    {
        capabilities: [
            {
                browserName: 'chrome',
                acceptInsecureCerts: true,
                'goog:chromeOptions': {
                    args: ['--incognito', '--no-sandbox', '--disable-dev-shm-usage']
                }
            },
        ],
        services: ['selenium-standalone'],
    }
)
