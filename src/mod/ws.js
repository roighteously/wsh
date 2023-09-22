module.exports = {
	name: 'WillySoft: HARD Interpreter',
	author: 'WillySoft: HARD',
	namespace: 'ws::',
	do: {
		'@macro:willysaid': '"Willy said he\'s gonna disown me if I don\'t make this song!"',
		'@import:global': 'const l = {};',
		'@cs': '/*',
		'@ce': '*/',
		'@c': '//',
		'@set ': 'l',
		'printonln(': 'console.log("\\n" pl ',
		'print': 'console.log',
		'var': 'et',
		'const': 'const',
		// ws::global varname @=
		'global ': '["',
		'@=': '"] = ',
		// @get:global varname @get:global:enddef,
		'@get:global ': 'l["',
		'@!': '"]',
		'@get ': '',
		'json::stringify': 'JSON.stringify',
		'json::parse': 'JSON.parse',
	}
}