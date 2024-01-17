## Namaste Youtube

- useSearchParams()
- Redux
  create store and create slice by using..
  then create reducers and how should we use it

//////////////////////////////////////////////////////////////////

Redux store

### Step 1: Create a Redux Store

**`store.js`**

Create a file named `store.js` to configure and export the Redux store:

```javascript
// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Configure and create a Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Export the Redux store
export default store;
```

### Step 2: Create a Slice with Reducers

**`cartSlice.js`**

Create another file named `cartSlice.js` to define a Redux slice for managing a shopping cart. The `createSlice` function is used to generate action creators and a reducer.

```javascript
// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the "cart" state
const cartSlice = createSlice({
  name: "cart", // The name of the slice
  initialState: {
    items: [], // Initial state for the shopping cart
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((total, item) => total + item.price, 0);
    },
  },
});

// Extract and export action creators and the reducer
export const { addItemToCart, removeItemFromCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
```

### Step 3: Use Redux Store in a React Component

**`ShoppingCartComponent.js`**

Create a React component (`ShoppingCartComponent.js`) that uses the Redux store, subscribes to the state, and dispatches actions to update the state.

```javascript
// ShoppingCartComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, calculateTotal } from "./cartSlice";

function ShoppingCartComponent() {
  // Access the cart state from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  // Access the dispatch function
  const dispatch = useDispatch();

  // Dispatch actions to update the cart state
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
    dispatch(calculateTotal());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item));
    dispatch(calculateTotal());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button
        onClick={() => handleAddToCart({ id: 1, name: "Item A", price: 10.99 })}
      >
        Add Item A to Cart
      </button>
      <button
        onClick={() => handleAddToCart({ id: 2, name: "Item B", price: 7.49 })}
      >
        Add Item B to Cart
      </button>
    </div>
  );
}

export default ShoppingCartComponent;
```

### Step 4: Integrate the Store and Component in the App

**`App.js` or `index.js`**

Integrate the Redux store into your main application file (e.g., `App.js` or `index.js`) using the `Provider` component from `react-redux`. This ensures that your Redux store is available to all components in your application.

```javascript
// App.js or index.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ShoppingCartComponent from "./ShoppingCartComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Shopping Cart App</h1>
        <ShoppingCartComponent />
      </div>
    </Provider>
  );
}

export default App;
```

This example sets up a Redux store for managing a shopping cart. The `ShoppingCartComponent` uses the store to display the items in the cart, add items to the cart, remove items, and calculate the total price. The state is managed globally through Redux, and actions are dispatched to update that state.
