export const fetchData = (url, callback) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data));
};
