import React, { useState, useEffect } from 'react';
import { FaPlus, FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Form = ({ addItem, updateItem, editingItem, setEditingItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemNumber, setItemNumber] = useState('');

    useEffect(() => {
        if (editingItem) {
            setItemName(editingItem.name);
            setItemPrice(editingItem.price);
            setItemNumber(editingItem.number);
        }
    }, [editingItem]);

    const handleAddOrUpdateButton = () => {
        if (!itemName.trim() || !itemPrice || !itemNumber) {
            toast.error("Please fill in all fields!");
            return;
        }

        if (editingItem) {
            updateItem(editingItem.id, {
                name: itemName,
                price: itemPrice,
                number: itemNumber
            });
            setEditingItem(null);
        } else {
            addItem({
                name: itemName,
                price: itemPrice,
                number: itemNumber
            });
        }
        setItemName('');
        setItemPrice('');
        setItemNumber('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddOrUpdateButton();
    };

    return (
        <div className="input-side w-500 ml-9  bg-gray-100 p-4 rounded">
            <h2 className="text-xl mb-4">{editingItem ? 'EDIT ITEM' : 'ADD ITEM'}</h2>
            <form className="add-item-box flex flex-col mb-4 mt-4 w-full max-w-sm gap-2" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-1">
                    <label className="font-bold">Item Name</label>
                    <input
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                        className="add-item-input border-2 border-gray-300 px-2 py-1 rounded"
                        placeholder="Enter item name"
                    />
                </div>

                <div className="flex flex-col mb-1">
                    <label className="font-bold">Price</label>
                    <input
                        type="number"
                        value={itemPrice}
                        onChange={(event) => setItemPrice(event.target.value)}
                        className="add-item-input border-2 border-gray-300 px-2 py-1 rounded"
                        placeholder="Enter item price"
                    />
                </div>

                <div className="flex flex-col mb-1">
                    <label className="font-bold">Item Number</label>
                    <input
                        type="number"
                        value={itemNumber}
                        onChange={(event) => setItemNumber(event.target.value)}
                        className="add-item-input border-2 border-gray-300 px-2 py-1 rounded"
                        placeholder="Enter number of items"
                    />
                </div>

                <button
                    type="submit"
                    className="flex justify-center bg-black text-white p-2 rounded-md"
                >
                    {editingItem ? <FaPencilAlt className="mr-3 flex align-middle" /> : <FaPlus className="mr-3 flex align-middle" />}
                    {editingItem ? `EDIT ITEM` : `ADD ITEM`}
                </button>
            </form>
        </div>
    );
};

export default Form;
