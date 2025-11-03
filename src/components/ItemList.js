import { useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items,dummy}) =>{
//  console.log(items);
// console.log(dummy);

//to dispatch an action to add item to cart we need to import useDispatch from react-redux
const dispatch = useDispatch();
const handleAdd = (item) =>{
  //dispatch an action to add item to cart
  //addItems is the one that we exported from cartSlice.js
  //payload is the item that we want to add to cart
  // dispatch(addItems("Dummy momo"));
  //item is what we are iterating over with map line 23.
    dispatch(addItems(item));

}

  return (
    <div>
        {items.map((item)=>(
        <div className="p-4 m-4 border-b-2 border-gray-200 text-left flex justify-between" key={item.card.info.id}>
           <div>
                   <div className="py-1">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
           </div>
           <div className="flex flex-col items-center ">
              <img className="w-28 p-1" src={CDN_IMG_URL+item.card.info.imageId}/>
              {/* dont do this-->this means we already called func right away<button onClick={handleAdd(item)}  */}
         <button 
        //  onClick={handleAdd}
        //refer readme to know the difference between the 3.
         onClick={()=>handleAdd(item)} //we are passing a callback function here
         className="p-2 rounded-md text-xs  bg-white shadow-lg border-green-300 relative mx-2" >Add +</button>
           </div>
        
       
        </div>))}
        </div>
  )
}

export default ItemList;