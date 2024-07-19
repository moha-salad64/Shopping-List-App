import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);

    // Input function 
    const handleAddButton = () => {
        if (!inputValue.trim()) {
            toast.error("Empty Shopping text!");
            return;
        }

        const newItem = {
            itemName: inputValue.trim(),
            quantity: 1,
            isSelected: false
        };
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');
        calculateTotal(newItems);
    };

    // Validate and handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddButton();
    };

    // Quantity Increase
    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        // calculateTotal(newItems);
    };

    // Quantity Decrease
    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 1) {
            newItems[index].quantity--;
            setItems(newItems);
            calculateTotal(newItems);
        } else {
            handleRemoveItem(index);
        }
    };

    // Toggle function
    const toggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    };

    // Calculate total items
    const calculateTotal = (itemsList) => {
        const totalItem = itemsList.reduce((total, item) => total + item.quantity, 0);
        setTotalItemCount(totalItem);
    };

    // Remove Item
    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, itemIndex) => itemIndex !== index);
        setItems(newItems);
        calculateTotal(newItems);
    };

    return (
        <div className='app-background'>
            <div className='input-side'>
                <h2>Shopping Text</h2>
                <form className='add-item-box' onSubmit={handleSubmit}>
                    <input
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className='add-item-input'
                        placeholder='add-new-item'
                    />
                    <button type="submit"><FaPlus /></button>
                </form>
            </div>
            <div className='container'>
                {/* <h2>Shopping List</h2> */}
                <div className='main-container'>
                    <div className='item-list'>
                        {items.length > 0 ?(
                        items.map((item, index) => (
                            <div className='item-container' key={index}>
                                <div className='item-name' onClick={() => toggleComplete(index)}>
                                    {item.isSelected ? (
                                        <>
                                            <input type='checkbox' className='checkBox' checked readOnly />
                                            <span className='completed'>{item.itemName}</span>
                                        </>
                                    ) : (
                                        <>
                                            <input type='checkbox' className='checkBox' />
                                            <span>{item.itemName}</span>
                                        </>
                                    )}
                                </div>
                                <div className='quantity'>
                                    <button onClick={() => handleQuantityDecrease(index)}><FaMinus /></button>
                                    <span>{item.itemName} ({item.quantity})</span>
                                    <button onClick={() => handleQuantityIncrease(index)}><FaPlus /></button>
                                </div>
                                <div className='remove-item'>
                                    <button onClick={() => handleRemoveItem(index)}><FaTrash /></button>
                                </div>
                            </div>
                        ))):(
                            <p>Not Item Found</p>
                        )}
                    </div>
                    <div className='total-item'>Total Items: {totalItemCount}</div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
