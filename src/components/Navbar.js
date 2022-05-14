import {Link} from 'react-router-dom'
//we need useSelector hook for accessing data 
import { useSelector } from 'react-redux'

export default function Navbar(){
    //while using useSelector we need to provide function to define the object which we want to access from redux,
    //it gives us whole state we need to get the necessary data 
    const items=useSelector((state)=>state.cart);
    
    return(
        <div className='navbar'>
            <span className='logo'>Store App(Redux)</span>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span>cart items: {items.length}</span>
        </div>
    )
}