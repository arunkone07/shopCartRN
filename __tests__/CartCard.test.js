import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CartCard from '../app/components/CartCard';

describe('CartCard-1 test', () => {
  test('should match snapshot', () => {
    const title = 'Product 1';
    const price = '10';
    const image = 'https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg';
    const counter = 1;

    let card = render(
    <CartCard
      title={title} 
      price={price} 
      image={image} 
      counter={counter} 
      onIncrement={()=>{}}
      onDecrement={()=>{}}
    />
    );

    expect(card.toJSON()).toMatchSnapshot();
  });

  test('Buttons test', () => {
    const {getByTestId} = render(<CartCard/>);

    const incrementButton = getByTestId('increment-button');
    // const decrementButton = getByTestId('decrement-button');
    const deleteButton = getByTestId('delete-button');
    expect(incrementButton  && deleteButton).toBeTruthy();
  });

  test('Cart events test', () => {
    const mockFn = jest.fn()
    const {getByTestId} = render(
      <CartCard 
        handleIncrement={mockFn} 
        handleDecrement={mockFn}
        handleDelete={mockFn} 
        counter={1}
      />
    );

    fireEvent.press(getByTestId('increment-button'))
    fireEvent.press(getByTestId('decrement-button'))
    fireEvent.press(getByTestId('delete-button'))
    expect(mockFn).toHaveBeenCalledTimes(3)
  })
});
