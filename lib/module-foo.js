System.register('module-foo/foo.js', [], function (_export) {
	'use strict';

	var foo;
	return {
		setters: [],
		execute: function () {
			foo = {
				name: 'foo'
			};

			_export('default', foo);
		}
	};
});
System.register('module-foo/module-foo.js', ['module-foo/foo.js'], function (_export) {
  'use strict';

  return {
    setters: [function (_moduleFooFooJs) {}],
    execute: function () {}
  };
});