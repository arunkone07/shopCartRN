import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Products from '../app/components/Products';


import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useDispatch, useSelector } from 'react-redux';

import productsReducer, { productAdded, productAddedToCart } from "../app/store/Products";
import cartReducer from "../app/store/Cart";

describe('Products test', () => {
    const reactRedux = { useDispatch, useSelector }
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

    it('snapshot test', () => {
        const initialState = { };
        const mockStore = configureStore();
        let store = mockStore(initialState);
        const products = render(
            <Provider store={store}>
                <Products />
            </Provider>
        );

        expect(products.toJSON()).toMatchSnapshot();
    });

    test('should return the initial state', () => {
        expect(productsReducer(undefined, { type: undefined })).toEqual([])
    });

    test('should handle a product being added to an empty list', () => {
        const previousState = []
        expect(productsReducer(previousState, productAdded({ "id":1,
        "title":"Product 1","price":"10","image":"https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg","isAdded":0}))).toEqual([{ 
            id: 1,
            title: "Product 1",
            price: "10",
            image: "https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg",
            counter: 0
        }
        ])
    });

    test('should handle a product being added to an existing list', () => {
        const previousState = [{ 
            id: 1,
            title: "Product 1",
            price: "10",
            image: "https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg",
            counter: 0
        }]
        expect(productsReducer(previousState, productAdded({"id":2,"title":"Product 2","price":"100","image":"https://rukminim1.flixcart.com/image/416/416/jf751u80/bat/g/g/u/1-1-2-short-handle-virat-kohli-grand-edition-tennis-cricket-bat-original-imaf3j2zhmdnays3.jpeg?q=70","isAdded":0}))).toEqual([
            { 
                id: 1,
                title: "Product 1",
                price: "10",
                image: "https://shop.teamsg.in/wp-content/uploads/2021/04/Blazetech-yellow-small-2-4-scaled.jpg",
                counter: 0
            },
            { 
                id: 2,
                title: "Product 2",
                price: "100",
                image: "https://rukminim1.flixcart.com/image/416/416/jf751u80/bat/g/g/u/1-1-2-short-handle-virat-kohli-grand-edition-tennis-cricket-bat-original-imaf3j2zhmdnays3.jpeg?q=70",
                counter: 0
            }
        ])
      
    });

});
