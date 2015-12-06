var mk = require('mortalkombat');
var _ = require('lodash');

var getRandomNames = function (num) {
    var randomNames = _.times(num, function () { return mk.get(); });
    return randomNames;
};

exports.getRandomNames = getRandomNames;