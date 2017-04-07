# TrackMeetGenius 
An track meet management application by Sue Raisty of SportSimplicity, Inc.

## About this Application
* Based on Meteor with React for the front-end.  Javascript and Node.js are the basis and ES6 variation of Javascript is heavily used throughout.

### Meteor
  * MongoDB is the server-side database, and Meteor provides miniMongo as
  the client-side database that is kept in sync with the server MongoDB.
  * Meteor has a built-in builder that automatically compiles and minifies
  javascript and CSS files. So no need to use Gulp or Grunt or Webpack or whatever.
  * We are using LESS files for the styles
* Mocha is the overall testing framework.

### Theme
* For the style, we use the [Angle theme from wrapbootstrap.com](https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123), react variation.  View the [preview here](http://themicon.co/theme/angle/v3.6/reactjs/). 
	* The help and support for this theme are very limited, but can be found in the comments on [THIS PAGE](https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123/comments). 
* Meteor isn't playing nice with the SASS or SCSS files that are part of the Angle-React theme, so we are using LESS files that are taken from the Angle-Meteor-Angular theme.

* The theme is based on [Twitter Bootstrap](http://getbootstrap.com).

* [FontAwesome](http://fontawesome.com) is used as an icon font, as well as a 
few track & field specific icons from [flaticon](http://flaticon.com).

### Core
* [Lodash](http://lodash.com) library functions is used for a lot of object and array manipulation 

## NPM & Meteor Packages
* Meteor Packages used are listed in the ./.meteor/packages directory
* NPM packages are listed in ./packages.json


* When adding new NPM packages either do:
	> $ meteor npm install <PACKAGENAME> --save   
	
	OR 
  > $ meteor npm install <PACKAGENAME> --save-dev  
  
  (Note that --save or -save-dev add entries into our ~./package.json file)

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



## Tests
* Tests must go into the /client/test and /server/test directory.  
(NOT 'tests' plural, despite Meteor documentation).



## Eslint & Atom Editor
* All the rules I use for this are in the package.json file.  
* The ruleset is a combo of the [airBnB style guide](https://github.com/airbnb/javascript), plus rules specific to Meteor and React.
* eslint runs automatically within the Atom editor that I use.
*  From command line: 

	> $   ./eslint-local  .

## Git
* The remote repository is on Bitbucket.
* The git repository is in PROJECTDIR/src/.git  (NOT the level above, due to 
problems with Heroku deployment)
* 
