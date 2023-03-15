import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';

import ProductCard from '../app/components/ProductCard';

describe('ProductCard-1 test', () => {

  const title = 'Product 1';
  const price = '10';
  const image = 'https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg';
  const counter = 0;

  test('should match snapshot', () => {
    let card = render(
    <ProductCard
      title={title} 
      price={price} 
      image={image} 
      counter={counter} 
      onAdd={()=>{}}
    />);
    expect(card.toJSON()).toMatchSnapshot();
  });

  test('Add button test', () => {
    const mockFn = jest.fn()
    const {getByTestId} = render(<ProductCard counter={0} handleAdd={mockFn}/>);
    const addButton = getByTestId('add-button');
    expect(addButton).toBeTruthy();
    fireEvent.press(addButton)
    expect(mockFn).toHaveBeenCalled()
  });
});
