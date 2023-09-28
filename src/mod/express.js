module.exports = {
	name: 'WillySoft: HARD Express Hook',
	author: 'WillySoft: HARD',
	namespace: '',
	do: {
		'::get(': '.get(',
		')::{': ', (rr, wr) => {',
		'}::req-end': '});',
		'::status = ': 'rr.sendStatus(',
		' , send': ');',
	}
}