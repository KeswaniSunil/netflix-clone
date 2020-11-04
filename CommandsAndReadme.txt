-Created account on tmdb( https://www.themoviedb.org/ ) and generated API that will be used in this proj . tmdb Api Documentation:- https://developers.themoviedb.org/3
-Then created React App:- npx create-react-app netflix-clone
-Added project in firebase.Then,cd project folder and ran:- npm install -g firebase-tools . Then did setup of firebase hosting( see video from 17th minute)
--We will also use firebase to deploy our app
--Install axios:- npm i axios
-To run:- npm start
-npm i react-youtube
-npm i movie-trailer

--To deploy on firebase:- 
	1)firebase login
	2)firebase init
	3)Now you can see that build folder inside your proj is empty, now we have to build the production ready react bundle we will type:- npm run build. Now,what 	  this command will do is it will strip out all the development stuffs like hot reloading,all other expensive stuff that takes up the lot of space coz we don't 
	  need this in prod build coz we need to make prod build as light as possible
	4) firebase deploy

	url:- https://netflixclone-a0f46.web.app