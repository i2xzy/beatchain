export default url => {
  return fetch(url).then(response => {
    if (response.status !== 200) {
      throw new Error(`User does not exist`);
    }
    return response.json();
  });
};
