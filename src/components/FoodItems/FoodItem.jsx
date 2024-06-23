import React,{ useState } from 'react'
import './FoodItem.css'

import { asset } from '../../assets/frontend_assets/asset'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../Redux/Slice'
const FoodItem = ({id,name,price,description,image}) => {

  const dispatch = useDispatch();
   const [itemCount,setItemCount] = useState(0);
  
  
   const handleItemCountIncremet = () => {
    setItemCount(itemCount+1);
    dispatch(increment());
   
  };

  const handleItemCountDecremet = () => {
    setItemCount(prev=>prev-1)
    dispatch(decrement());

  };
  return (
    <div className='food-item hover:border-4  hover:border-yellow-600 transition-all duration-300'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=''/>
        { itemCount ?
        <div className='food-item-counter'>
            <img onClick={()=>handleItemCountDecremet()} src={asset.remove_icon_red} alt=''/>
            <p>{itemCount}</p>
            <img onClick={()=>handleItemCountIncremet()} src={asset.add_icon_green} alt=''/>
            </div>:<></>
        }
   
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={asset.rating_starts} alt=''/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <div className='flex flex-row justify-between h-10 items-center'>
        <div className=''><p className='food-item-price'><span className='pr-1'>&#8377;</span>{price}</p></div>
       {  itemCount === 0 && <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 " onClick={()=>handleItemCountIncremet()} >
      Add
    </button>
}
        </div>
      </div>
    </div>
  )
}

export default FoodItem;