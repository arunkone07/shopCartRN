import React from "react";
import { Alert, Button, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// import Screen from "./Screen";
import CartCard from "./CartCard";

import { incremented, decremented, deleted, emptied } from "../store/Cart";
import { productRemovedFromCart } from "../store/Products";

function Cart () {
  
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const handleIncrement = (item) => dispatch(incremented(item));
  const handleEmpty = () => {
    cart.forEach(product => {
      dispatch(productRemovedFromCart(product));
    });
    dispatch(emptied());
    Alert.alert("Thank you...", "Visit Again!");
  }
  
  return (
    <SafeAreaView>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        
        renderItem={({ item }) => (
          <CartCard
            id={item.id}
            title={item.title}
            price={"Rs." + item.price}
            image={item.image}
            counter={item.counter}
            handleIncrement={() => dispatch(incremented(item))}
            handleDecrement={() => dispatch(decremented(item))}
            handleDelete={() => {
              dispatch(deleted(item));
              dispatch(productRemovedFromCart(item));
            }}
          />
        )}
      />

      <Button
        title="Proceed to Buy"
        testID="buy-button"
        onPress={handleEmpty}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: "yellow",
  },
});

export default Cart;
