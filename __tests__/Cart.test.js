import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { mount } from 'enzyme';
import Cart from '../app/components/Cart';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector } from 'react-redux';

import cartReducer, { incremented, decremented, deleted, emptied } from "../app/store/Cart";

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

describe('Cart test', () => {
    const initialState = [{ 
        id: 1,
        title: "Product 1",
        price: "10",
        image: "https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg",
        counter: 0
    }];
    const mockStore = configureStore();
    let store;
    const reactRedux = { useDispatch, useSelector }
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

    it('snapshot test', () => {
        store = mockStore(initialState);
        const cart = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(cart.toJSON()).toMatchSnapshot();
    });

    test('should return the initial state', () => {
        expect(cartReducer(undefined, { type: undefined })).toEqual([])
    });

    let updatedStore = mockStore(initialState);

    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    updatedStore.dispatch = mockDispatch;
    // ? HERE THE INITIAL CONTENT OF THE MOCK
    // console.log(updatedStore.dispatch.mock);


    const wrapper = render(<Provider store={updatedStore}><Cart /></Provider>);
    wrapper.debug();

    const signOutBtn = wrapper.getByTestId("increment-button");
    
    expect(signOutBtn).toBeInTheDocument();

    expect(updatedStore.dispatch).not.toHaveBeenCalled();
    fireEvent.press(signOutBtn);
    // ? HERE THE CONTENT OF THE MOCK CHANGED
    // console.log(updatedStore.dispatch.mogit ck);

    expect(updatedStore.dispatch).toHaveBeenCalledTimes(1);
    // expect(updatedStore.dispatch.mock.lastCall[0].type).toMatch("destroySession");
    // screen.debug()

    // console.log(updatedStore.getActions());

});