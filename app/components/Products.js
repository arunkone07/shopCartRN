import React, { useEffect } from "react";

import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "./ProductCard";

import { productAdded, productAddedToCart } from "../store/Products";
import { productToCart } from "../store/Cart";

import productsApi from "../api/GetProducts";

function Products() {

  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await productsApi.getProducts();
    response.data.forEach((product) => dispatch(productAdded(product)))
  };

  
  const allProducts = useSelector((state) => state.products)

  return (
    <SafeAreaView>

      <FlatList
        data={allProducts}
        keyExtractor={(product) => product.id.toString()}

        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            title={item.title}
            price={"Rs." + item.price}
            image={item.image}
            counter={item.counter}
            handleAdd={() => {
              dispatch(productToCart(item));
              dispatch(productAddedToCart(item))
            }}
          />
        )}

      />

      {/* can use below button for navigation in case of Stack Navigator 
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate("Cart", { addedProducts })}
        /> 
      */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: "yellow",
  },
});

export default Products;
