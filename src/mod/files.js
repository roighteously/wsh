module.exports = {
	name: 'WillySoft: HARD Files',
	author: 'WillySoft: HARD',
	namespace: 'f.',
	do: {
		'init': 'const _wf = require("./lib/_wf.js"); _wf.init(); const fs = _wf.wf;',
		'wfs(': 'fs.writeFileSync("./_wf_sandbox/" +',
		'rfs(': 'fs.writeFileSync("./_wf_sandbox/" +',
	}
}