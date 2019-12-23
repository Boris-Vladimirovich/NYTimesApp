# New York Times test app

React native application for observing most popular NY Times posts. Based on [NY Times Most popular API](https://developer.nytimes.com/docs/most-popular-product/1/overview).

### Installation
```
git clone
npm i
cd ios && pod install // macOS only
cp ./etc/config.js.sample ./etc/config.js
```
Replace **API_KEY** with your NYTimes api key
### Run in development mode
```
npm start
npm run android
npm run ios
```
### Create release .apk
```
cd android && ./gradlew assembleRelease
```
### Testing
```
npm run test
```