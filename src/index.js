import './index.less';

class Hello {

	constructor(elem) {
		if (!elem) throw new Error('need to include container!');

		elem.innerHTML = 'Hello World!';
	}
}

export default Hello;