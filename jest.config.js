module.exports = {
    preset     : 'react-native',
    setupFiles : [
        './node_modules/react-native-gesture-handler/jestSetup.js'
    ],
    transformIgnorePatterns : [
        '/node_modules/(?!react-native|react-navigation|@react-navigation)'
    ],
    setupFilesAfterEnv : [ '<rootDir>/src/setupTests.js' ]
};
