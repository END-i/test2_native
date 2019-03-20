const getProductsList = data => ({
  type: 'GET_PRODUCTS_LIST',
  payload: data,
})

export const fetchGetProductsList = () => {
  return dispatch => {
    fetch('https://api.myjson.com/bins/v3ct2')
      .then(data => {
        return data.json()
      })
      .then(response => {
        dispatch(getProductsList(response))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
