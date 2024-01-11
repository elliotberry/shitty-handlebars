import assert from 'assert';
import renderTemplate from './index.js';


async function testRenderTemplate() {
  // Test: Basic replacement
  assert.strictEqual(
    renderTemplate('{{name}}', { name: 'John' }),
    'John',
    'Basic replacement failed'
  );

  // Test: Conditional replacement
  assert.strictEqual(
    renderTemplate('{{#condition}}True{{/condition}}', { condition: true }),
    'True',
    'Conditional replacement failed'
  );

  // Test: Array handling
  assert.strictEqual(
    renderTemplate('{{#items}}{{item}}{{/items}}', { items: [{ item: '1' }, { item: '2' }] }),
    '12',
    'Array handling failed'
  );

  // Test: Nested object
  assert.strictEqual(
    renderTemplate('{{#user}}{{name}}{{/user}}', { user: { name: 'Alice' } }),
    'Alice',
    'Nested object failed'
  );

  // Test: Complex scenario
  assert.strictEqual(
    renderTemplate('{{#user}}Name: {{name}}, Age: {{age}}{{/user}}', { user: { name: 'Bob', age: 30 } }),
    'Name: Bob, Age: 30',
    'Complex scenario failed'
  );
}

async function main() {
  await testRenderTemplate();
  console.log('All tests passed!');
}

main();
