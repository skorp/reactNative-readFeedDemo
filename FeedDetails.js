'use strict';

var React = require('react-native');
var helper = require('./helper.js');

var {
    StyleSheet,
    View,
    Text,
    ScrollView,
    WebView,TouchableHighlight
    } = React;

var BGWASH = 'rgba(255,255,255,0.8)';

var FeedDetails = React.createClass({

    render: function() {
        var tags = helper.objToString(this.props.feed.tags);
        var categories = helper.objToString(this.props.feed.categories);
        var self = this;
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.mainSection}>

                    <View style={styles.rightPane}>
                        <Text style={styles.title}>{this.props.feed.title}</Text>
                        <Text style={styles.smallText}>Author: {this.props.feed.author}, on {this.props.feed.date}</Text>
                        <Text style={[styles.smallText,styles.borderline]}>Tags: {tags}, categories: {categories}</Text>

                        <Text>
                        {this.props.feed.content}
                            </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }


});

var styles =StyleSheet.create({
    contentContainer: {
        padding: 10,
    },
    rightPane: {
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
    },
    mainSection: {
        flexDirection: 'row',
    },
    smallText: {
        fontSize:12
    },
    borderline: {
        height:1,
        color:'#000000'
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
module.exports = FeedDetails;