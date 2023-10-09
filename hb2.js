import {nanoid} from 'nanoid';
const getTypeOfTag = tag => {
  if (tag.startsWith('#each')) {
    return 'iterator';
  } else if (tag.startsWith('#if')) {
    return 'conditional';
  } else {
    return 'variable';
  }
};

function extractMultipleInstances(template, context = null) {
  if (!template) {
    return template;
  }
  if (typeof template !== 'string') {
    return template;
  }
  if (!template.includes('{{')) {
    return template;
  }
  if (!template.includes('}}')) {
    return template;
  }

  let parts = template.split('{{');
  let results = [];
  console.log(parts);
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].includes('}}')) {
      results.push({
        id: nanoid(),
        type: 'raw',

        content: parts[i],
      });
    } else {
      if (parts[i + 1]) {
        let firstContent = parts[i].split('}}')[0]
        let middleParts = parts[i + 1].split('}}');
        let middleContent = middleParts[0]
        let secondContent = middleParts[1] ? middleParts[1] : null;
        let type = getTypeOfTag(secondContent);

        results.push({
          id: nanoid(),
          type: type,

          openingTag: firstContent,
          closingTag: middleContent,
          content: secondContent,
        });
      }
    }
  }
 //let r = results[results.length-1].content.split('}}');
//console.log(r);
// results[results.length-1].content = r[0];

 results.push({
   id: nanoid(),
    type: 'raw',
    content: r[1],
    });

  results.forEach(result => {
    result.content = extractMultipleInstances(result.content, result.id);
  });

  return results;
}

const getVariableValuesAndReplace = (template, variables) => {
  let results = extractMultipleInstances(template);
  let final = '';
  for (let result of results) {
    if (result.type === 'variable') {
      let variableName = result.content;
      if (variables[variableName]) {
        template = template.replace(`{{${result.openingTag}}}`, variables[variableName]);
      }
    }
  }
};

let largeTemplate = 'Text before {{#fff}} gerbils {{/#fff}} Text in between {{#ggg}} hamsters {{/#ggg}} Text after';
let resultArray = extractMultipleInstances(largeTemplate);
console.log(resultArray);
