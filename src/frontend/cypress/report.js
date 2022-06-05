/* const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-report/',
    overwrite: true
}); */

/* const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-report/',
    overwrite: true
}); */
const report = require('cypress-mochawesome-reporter');

report.generate({
	jsonDir: './cypress/cucumber-reporter/',
	reportPath: './cypress/cucumber-rep/',
    overwrite: true
});