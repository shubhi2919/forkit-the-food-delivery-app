
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    //read the cart items from redux store 
   const cartItems = useSelector((store)=>store.cart.items);
     //if i do this  err comes due to {} after arrow Line 6:46:  
     // Expected an assignment or function call and instead saw an expression  no-unused-expressions
    //   const cartItems = useSelector((store)=>{store.cart.items});

    //function to dispatch an action clear the cart 
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="p-4 m-4 text-center" >
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto shadow-lg">
                <button
                onClick={handleClearCart}
                 className="text-left p-2 m-2 bg-black text-white shadow-md rounded-lg">Clear Cart</button>
                 {/* empty cart then display msg */}
                 {cartItems.length === 0 && <h1 className="text-xl font-bold">Your cart is empty
You can go to home page to view more restaurants</h1>}
                <ItemList items={cartItems}/>
            </div>

        </div>
    )
}

export default Cart;