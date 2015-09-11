define([
	'intern!object',
	'intern/chai!assert',
	'dijit/Dialog',
	'dijit/form/CheckBox'
], function (registerSuite, assert) {
	registerSuite({
		name: 'test test',

		'simple test': function () {
			assert.ok(true, 'this assertion should pass');
		}
	});
});
