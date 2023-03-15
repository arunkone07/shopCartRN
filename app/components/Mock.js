import React from "react";
import { FlatList } from "react-native";

const mockData = [
    {
      id: '1',
      counter: '1',
    },
    {
      id: '2',
      counter: '1',
    },
    {
      id: '3',
      counter: '1',
    },
]

function Mock() {
    <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        testID='list'
        renderItem={({ item }) => (
          <CartCard
            id={item.id}
            testID='cart'
            counter={item.counter}
          />
        )}

    />
}

export default Mock;