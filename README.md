# module-bar

This project is created as a test-case for an issue in the isparta coverage plugin.
There is an issue when using a default import, from an external module, when running coverage through isparta

## The problem
The module `foo.js` from the external library `lib/module-foo.js`:

```javascript
var foo = {
	name: 'foo'
};

export default foo;
```
is imported in our `bar.js` file.

When running `bar.spec.js`, the imported value of `es5ModuleFoo` in `bar.js` becomes: `{'default':{'name':'foo'}}` which should 
be `{'name':'foo'}`

*see this snippet from bar.js when running bar.spec.js:*
```javascript
import es5ModuleFoo from 'module-foo/foo.js';
...
console.log('## es5ModuleFoo: ' + es5ModuleFoo.name + ' -> ' + JSON.stringify(es5ModuleFoo)); // ## es5ModuleFoo: undefined -> {"default":{"name":"foo"}}'
...
```

## Tried solutions
- When running index.html (in the browser) everything works as expected.
- When changing the preprocessor options in `karma.conf.js` there is a way to let the tests pass:
	
	```javascript	
	preprocessors: {
		//'lib/!(*.spec).js': ['coverage'], // Correctly resolves a default import from an es6 module. but not the precompiled es6->es5 module
		//'js/!(*.spec).js': ['coverage'] // Tests fail, but should be the only option used here
		'js/module-bar.js': ['coverage'] // Tests pass!
	}
	```
	
	The only question is why does it correctly resolve the default import when i only pass `js/module-bar.js` to the preprocessor?
	and not with the `'js/!(*.spec).js'` option, which should be the only desired option used here.
- I've included `es6DefaultExport.js` and `es6NamedExport.js` as test files to get a better understanding of what is happening. When you add the lib directory in the preprocessors config like so:
	
	```javascript	
 	preprocessors: {
 		'lib/!(*.spec).js': ['coverage'], // Correctly resolves a default import from an es6 module. but not the precompiled es6->es5 module
 		'js/!(*.spec).js': ['coverage'] // Tests fail, but should be the only option used here
 		//'js/module-bar.js': ['coverage'] // Tests pass!
 	}
 	```
	
	The `es6DefaultExport` will be resolved correctly in `bar.js` but not the `es5ModuleFoo` from `module-foo.js`
	
- I've also tried it with an older version of babel(^5.8.5) and isparta(^3.5.3) but the issue still remains.

## Steps to reproduce:

- clone this project

Then via command line in the root of the project:
- npm install
- grunt karma
