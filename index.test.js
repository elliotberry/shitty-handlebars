import assert from 'assert'
import renderTemplate from './index.js'
import { describe, beforeEach, afterEach, it } from 'node:test'

describe('shitty-handlebars', async () => {
    it('should do basic replacement', () => {
        // Test: Basic replacement
        assert.strictEqual(
            renderTemplate('{{name}}', { name: 'John' }),
            'John',
            'Basic replacement failed'
        )
    })
    it('should do basic replacement with cool html', () => {
        // Test: Basic replacement with cool html
        assert.strictEqual(
            renderTemplate('<h1>{{name}}</h1>', { name: 'John' }),
            '<h1>John</h1>',
            'Basic replacement with cool html failed'
        )
    })
    it('should remove tags with falsy values', () => {
        // Test: Removing tags with falsy values
        assert.strictEqual(
            renderTemplate('{{name}}', { name: '' }),
            '',
            'Removing tags with falsy values failed'
        )
    })

    it('should allow for if statements that are pretty basic', () => {
        let template = `<div>{{#if name}}<h1>{{name}}</h1>{{/if}}</div>`
        let data = {
            d: 'John',
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div></div>',
            'if statements that are pretty basic failed'
        )
    })

    it('should show the if statement content if the var exists', () => {
        let template = `<div>{{#if name}}<h1>{{name}}</h1>{{/if}}</div>`
        let data = {
            name: 'John',
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div><h1>John</h1></div>',
            'should show the if statement content if the var exists failed'
        )
    })
    it('should show the if statement content if the var exists and is false', () => {
        let template = `<div>{{#if name}}<h1>{{name}}</h1>{{/if}}</div>`
        let data = {
            name: false,
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div></div>',
            'should show the if statement content if the var exists and is false failed'
        )
    })
    it('should show the if statement content if the var exists and is 0', () => {
        let template = `<div>{{#if name}}<h1>{{name}}</h1>{{/if}}</div>`
        let data = {
            name: 0,
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div></div>',
            'should show the if statement content if the var exists and is 0 failed'
        )
    })
    it('should allow for loops', () => {
        let template = `<div>{{#name}}<h1>{{this}}</h1>{{/name}}</div>`
        let data = {
            name: ['John', 'Mary'],
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div><h1>John</h1><h1>Mary</h1></div>',
            'should allow for loops failed'
        )
    })
    it('should allow for loops with objects', () => {
        let template = `<div>{{#name}}<h1>{{this}}</h1>{{/name}}</div>`
        let data = {
            name: { name: 'John', age: 30 },
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div><h1>John</h1><h1>30</h1></div>',
            'should allow for loops with objects failed'
        )
    })
    it('should allow for loops with objects and null', () => {
        let template = `<div>{{#name}}<h1>{{this}}</h1>{{/name}}</div>`
        let data = {
            name: null,
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            '<div></div>',
            'should allow for loops with objects and null failed'
        )
    })
    it('should allow for complex multiline templates', () => {
        let template = `<div>  {{#name}}<h1>{{this}}</h1>  {{/name}}  </div>`
        let data = {
            name: ['John', 'Mary'],
        }

        let output = renderTemplate(template, data)

        assert.strictEqual(
            output,
            `<div>  <h1>John</h1>  <h1>Mary</h1>    </div>`,
            'should allow for complex multiline templates failed'
        )
    })  
})

