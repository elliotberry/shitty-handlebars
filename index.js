const renderTemplate = function (template, data) {
  const regex = /{{\s*#(\w+)\s*}}([\s\S]*?){{\s*\/\1\s*}}|{{\s*#if\s*(\w+)\s*}}([\s\S]*?){{\s*\/if\s*}}|{{\s*log\s*([\s\S]*?)\s*}}/g;

  template = template.replace(regex, (match, key, innerTemplate, variable, scopedTemplate, logContent) => {
    try {
      if (key) {
        const value = data[key];
        if (Array.isArray(value)) {
          return value.map(item => renderTemplate(innerTemplate, item)).join('');
        } else if (typeof value === 'object') {
          return renderTemplate(innerTemplate, value);
        } else {
          return '';
        }

      } else if (variable && variable in data) {
        const value = data[variable];
        if (typeof data[variable] === 'boolean') {
          return value ? scopedTemplate : '';
        } else {
          if (value) {
            return renderTemplate(scopedTemplate, data);
          } else {
            return '';
          }
        }
      } else if (logContent) {
        console.log(logContent.trim());
        return '';
      } else {
        return '';
      }
    } catch (e) {
      console.log(e);
      return '';
    }
  });

  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return data[key] || '';
  });
};

export default renderTemplate;
