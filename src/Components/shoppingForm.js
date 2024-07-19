import React, { useState } from 'react'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loader from './Loader';

function ShoppingForm({Additem}) {
    const [inputValue , setInputValue] = useState("");
    const [loading , setLoading] = useState(false);

 //function handle
 const handleSubmit = async (event) =>{
    event.preventDefault();
    if(!inputValue){
        toast.error("empty input!");
        return;
    }
    setLoading(true);
    await Additem(inputValue);
    setLoading(false);
    setInputValue("");
 }


    return (
        <form className="flex flex-col mb-4 mt-4 w-full max-w-sm gap-2">
            <h1 className="text-2xl font-bold" >Shopping List</h1>
            <div className='formContainer'>
                <input type='text'
                 className="p-2 border-2 border-gray-400 rounded-md "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='add-item'/>
            </div>
            <button type='submit' className="flex justify-center bg-black text-white p-2 rounded-md">
                {loading ? <Loader/> : <FaPlus/> } </button>
        </form>
    )
}

export default ShoppingForm