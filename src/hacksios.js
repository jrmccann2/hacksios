module.exports = {
  get: url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        let response;
        try {
          response = JSON.parse(xhr.responseText);
        } catch (err) {
          response = xhr.responseText;
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      };
      xhr.send(null);
    });
  },

  post: (url, data) => {
    return new Promise((resolve, reject) => {
      const json = JSON.stringify(data);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.onload = function() {
        let response;
        try {
          response = JSON.parse(xhr.responseText);
        } catch (err) {
          response = xhr.responseText;
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      };
      xhr.send(json);
    });
  },
};
