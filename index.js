'use strict';

exports.name = 'verbatim';
exports.outputFormat = 'xml';

exports.render = function (str) {
  return '\n' + str + '\n';
}
