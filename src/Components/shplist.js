import React from 'react'
import ShopItem from './ShopItem'

function Shplist({items , toggleItem , removeItem}) {
  return (
    <div>
        {items > 0 ? (
            items.map((item) =>(
                <ShopItem 
                key={item.index}
                index={item.index}
                item={item} 
                toggleItem={toggleItem}
                removeItem={removeItem}/>
            ))
         ) :(
                <p>Item Not Found</p>
         )}
    </div>
  )
}

export default Shplist