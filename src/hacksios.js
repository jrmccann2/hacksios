module.exports = {
  get: url => {
    return new Promise((resolve, reject) => {
      // Define a new XML HTTP request
      const xhr = new XMLHttpRequest();

      // Define what type of request, where the request should go to, and whether the request should by async
      xhr.open('GET', url, true);

      // Provide a function to run when the data loads
      xhr.onload = function() {
        let response;
        try {
          // Attempt to parse the response from JSON to javascript
          response = JSON.parse(xhr.responseText);
        } catch (err) {
          // If the parse fails, the catch block will run
          response = xhr.responseText;
        }
        // If our request is ready (ready state 4) and the status is 200, our response is good to go.
        if (xhr.readyState === 4 && xhr.status === 200) {
          // If this IF block runs, we know that we are good to resolve with the data.
          resolve(response);
        } else {
          // Something went wrong and the Promise needs to be rejected.
          reject(response);
        }
      };
      // This line officially kicks off the request, but we have nothing to send (aka a request body)
      xhr.send(null);
    });
  },

  post: (url, data) => {
    return new Promise((resolve, reject) => {
      // Prep our data to be sent by converting it to stringified JSON
      const json = JSON.stringify(data);

      // Define a new XML HTTP request
      const xhr = new XMLHttpRequest();

      // Define what type of request, where the request should go to, and whether the request should by async
      xhr.open('POST', url, true);

      // For this post, we have to declare that the content is sending JSON
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      // Define a function to run once the XHR loads.
      xhr.onload = function() {
        let response;
        try {
          // Attempt to parse the response from JSON to javascript
          response = JSON.parse(xhr.responseText);
        } catch (err) {
          // If the parse fails, the catch block will run
          response = xhr.responseText;
        }
        // If our request is ready (ready state 4) and the status is 200, our response is good to go.
        if (xhr.readyState === 4 && xhr.status === 200) {
          // If this IF block runs, we know that we are good to resolve with the data.
          resolve(response);
        } else {
          // Something went wrong and the Promise needs to be rejected.
          reject(response);
        }
      };
      // This line officially kicks off the request, and sends off the JSON body.
      xhr.send(json);
    });
  },
};
