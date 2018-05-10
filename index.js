const ReactNative = require('react-native-web')
const {
  Alert,
  AlertIOS,
  Navigator: NavigatorIOS,
  RefreshControl,
  TabBarIOS
} = require('react-native-web-extended')
const {FlatList, SectionList} = require('react-native-web-lists')

import DrawerLayoutAndroid from 'react-native-drawer-layout'
import Slider              from 'react-native-slider'
import Modal               from 'react-native-web-modal'
import StatusBar           from 'react-native-web-statusbar'
import WebView             from 'react-native-web-webview'


module.exports = Object.assign(ReactNative, {
  Alert,
  AlertIOS,
  DrawerLayoutAndroid,
  FlatList,
  Modal,
  NavigatorIOS,
  RefreshControl,
  SectionList,
  Slider,
  StatusBar,
  TabBarIOS,
  WebView
})
