import assert from 'assert';
import renderTemplate from './index.js';
import {describe, beforeEach, afterEach, it} from 'node:test';


describe('shitty-handlebars', async () => {
  it('should do basic replacement', () => {
  // Test: Basic replacement
  assert.strictEqual(
    renderTemplate('{{name}}', { name: 'John' }),
    'John',
    'Basic replacement failed'
  );
  })
  it('should do basic replacement with cool html', () => {
  // Test: Basic replacement with cool html
  assert.strictEqual(
    renderTemplate('<h1>{{name}}</h1>', { name: 'John' }),
    '<h1>John</h1>',
    'Basic replacement with cool html failed'
  );
    })
  it('should remove tags with falsy values', () => {
  // Test: Removing tags with falsy values
  assert.strictEqual(
    renderTemplate('{{name}}', { name: '' }),
    '',
    'Removing tags with falsy values failed'
  );
    })

})
