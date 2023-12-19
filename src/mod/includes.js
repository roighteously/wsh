module.exports = {
	name: 'WillySoft: HARD Inclusion/Modularity',
	author: 'WillySoft: HARD',
	namespace: '',
	do: {
		// mod::init coolio starts
		'mod::init ': 'function WILLYSOFT_COMPONENT_',
		'starts': '() {',
		'ends': '}',
		'::run' : '()',
		'@export': 'module.exports =',
		'mod::pkg ': 'module.exports = WILLYSOFT_COMPONENT_',
		'mod::locreq(': 'require("./mod/',
		'mod::glbreq(': 'require(',
		')::get': '.wsm")',
		'mod::' : 'WILLYSOFT_COMPONENT_',
	}
}