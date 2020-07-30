exports.config = {
    directConnect: true,
    capabilities: {
        'browserName' : 'chrome'
    },
    framework: 'jasmine',
    specs: ['./prot-scripts/jasmine-matchers.js'],
    suites: {
        create_mail: ['./gmail-create-mail/*.js'],
        inbox: ['./gmail-inbox/*.js'],
        login: ['./gmail-login/*.js'],
        smoke: ['./smoke/*.js'],
        sanity: ['./sanity/*.js'],
        regression: ['./regression/*.js'],
        all: ['./*/*.js']

    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    }
}