import React, { useState } from 'react'
import ShoppingForm from './shoppingForm'
import Shplist from './shplist'

function ShoppingAll() {
    const [item , setItme] = useState([]);

    //adding item
    const AddItem = (item) =>{
        setItme([...item , {text:item, completed:false}])
    }

    //toggleItem function
    const toggleItem = (index) =>{
        const newItem = [...item];
        newItem[index].completed = !newItem[index].completed
        setItme(newItem)
    }
    
    //remove item
    const removeItem = (index) =>{
        const newItem = item.filter((item , i) => i !== index)
        setItme(newItem)
    }
  return (
    <div>
        <h1>Shopping list app</h1>
         <ShoppingForm AddItem={AddItem} />
         <Shplist item={item} toggleItem={toggleItem} removeItem={removeItem} />
    </div>
  )
}

export default ShoppingAll