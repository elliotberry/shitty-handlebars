# Shitty Handlebars

Shitty Handlebars is a shitty library that provides a subpar implementation of the popular Handlebars templating engine.

## Features

- Limited support for Handlebars syntax
- Minimalistic API. Only one method is exposed. The default one.
- High potential for undesired side effects
- At least it's lightweight
- Literally all of this was written by chatGPT

## Installation

To install Shitty Handlebars, you probably can't use yarn unless i remember to upload it. Here's how you would install it if i do:
```shell
yarn add shitty-handlebars
```
## Usage

Using Shitty Handlebars is straightforward. Simply require the library and start creating shitty templates.

```javascript
import shitty from "shitty-handlebars"

const template = '<h1>Hello, {{name}}!</h1>';
const data = { name: 'Shitty Handlebars' };

const shitty = new ShittyHandlebars();
const renderedTemplate = shitty.render(template, data);

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