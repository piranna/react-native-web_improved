const ReactNative             = require('react-native-web')
const {FlatList, SectionList} = require('react-native-web-lists')


ReactNative.DrawerLayoutAndroid = require('react-native-drawer-layout').default
ReactNative.FlatList            = FlatList
ReactNative.Modal               = require('react-native-web-modal').default
ReactNative.SectionList         = SectionList
ReactNative.Slider              = require('react-native-slider').default
ReactNative.StatusBar           = require('react-native-web-statusbar').default
ReactNative.WebView             = require('react-native-web-webview').default


module.exports = ReactNative
