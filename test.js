import renderTemplate from './index.js';
const template = `
  <h1>{{title}}</h1>
  <h3>Here's an array:</h3>
  {{#users}}
    <p>{{name}} - {{email}}</p>
  {{/users}}

  <h3>Here's an object:</h3>
  {{#info}}
    <p>{{description}}</p>
    <p>{{date}}</p>
  {{/info}}
  {{#if info}}ddd{{/if}}
  <p>{{test.test2.test3}}</p>
`;
function splitTemplateString(str) {
  const regex = /{{\s*(\w+)\s*}}/g;
  const matches = str.match(regex);
  const parts = str.split(regex);

  const result = [];

  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i]);
    if (i < parts.length - 1) {
      const match = matches[i];
      const label = match.substring(2, match.length - 2);
      result.push(label);
    }
  }

  return result;
}
const data = {
  title: 'User List',
  users: [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Alice', email: 'alice@example.com' }
  ],
  test: {
    test2: {
      test3: 'test3'
    }
  },
  
  info: {
    description: 'This is a test',
    date: '2020-01-01'
  }
};

const output = renderTemplate(template, data);
//let g = splitTemplateString(template);
console.log(output);