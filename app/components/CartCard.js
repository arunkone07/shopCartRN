import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CartCard({ title, price, image, counter, handleIncrement, handleDecrement, handleDelete }) {

  return (
    <View style={styles.card}>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: image }}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>


        <TouchableOpacity
          testID="delete-button"
          style={styles.delete}
          onPress={handleDelete}
        >
          <Text>D</Text>
        </TouchableOpacity>


        <TouchableOpacity
          testID="increment-button"
          style={styles.increment}
          onPress={handleIncrement}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{counter}</Text>

        {counter > 0 && (
          <TouchableOpacity
            testID="decrement-button"
            style={styles.decrement}
            onPress={handleDecrement}
          >
            <Text>-</Text>
          </TouchableOpacity>
        )}

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
  },
  counter: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 65,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  decrement: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 110,
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  delete: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 150,
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  increment: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  price: {
    color: "red",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});


export default CartCard;