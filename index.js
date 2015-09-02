/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Roman Glebsky @maqentaer
*/
var styler = require('react-styling');
module.exports = function(content) {
	this.cacheable && this.cacheable();
	var value = styler(content);
	this.value = [value];
	return 'module.exports = ' + JSON.stringify(value, undefined, '\t') + ';';
};
