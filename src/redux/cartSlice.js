import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + newItem.quantity;
            } else {
                state.items.push({ ...newItem });
            }
        },
        increaseQuantity(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
            }
        },
        decreaseQuantity(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem && existingItem.quantity > 1) {

                existingItem.quantity = existingItem.quantity - 1;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },
    },
});

export const { addItemToCart, removeItemFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
