import { findValues } from "./findValues.js";

const renderTemplate = function (template, data) {
  const regex = /{{\s*#(\w+)(.*?)}}([\s\S]*?){{\s*\/\1\s*}}/g;

  template = template.replace(regex, (match, key, condition, innerTemplate) => {
    const value = findValues(data, key)[0];
    if (Array.isArray(value)) {
      return value.map(item => renderTemplate(innerTemplate, item)).join('');
    } else if (typeof value === 'object') {
      return renderTemplate(innerTemplate, value);
    } else if (condition && findValues(data, condition.trim())[0]) {
      return renderTemplate(innerTemplate, data);
    } else {
      return '';
    }
  });

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

export default renderTemplate;
