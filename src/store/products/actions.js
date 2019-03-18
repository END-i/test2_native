export function getProductsList(data) {
  return {
    type: "PRODUCTS_LIST",
    data
  };
}

export function getData() {
  return dispatch => {
    fetch("https://api.myjson.com/bins/v3ct2")
      .then(data => {
        return data.json();
      })
      .then(response => {
        console.log(response);
        // dispatch(products(response));
      })
      .catch(error => {
        console.log(error);
        // dispatch(productsError(response));
      });
  };
}
