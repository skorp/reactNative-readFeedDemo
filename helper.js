'use strict';
var helper = {};
helper.objToString = function (obj) {
    var tabjson=[];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            tabjson.push(obj[p]);
        }
    }  tabjson.push()
    return tabjson.join(',');
};

module.exports = helper;