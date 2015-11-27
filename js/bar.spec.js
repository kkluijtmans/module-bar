import {foo, fooName} from './bar.js';

describe('module-bar', function () {
	it('import from module a', function () {
		expect(fooName).toEqual('foo');
		expect(foo.name).toEqual('foo');
		expect(foo).toEqual({'name':'foo'});
	});
});
