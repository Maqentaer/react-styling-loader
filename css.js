/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author: Roman Glebsky @maqentaer
*/
var loaderUtils = require('loader-utils');
module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	this.cacheable && this.cacheable();
	return [
		'var result = {};',
		'var extend = require(' + loaderUtils.stringifyRequest(this, require.resolve('extend')) + ');',
		'var styler = require(' + loaderUtils.stringifyRequest(this, require.resolve('react-styling')) + ');',
		'var content = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
		// css-loader always return array of [id, css, media, sourceMap]
		'content.forEach(function(val) {',
		'	var style = styler(val[1]);',
		'	var media = val[2];',
		'	if (media) {',
		'		if (!result["@media " + media]) {',
		'			result["@media " + media] = {};',
		'		}',
		'		extend(true, result["@media " + media], style);',
		'	} else {',
		'		extend(true, result, style);',
		'	}',
		'})',
		'module.exports = result;'
	].join('\n');
};
