import React from 'react'

function ShopItem({index , item , toggleItem , removeItem}) {


  return (
    <div>
        <input type='checkbox' 
        checked={item.completed}
        onChange={() => toggleItem(index)}/>
        <span>
            {item.text}
        </span>
        <button onClick={() => removeItem(index)}>Remove</button>
    </div>
  )
}

export default ShopItem