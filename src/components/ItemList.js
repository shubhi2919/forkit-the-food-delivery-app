import { CDN_IMG_URL } from "../utils/constants";

const ItemList = ({items}) =>{
//  console.log(items);

  return (
    <div>
        {items.map((item)=>(
        <div className="p-4 m-4 border-b-2 border-gray-200 text-left flex justify-between" key={item.card.info.id}>
           <div>
                   <div className="py-1">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
           </div>
           <div className="flex flex-col items-center ">
              <img className="w-28 p-1" src={CDN_IMG_URL+item.card.info.imageId}/>
         <button className="p-2 rounded-md text-xs  bg-white shadow-lg border-green-300 relative mx-2" >Add +</button>
           </div>
        
       
        </div>))}
        </div>
  )
}

export default ItemList;