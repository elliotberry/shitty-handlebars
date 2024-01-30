import { findValues } from "./findValues.js";

const render = function (template, data) {
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

  // Handle loops and objects {#key}...{/key}
  const regex = /{{\s*#(\w+)(.*?)}}([\s\S]*?){{\s*\/\1\s*}}/g;
  template = template.replace(regex, (match, key, condition, innerTemplate) => {
    const value = findValues(data, key)[0];
    if (Array.isArray(value)) {
      return value.map(item => {
        const newData = { ...data, this: item };
        return render(innerTemplate, newData);
      }).join('');
    } else if (typeof value === 'object') {
      if (value !== null) {
        return Object.keys(value).map(objKey => {
          const newData = { ...data, this: value[objKey] };
          return render(innerTemplate, newData);
        }).join('');
      } else {
        return '';
      }
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
