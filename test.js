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
`;

const data = {
  title: 'User List',
  users: [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Alice', email: 'alice@example.com' }
  ],
  info: {
    description: 'This is a test',
    date: '2020-01-01'
  }
};

const output = renderTemplate(template, data);
console.log(output);