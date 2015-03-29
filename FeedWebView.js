'use strict';

var React = require('react-native');
var helper = require('./helper.js');
var {
    StyleSheet,
    View,
    Text,
    WebView
    } = React;

var BGWASH = 'rgba(255,255,255,0.8)';

var FeedWebView = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>

                <WebView url={this.props.feed.permalink} renderError={this.renderError}
                    renderLoading={this.renderLoading} />
            </View>
        )
    },
    renderLoading: function() {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicatorIOS />
            </View>
        );
    },
    renderError: function(errorDomain, errorCode, errorDesc) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorTextTitle}>
                    Error loading page
                </Text>
                <Text style={styles.errorText}>
          {'Domain: ' + errorDomain}
                </Text>
                <Text style={styles.errorText}>
          {'Error Code: ' + errorCode}
                </Text>
                <Text style={styles.errorText}>
          {'Description: ' + errorDesc}
                </Text>
            </View>
        );
    }
});

var styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column',
    },

    loadingView: {
        backgroundColor: BGWASH,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BGWASH,
    },
    errorTextTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
    },
    errorText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
    },
});
module.exports = FeedWebView;