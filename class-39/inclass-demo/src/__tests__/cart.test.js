import cartReducer from '../store/cart';
import productsReducer from '../store/products';
import { addToCart, removeFromCart } from '../store/actions';
import { legacy_createStore as createStore, combineReducers } from 'redux';

describe('Testing the cart reducer', () => {

  const reducers  = combineReducers({
    cart: cartReducer,
    products: productsReducer
  });

  const store = createStore(reducers);

  test('Should add a product to our cart store', () => {

    let state = store.getState();

    let product = state.products[0];
    store.dispatch(addToCart(product));

    state = store.getState();
    expect(state.cart[0].name).toBe('walkman');
  });

  test('Should remove a product from our cart', () => {
    let state = store.getState();

    let product = state.cart[0];
    store.dispatch(removeFromCart(product));

    state = store.getState();
    expect(state.cart.length).toBe(0);
  });
});
