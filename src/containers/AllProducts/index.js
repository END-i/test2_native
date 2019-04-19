import React, { useEffect } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";

import Item from "./Item";
import { fetchGetProductsList } from "../../store/products/actions";
import { Loader } from "./styled";

const AllProducts = props => {
  const { products, fetchGetProductsList, componentId } = props;

  useEffect(() => {
    fetchGetProductsList();
  });

  if (!products) {
    return (
      <Loader>
        <ActivityIndicator size="large" color="#0000ff" />
      </Loader>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <Item item={item} componentId={componentId} />}
      keyExtractor={(item, index) => index.toString()}
      windowSize={1.5}
    />
  );
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  fetchGetProductsList: () => dispatch(fetchGetProductsList())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts);
