/**
 * Sample React Native App
 * reading Json Feed from skorp.eu
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    NavigatorIOS,
    StyleSheet
} = React;

var FeedView = require('./FeedView');
var readFeedDemo = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Skorp.eu Feeds',
              component: FeedView
          }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

AppRegistry.registerComponent('readFeedDemo', () => readFeedDemo);
