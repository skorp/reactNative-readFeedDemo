'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    PixelRatio
    } = React;

var Cell = React.createClass({

    render: function() {
        return (
            <View>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <View style={styles.row}>
                        <View style={styles.textContainer}>
                            <Text style={styles.movieTitle} numberOfLines={2}>{this.props.feed.title}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.cellBorder} />
            </View>
        )
    }
});

var styles = StyleSheet.create({
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // Trick to get the thinest line the device can display
        height: 1 / PixelRatio.get(),
        marginLeft: 4
    },
    row: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
    },
    textContainer: {
        flex: 1,
    },
    movieTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2,
    },
});
module.exports = Cell;