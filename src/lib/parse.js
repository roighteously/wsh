const path = require("path")

const mods = [
	require(path.resolve('./src/mod/ws.js')),
	require(path.resolve('./src/mod/wsTypes.js')),
	require(path.resolve('./src/mod/sysop.js')),
	require(path.resolve('./src/mod/files.js')),
	require(path.resolve('./src/mod/child.js')),
	require(path.resolve('./src/mod/includes.js')),
	require(path.resolve('./src/mod/express.js')),
];

module.exports = {
	exec: (s) => {
		mods.forEach(modIfo => {
			const changes = Object.keys(modIfo.do);
			changes.forEach(key => {
				if (s.includes(modIfo.namespace + key)) {
					console.log(modIfo.name + ' used on ' + key)
					s = s.replaceAll(modIfo.namespace + key, modIfo.do[key]);
				} else if (key.includes('@') && s.includes(key)) {
					console.log(modIfo.name + ' used on ' + key)
					s = s.replaceAll(key, modIfo.do[key]);
				}
			});
		});
		return s;
	}
}