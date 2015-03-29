'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    ListView,
    ActivityIndicatorIOS
    } = React;

var Cell = require('./Cell.js');
var FeedDetails = require('./FeedDetails.js');
var FeedWebView = require('./FeedWebView.js');

var FeedView = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: function(row1, row2) {
                    return row1 !== row2;
                }
            }),
                loaded:false,
            isLoading: true
        };
    },
    componentDidMount : function() {
        this.getData();
    },
    getData: function() {
        var self = this;
        fetch('http://www.skorp.eu/feed/json')
            .then(function(response) {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(responseData) {
                return self.setState({
                    dataSource: self.state.dataSource.cloneWithRows(responseData),
                    loaded:true,
                    isLoading:false
                });
            }).catch(function(error) {
                console.log('Request failed', error);
            })
        .done();
    },
    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderFeed}
                style = {styles.listView}
            />
        );
    },
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <ActivityIndicatorIOS animating={this.state.isLoading} size="large" />
                <Text>
                    Loading feed from skorp.eu...
                </Text>
            </View>
        );
    },
    renderFeed: function(feed) {
        return (
            <Cell
                onSelect={() => this.getDetails(feed)}
                feed = {feed}
            />
        );
    },
    getDetails: function(feed) {
        var self = this;
        this.props.navigator.push({
            title: feed.title,
            component: FeedDetails,
            passProps: {feed},
            rightButtonTitle:'goto orig.',
            onRightButtonPress: () =>  self.gotoUrl(feed)
        });
    },
    gotoUrl: function(feed) {
        this.props.navigator.push({
            title: feed.title,
            component: FeedWebView,
            passProps: {feed}
        });

    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
module.exports = FeedView;