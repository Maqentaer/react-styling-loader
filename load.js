/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author: Roman Glebsky @maqentaer
*/
var loaderUtils = require('loader-utils');
module.exports = function() {};
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
	this.cacheable && this.cacheable();
	return [
		'var content = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
		'var styler = require("react-styling");',
		'module.exports = styler(content);'
	].join('\n');
}
