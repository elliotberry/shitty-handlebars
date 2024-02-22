# Shitty Handlebars

![](./small.jpg)
Shitty Handlebars is a shitty library that provides a subpar implementation of the popular Handlebars templating engine, BUT it has no dependencies and it's gotta focus on backend generation. My use-case: cloudflare worker dynamic html routes.

## Features
- Conditional Rendering (#if): Implements simple conditional statements.
- Looping Over Arrays and Objects: Supports iterating over arrays in the data object
- Custom Data Contexts: Introduces a local this context within loops and object iterations.
- That's pretty much it.
- Literally all of this was written by chatGPT

## Installation

```shell
yarn add elliotberry/shitty-handlebars
```
## Example

Using Shitty Handlebars is straightforward. Here's the kitchen sink of available features:

A template example:

```
<h1>Hello, {{name}}!</h1>
{{#if isATurtle}}<h3>Turtle confirmed.</h3>{{/if}}
{{#traits}}<strong>{{this}}</strong>{{/traits}}
```
Some data:

```javascript
const data = { 
	name: 'Mitch McConnell', 
	isATurtle: true, 
	traits: ['old', 'turtle-like']
};
```
Finally, the script:

```javascript
import shb from "shitty-handlebars"

const template = `<h1>Hello, {{name}}!{{#if isATurtle}}<h3>Turtle confirmed.</h3>{{/if}}{{#traits}}<strong>{{this}}</strong>{{/traits}}`;
const data = { name: 'Mitch McConnell', isATurtle: true, traits: ['old', 'turtle-like']};

const renderedTemplate = shb(template, data);

console.log(renderedTemplate);
```

## Acknowledgments

Thanks, AI.