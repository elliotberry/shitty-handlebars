import { findValues } from "./findValues.js";

const render = async function (template, data) {
  if (!template) {
    return '';
  }
  if (typeof template === 'function') {
    return template(data);
  }

  // Handle if statements
  const ifRegex = /{{\s*#if\s*(\S+?)\s*}}([\s\S]*?){{\s*\/if\s*}}/g;
  template = template.replace(ifRegex, (match, condition, innerTemplate) => {
    const value = findValues(data, condition)[0];
    if (value) {
      return render(innerTemplate, data);
    } else {
      return '';
    }
  });

  // Handle loops and objects
  const regex = /{{\s*#(\w+)(.*?)}}([\s\S]*?){{\s*\/\1\s*}}/g;
  template = template.replace(regex, (match, key, condition, innerTemplate) => {
    const value = findValues(data, key)[0];
    if (Array.isArray(value)) {
      return value.map(item => render(innerTemplate, item)).join('');
    } else if (typeof value === 'object') {
      return render(innerTemplate, value);
    } else if (condition && findValues(data, condition.trim())[0]) {
      return render(innerTemplate, data);
    } else {
      return '';
    }
  });

  // Handle simple values
  return template.replace(/{{\s*(\S+)(.*?)\s*}}/g, (match, key, condition) => {
    const value = findValues(data, key)[0];
    if (condition && !value) {
      return '';
    } else if (condition && value) {
      return condition.trim();
    } else {
      return value || '';
    }
  });
};

export default render;
