import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        //cart items
        items:[],
    },
    //reducers is an object that contains the actions that will be used to update the state
    reducers:{
        addItems:(state,action)=>{
            //we are mutating the state directly here ie modyfying the state directly
            //In redux toolkit - newer redux - redux specially ask us to mutate the state directly-
            //we HAVE TO mutute it says.
            state.items.push(action.payload);

            //--> redux is still doing all this behind the scene just not asking devs to do it.
            //-->it is using immer.js library to do this.

            //in vanilla redux we would have to return a new state instead of mutating the state directly
            //it used to give warning DONT MUTATE THE STATE DIRECTLY
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState;
        },
        // this part is reducer function
        // (state,action)=>
        //     {
        //     state.items.push(action.payload)

        // },
        removeItems:(state,action)=>{
             state.items.pop();
        },
        //not added action here because we just want to clear the cart
        clearCart:(state)=>{
            //state = []; //this will not work because we are just adding reference &  we are mutating the state 
             state.items.length  = 0; //will make our state as empty array
        }
    }
});
export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;