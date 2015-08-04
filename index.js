'use strict';

exports.name = 'verbatim';
exports.inputFormats = ['html'];
exports.outputFormat = 'html';

exports.render = function (str) {
  return '\n' + str + '\n';
}
