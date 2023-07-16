const renderTemplate = function(template, data) {
  const regex = /{{\s*#(\w+)\s*}}([\s\S]*?){{\s*\/\1\s*}}/g;

  template = template.replace(regex, (match, key, innerTemplate) => {
    const value = data[key];
    if (Array.isArray(value)) {
      return value.map(item => renderTemplate(innerTemplate, item)).join('');
    } else if (typeof value === 'object') {
      return renderTemplate(innerTemplate, value);
    } else {
      return '';
    }
   
  });

  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return data[key] || '';
  });
}


export default renderTemplate;