import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
<div className="bg-black p-8">
<div className="container mx-auto flex justify-between items-center">
    <Link>
    <Link to="/Login" className=" text-white  hover:text-blue-600 top-0">
    profile
    </Link>

    </Link>
    <div className="flex space-x-3">
        <Link>
        <Link to="/" className="text-green p-2 hover:text-blue-700">
        home</Link>
        <Link to="/Signup" className="text-green p-2 hover:text-blue-700">
        signUp</Link>
        <Link to="/Login" className="text-green p-2 hover:text-blue-700">
        Login</Link>
        {/* <Link to="/productCard" className="text-green p-2 hover:text-blue-700">
        productcard</Link> */}
        <Link to="/productform" className="text-green p-2 hover:text-blue-700">
        prodcut from</Link>

        </Link>
    </div>
</div>
</div>
        
        </>
    )
}
export default Navbar;