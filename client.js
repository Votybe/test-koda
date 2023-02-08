fetch("http://localhost:5000/flip-coins?times=100")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
