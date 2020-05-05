export const fetchWithApiHeader = url =>
  fetch(url, {
    headers: {
      "x-api-key": process.env.X_API_KEY
    }
  }).then(response => response.json());
