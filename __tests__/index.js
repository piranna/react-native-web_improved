import {
  Alert,
  AlertIOS,
  DrawerLayoutAndroid,
  FlatList,
  Modal,
  RefreshControl,
  SectionList,
  Slider,
  StatusBar,
  TabBarIOS,
  WebView
} from '..'


test('exports', function()
{
  expect(Alert.alert.name).toBe('alert')
  expect(AlertIOS.alert.name).toBe('alert')
  expect(AlertIOS.prompt.name).toBe('prompt')
  expect(DrawerLayoutAndroid.name).toBe('DrawerLayout')
  expect(FlatList.name).toBe('FlatList')
  expect(Modal.name).toBe('Modal')
  expect(RefreshControl.name).toBe('RefreshControl')
  expect(SectionList.name).toBe('MetroListView')
  expect(Slider.name).toBe('Slider')
  expect(StatusBar.name).toBe('StatusBar')
  expect(TabBarIOS.name).toBe('TabBarIOS')
  expect(WebView.name).toBe('_class')
})
