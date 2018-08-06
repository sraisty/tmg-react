# TrackMeetGenius 
An track meet management application prototype by Sue Raisty

## Overview
###Application Architecture Overview
* Based on Meteor framework. 
	* React.js for the front-end.  
	* Node.js and MongoDB on the backend.
* 100% Javascript, primarily the ES6 variant of Javascript.
* Currently a hybrid application, but down the road hope to do Native iOS and Android 
apps via Meteor's Cordova integration (with Iconic or React Native for the UI design).
* Aiming toward a solution that can operate with spotty connectivity down the road, but this is primarily a CONNECTED solution because the cloud enables sharing and mobility, the application's CORE VALUE.

### Development / Build Workflow Overview

## Application Architecture
### Meteor
  * MongoDB is the server-side database, and Meteor provides miniMongo as
  the client-side database that is kept in sync with the server MongoDB.
  * Meteor has a built-in builder that automatically compiles and minifies
  javascript and style  files. 
  	* So no need to use Gulp or Grunt or Webpack or whatever.
  * I'm using LESS files for the styles. Meteor automatically compiles these.
  	

  	

### Front-End

#### Theme
* For the style, I used the [Angle theme from wrapbootstrap.com](https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123), react variation.  View the [preview here](http://themicon.co/theme/angle/v3.6/reactjs/). 
	* The help and support for this theme are very limited, but can be found in the comments on [THIS PAGE](https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123/comments). 
* Meteor isn't playing nice with the SASS or SCSS files that are part of the Angle-React theme, so we are using LESS files that are taken from the Angle-Meteor-Angular theme.
* The theme is based on [Twitter Bootstrap](http://getbootstrap.com).
* [FontAwesome](http://fontawesome.com) is used as an icon font, as well as a 
few track & field specific icons from [flaticon](http://flaticon.com).


#### LESS Files for Style
* I am using LESS files for almost all the styles and are very rarely using CSS directly.
   
	* Meteor automatically, behind the scenes, compiles all the less files it picks up into one big CSS file. This is invisible to me.
  
 	* In this app, Meteor automatically picks up (and compiles) the /client/main.less file, which in turn imports all the other .less files from /imports/styles.

* Less files for bootstrap, fontawesome, etc.  are located in /imports/styles. Almost all these LESS files are from the purchased Angle Theme (see above).
* To use Less instead of CSS, I need to add the Less Package to Meteor:
  	
			$ meteor add less


### Core Meteor & Node.js


#### NPM & Meteor Packages
* Meteor Packages used are listed in the ./.meteor/packages directory
* NPM packages are listed in ./packages.json


* When adding new NPM packages either do:

		$ meteor npm install <PACKAGENAME> --save   
	
	OR 

		$ meteor npm install <PACKAGENAME> --save-dev  
  
  (Note that --save or -save-dev add entries into our ~./package.json file)
  
#### Important Packages

[Lodash](http://lodash.com) (npm) - Prefer using  library functions for object and array manipulation 

###Resetting Meteor
If things go weird:

	$ cd MYPROJECTDIR/src
	
	$ rm -rf ./node_modules
	
	$ cp ./.meteor/packages ./SAVEME_METEOR_PACKAGES
	
	$ cp ./.meteor/platforms ./SAVEME_METEOR_PLATFORMS
	
	$ rm -rf .meteor
	
	$ meteor create .
	
	$ meteor npm install
	
  * THEN, For each of the packages listed in ./SAVEME_METEOR_PACKAGES file, 
  

		$ meteor add PACKAGENAME


## React




### Error Handling
* This article outlines some good principles: [*Best Practices for Error Handling in Node.js*](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)
* This one too: https://www.joyent.com/node-js/production/design/errors
* Handling errors: use the standard Node.js Error object.
	* GOOD throw from typical function (sync or async)
	
			if (!productToAdd) {
				throw new Error('Cannot add a new product when no value is provided.');
			}


## Debugging

## Testing

Mocha and the practicalmeteor:mocha package are the basis of my testing framework.

### Using Mocha
* Don't use arrow functions. Use the eslint mocha plugin to override the usual AirBnb rule that demands arrow functions.

* Use the chai library for assertions, TDD, BDD.  
* At top of test files:

		import { expect } from 'meteor/practicalmeteor:chai';
		
* ...then create test files that use "desribe" & "it" to describe the test and 
"expect" to test whether the results of the test were what they should have been.

* TODO - Provide a better example.



### Javascript Unit Tests
1. In general, create one test file containing all the unit tests for each real code file.  A file called 'foo.js' will have a test file called 'foo.test.js'

2. Put the unit test files in the <PROJECTDIR>/src/client/test and/or <PROJECTDIR>/src/server/test directories.  
(NOT 'tests' plural, despite Meteor documentation to use a directory called 'tests').


3. Start up meteor in unit test mode, along with running the main application in a separate process.  

		$ # This will execute all your `*.test[s].*` files.
  	  	$ meteor test --driver-package=practicalmeteor:mocha --port 3100
  	  	$ meteor --port 3000
  	  	
   OR, since I added some scripts to the package.json file:	

		$ meteor npm run debug

5.  Open up two browser windows to see the app in action, while ensuring that unit tests don't break:
  *  [http://localhost:3000](http://localhost:3000) for the regular app
  *  [http://localhost:3100](http://localhost:3100) for the test results displayed in the browser.  Note that reloading this browser window will re-run the tests.

### Integration Tests

1. Create 

		# This will execute all your *.app-test[s].* and *.app-spec[s].* files.
		$ meteor test --full-app --driver-package=practicalmeteor:mocha

### Testing React Components
* Use the npm "[Enzyme](https://github.com/airbnb/enzyme)" package, which simulates a React component environment and lets you query it using CSS selectors.
* At top of test files that use enzyme:

		import React from 'react';
		import {expect} from 'chai'; 
			(or is it 
			import {expect} from 'meteor/practicalmeteor:chai';
			???)
		import { mount, shallow } from 'enzyme';
		

## Eslint & Atom Editor
* All the rules I use for this are in the package.json file.  
* The ruleset is a combo of the [airBnB style guide](https://github.com/airbnb/javascript), plus rules specific to Meteor and React.
* eslint runs automatically within the Atom editor that I use.
*  From command line: 

       	$ meteor npm run lint
       	
	or

		$ ./eslint-local .
		
* In our test files, we need to turn off certain eslint rules.  Insert this at the 
TOP of any XXXX.test.js files.  Note that these are not your ordinary comments and can't
be erased!  eslint reads them!
	
		// Selectively turn of eslint rules so Chai tests don't complain
		//
		/* eslint func-names: 0            */   // Off
		/* eslint no-unused-expressions: 0 */   // Off
		/* eslint no-unused-vars: 0        */   // Off
		/* eslint prefer-arrow-callback: 0 */   // Off
		
       	
* If I want to selectively turn off a particular eslint rule for just a PART of a file, then surround the offending code with eslint comment-commands:

			/* eslint no-unused-vars: 0  */   		// 0 = Rule Off
			
			<THE OFFENDING CODE IS HERE>
			
			/* eslint no-unused-vars: 2  */  		// 2 = Rule triggers Error
	

		


## Git & Bitbucket
* The remote repository is on Bitbucket.
* The git repository is in PROJECTDIR/src/.git  (NOT the level above, due to 
problems with Heroku deployment)
* To checkin from the commandline:
	
		$ git add .
		$ git commit -m "my commit message"
		$ git status
		

* To push to the remote BitBucket:

		$ git push origin master
		

	

* URL on Bitbucket: 
[https://surepcinc@bitbucket.org/surepcinc/tmg-react.git](https://surepcinc@bitbucket.org/surepcinc/tmg-react.git)


## Heroku

* Setup heroku as a remote server for git, and then I can do
		$ git push heroku master

* Find the application at [https://tmg-react.herokuapp.com/](https://tmg-react.herokuapp.com/)

	* NOTE: no port 3000 is necessary.

* Our dev environment is deployed for free on Heroku, for a little while at least. It has access to 1 “dyno” with 512MB for free.

* I set it up using [these instructions](https://www.coshx.com/blog/2016/08/19/how-to-deploy-a-meteor-1-4-app-to-heroku/), using the recommended Horse Buildpack.

* Push the git repository to Heroku and it should automatically deploy after several minutes:

		$ git push heroku master
		


		


### Troubleshooting Heroku
If the app is not up, do this:

	$ heroku logs
  
Try restarting the application. First, arrange to see a real-time display of new input to the logs:


    $ heroku restart
    $ heroku logs --tail
    
    (Later, do Control-C to return to the terminal window's usual prompt)
    
And to then open up the app in a browser window:

    $ heroku open  
    

# Futures

### Functionality to Add
* Logging and erorr handling using the **practicalmeteor:loglevel** package.

### Ongoing Application Monitor

* [UpTimeRobot.Com](http://uptimerobot.com)
* [AppDynamic.Com](http://AppDynamic.Com)


