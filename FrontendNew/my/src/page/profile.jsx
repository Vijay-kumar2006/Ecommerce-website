import react from 'react';

import { useState, useEffect } from 'react';


export default function profile() {
    const [personalsetails, setPersonalDetails] = useState({});
    const [address, setAddress] = useState({});

    useEffect(()=>{
        fetchuserProfile("dcdc@gamil.com")
        .then((data)=>{
            setPersonalDetails(data.user);
            setAddress(data.address);
        })
    },  [])
    return (
        <div className='w-full h-max flex flex-col sm:flex-row p-5 gap-16'>
            <div className='w-full sm:w-1/2 p-5 bg-white rounded-md'>
            <div className=''></div>
            </div>
        </div>