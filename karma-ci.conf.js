module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);
	config.set({

		preprocessors: {
			"{webapp,webapp/!(test)}/*.js": ["coverage"]
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},
		// https://github.com/karma-runner/karma-junit-reporter#configuration
		junitReporter: {
			outputDir: "reports",
			outputFile: "TEST-qunit.xml",
			suite: "",
			useBrowserName: true
		},
		customLaunchers: {
			"RemoteChrome": {
				base: "WebDriver",
				config: {
					hostname: "localhost",
					port: 4444
				},
				browserName: "chrome",
				name: "Karma",
				pseudoActivityInterval: 30000
			}
		},

		reporters: ["progress", "coverage", "junit"],

		browsers: ["ChromeHeadless"],

		singleRun: true

	});
};
