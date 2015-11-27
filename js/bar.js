// Libraries
import es5ModuleFoo from 'module-foo/foo.js';
import es6DefaultExport from '../lib/es6DefaultExport.js';
import {es6NamedExport} from '../lib/es6NamedExport.js';

// Internals
import es6DefaultExport2 from './es6DefaultExport.js';
import {es6NamedExport as es6NamedExport2} from './es6NamedExport.js';

console.log('#### Libraries:');
console.log('## es5ModuleFoo: ' + es5ModuleFoo.name + ' -> ' + JSON.stringify(es5ModuleFoo));
console.log('## es6DefaultExport: ' + es6DefaultExport.name + ' -> ' + JSON.stringify(es6DefaultExport));
console.log('## es6NamedExport: ' + es6NamedExport.name + ' -> ' + JSON.stringify(es6NamedExport));

console.log('#### Internals:');
console.log('## es6DefaultExport: ' + es6DefaultExport2.name + ' -> ' + JSON.stringify(es6DefaultExport2));
console.log('## es6NamedExport: ' + es6NamedExport2.name + ' -> ' + JSON.stringify(es6NamedExport2));

var fooName = es5ModuleFoo.name;
export { es5ModuleFoo as foo, fooName };
