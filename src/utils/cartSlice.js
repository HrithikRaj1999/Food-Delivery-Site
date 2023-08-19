import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsObj: [],
        itemsId: [],
        totalCost: 0,
    },
    reducers: {
        //mutating the state 
        addItems: (state, action) => {
            const foodObj = action.payload;
            const foodId = foodObj.card.info.id
            const indexToInsert = state.itemsId.lastIndexOf(foodId)
            if (indexToInsert === -1) {
                state.itemsId.push(foodId)
                state.itemsObj.push(foodObj)
            }
            else {
                state.itemsId.splice(indexToInsert, 0, foodId);
                state.itemsObj.splice(indexToInsert, 0, foodObj);

            }
            let cost = (foodObj.card.info.defaultPrice || foodObj.card.info.price) / 100
            state.totalCost += Math.floor(cost)
        },
        removeItems: (state, action) => {
            const foodObj = action.payload;
            const foodId = foodObj.card.info.id
            const lastIndex = state.itemsId.lastIndexOf(foodId);
            state.itemsId.splice(lastIndex, 1);
            state.itemsObj.splice(lastIndex, 1)
            let cost = (foodObj.card.info.defaultPrice || foodObj.card.info.price) / 100
            state.totalCost -= Math.floor(cost)
        }
        ,
        clearCart: (state) => {
            state.itemsObj = [];
            state.itemsId = [];
            state.totalCost = 0;
        },

    }
});
//actions are functions within reducers
export const { addItems, removeItems, clearCart, getTotalCostOfAddedItem } = cartSlice.actions;
//reducer will call actions 
export default cartSlice.reducer;