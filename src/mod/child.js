module.exports = {
	name: 'WillySoft: HARD Child Processes',
	author: 'WillySoft: HARD',
	namespace: '',
	do: {
		'child::init': 'const child = require("child_process")',
		'child::run(': 'child.execSync(',
		')::var': ')',
	}
}