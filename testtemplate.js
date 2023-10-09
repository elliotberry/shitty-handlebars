
const data = {
    page: {
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: "My Page Title"
                        }
                    }
                ]
            }
        },
        created_by: {
            object: "John Doe"
        },
        created_time: "2021-10-01T12:00:00Z",
        last_edited_by: {
            object: "Jane Smith"
        },
        last_edited_time: "2021-10-02T12:00:00Z",
        url: "https://example.com/my-page",
        children: {
            results: [
                {
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            {
                                text: {
                                    content: "This is a paragraph."
                                }
                            }
                        ]
                    }
                },
                {
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            {
                                text: {
                                    content: "This is another paragraph with a "
                                },
                                link: {
                                    url: "https://example.com",
                                    type: "external",
                                    title: [
                                        {
                                            text: {
                                                content: "link"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                text: {
                                    content: "."
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
};

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{page.properties.Name.title.[0].text.content}}</title>
</head>
<body>
    <h1>{{page.properties.Name.title.[0].text.content}}</h1>
    <p>Created by: {{page.created_by.object}}</p>
    <p>Created time: {{page.created_time}}</p>
    <p>Last edited by: {{page.last_edited_by.object}}</p>
    <p>Last edited time: {{page.last_edited_time}}</p>
    <p>URL: <a href="{{page.url}}">{{page.url}}</a></p>
    <h2>Children:</h2>
    <ul>
        {{#each children.results}}
            <li>
                <p>Type: {{this.type}}</p>
                {{#if this.paragraph.rich_text.[0].link}}
                    <p>Content: <a href="{{this.paragraph.rich_text.[0].link.url}}">{{this.paragraph.rich_text.[0].text.content}}</a></p>
                {{else}}
                    <p>Content: {{this.paragraph.rich_text.[0].text.content}}</p>
                {{/if}}
            </li>
        {{/each}}
    </ul>
</body>
</html>`;

export {template, data};
