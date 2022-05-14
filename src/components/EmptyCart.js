import EmptCart from '../imgs/EmptyCart.png' 
import { Link } from 'react-router-dom'
export default function EmptyCart(){
    return(
        <>
        <div className="empty-container">
            <div className="icon">
               <img src={EmptCart} alt="" />
            </div>
            <div className="cart-empty">
                <h2>Your Cart Is Empty!</h2>
                <h3>Add Items..</h3>
                <Link className='cont-shopping' to='/'>continue shopping</Link>
            </div>
        </div>
        </>
    )
}