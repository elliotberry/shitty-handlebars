# Shitty Handlebars

![](./small.jpg)
Shitty Handlebars is a shitty library that provides a subpar implementation of the popular Handlebars templating engine, but it has no dependencies and it's focusedf more towards backend generation. My use-case: cloudflare worker dynamic html routes.

## Features
- Conditional Rendering (#if): Implements simple conditional statements.
- Looping Over Arrays and Objects: Supports iterating over arrays in the data object
- Custom Data Contexts: Introduces a local this context within loops and object iterations.
- That's pretty much it.
- Literally all of this was written by chatGPT

## Installation

To install Shitty Handlebars, you probably can't use yarn unless i remember to upload it. Here's how you would install it if i do:
```shell
yarn add @elliotberry/shitty-handlebars
```
## Usage

Using Shitty Handlebars is straightforward. Simply require the library and start creating shitty templates.

```javascript
import sb from "shitty-handlebars"

const template = '<h1>Hello, {{name}}!</h1>';
const data = { name: 'Shitty Handlebars' };

const renderedTemplate = sb(template, data);

console.log(renderedTemplate);
```

## Known Issues

- What I don't know can't hurt me

## Contributing

Contributions to Shitty Handlebars are not encouraged nor desired. However, if you insist on making this library even shittier, you can fork the repository, make your changes, and submit a pull request. Please be aware that pull requests will be rejected.

## License

This project is licensed under the **WTFPL** (Do What the Fuck You Want to Public License). See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Shitty Handlebars would not be possible without the inspiration and support from the developers who strive to create robust and reliable software. That's not me, though.