const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'cucumber-report.json',
     output:'./features/output/report.html',
     reportSuiteAsScenaros:true,
     launchReport:true,
}
reporter.generate(options)