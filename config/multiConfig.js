var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

exports.config = {

    directConnect: true,

    baseUrl: 'http://www.google.com',

    multiCapabilities: [{
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    }, {
        'browserName': 'firefox',
        shardTestFiles: true,
        maxInstances: 2
    }],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    suites: {
        allureFeature: ['../features/allure.feature'],
        cucumberFeature: ['../features/cucumber.feature'],
        protractorFeature: ['../features/protractor.feature']
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        global.expect = chai.expect;
    },

    cucumberOpts: {

        strict: true, 
        format: ['pretty'], 
        require: ['../stepDefinitions/*.js', '../support/*.js'], 
        tags: '@CucumberScenario,@ProtractorScenario,@AllureScenario,~@DatabaseTest'

    }
};