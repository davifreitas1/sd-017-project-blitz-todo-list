const tasksFetch = async () => {
  try {
    const response = await fetch('http://localhost:3001/tasks');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  tasksFetch,
};