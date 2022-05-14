import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import { remove } from "../store/cartSlice";
export default function Cart(){
    const items=useSelector((state)=>state.cart);
    const displatch=useDispatch();
    const handleRemove=(id)=>{
        displatch(remove(id));       
    }
    return(
        <>
        {/* <p style={{textAlign:'center'}}>Cart page</p> */}
        <div className="cartWrapper">
        {
            items.length===0?<EmptyCart/>:items.map((item)=>(
                (
                    <div className="card" key={item.id}> 
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        <h5>{item.price}$</h5>
                        <button onClick={()=>handleRemove(item.id)} className="btn">
                            Remove from cart
                        </button>

                    </div>
                )
            ))
        }
        {/* {
            items.map((item)=>(
                (
                    <div className="card" key={item.id}> 
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        <h5>{item.price}$</h5>
                        <button onClick={()=>handleRemove(item.id)} className="btn">
                            Remove from cart
                        </button>

                    </div>
                )
            ))
        } */}
        </div>
        </>
    )
}