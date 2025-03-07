import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Selectaddress = () => {

const [address, setAddress] = useState('');
const [selectaddress, setSelectaddress] = useState(null);
const [error, setError] = useState(null);
const navigate = useNavigate();

useEffect(() => {



const fetchdetails = async () => {
    try {
        const response = await axios.get('http://localhost:3000/user/get-addresses');
        // console.log(response.data);
        // setSelectaddress(response.data);
        const data = response.data;
        if(data && Array.isArray(data.addresses)){
            setSelectaddress(data.addresses);
        }
    } catch (err) {
        console.error("Error fetching address:", err);
    }
    const handleSelect = (address) => {
        setAddress(address);
    }

    const handleConfirm = () => {
        console.log("oredered placed",address);
    }

    return (
        <div>
            <h1>Address</h1>
            <div>
                <select onChange={(e) => handleSelect(e.target.value)}>
                    {selectaddress && selectaddress.map((address) => (
                        <option key={address._id} value={address.address}>
                            {address.address}
                        </option>
                    ))}
                </select>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )

}
  
}
