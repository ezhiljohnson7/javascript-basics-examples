exports.config = {
    directConnect: true,
    capabilities: {
        'browserName' : 'chrome'
    },
    framework: 'jasmine',
    specs: ['./prot-scripts/non-angular-app.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    }
}