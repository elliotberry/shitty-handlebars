// Importing the findValues function from the findValues.js file
import { findValues } from "./findValues.js";

// Defining the render function that takes a template and data as parameters
const render = function (template, data) {
  if (!template) {
    // If the template is not a string, return an empty string
    return '';
  }
  // Regular expression to match Handlebars-style template tags
  const regex = /{{\s*#(\w+)(.*?)}}([\s\S]*?){{\s*\/\1\s*}}/g;

  // Replacing the matched template tags with their corresponding values
  template = template.replace(regex, (match, key, condition, innerTemplate) => {
    // Finding the value for the key in the data object
    const value = findValues(data, key)[0];
    if (Array.isArray(value)) {
      // If the value is an array, recursively render the innerTemplate for each item in the array
      return value.map(item => render(innerTemplate, item)).join('');
    } else if (typeof value === 'object') {
      // If the value is an object, recursively render the innerTemplate with the object as data
      return render(innerTemplate, value);
    } else if (condition && findValues(data, condition.trim())[0]) {
      // If a condition is provided and it evaluates to true, render the innerTemplate with the original data
      return render(innerTemplate, data);
    } else {
      // If none of the above conditions are met, return an empty string
      return '';
    }
  });

  // Regular expression to match simple template tags
  return template.replace(/{{\s*(\S+)(.*?)\s*}}/g, (match, key, condition) => {
    // Finding the value for the key in the data object
    const value = findValues(data, key)[0];
    if (condition && !value) {
      // If a condition is provided and the value is falsy, return an empty string
      return '';
    } else if (condition && value) {
      // If a condition is provided and the value is truthy, return the condition itself
      return condition.trim();
    } else {
      // If none of the above conditions are met, return the value or an empty string
      return value || '';
    }
  });
};

// Exporting the render function as the default export of the module
export default render;
