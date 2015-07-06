import resolver from './helpers/resolver';
import insertCassette from './helpers/insert-cassette';
import cassette from './helpers/cassette';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);
insertCassette(cassette);

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
document.getElementById('ember-testing-container').style.visibility = containerVisibility;


