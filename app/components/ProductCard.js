import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProductCard({ title, price, image, counter, handleAdd }) {

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

        {!counter && (
          <TouchableOpacity 
            testID='add-button'
            style={styles.button}
            onPress = {handleAdd}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}

//resizeMode="contain"

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    color: "red",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default ProductCard;