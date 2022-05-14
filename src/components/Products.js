import React, {  useEffect } from 'react'
import {add} from '../store/cartSlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {fetchProducts,STATUSES} from '../store/productSlice'

function Products() {
    // const [products, setProducts] = useState([]);
    const {data,status}=useSelector((state)=>state.product);
    const products=data;
    const items=useSelector((item)=>item.cart);
    
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        /*
        const fetchProducts = async () => {
            const url = "https://fakestoreapi.com/products";
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();*/
    }, [dispatch])

    const handleAdd=(product)=>{
       dispatch(add(product));
    }


    if(status===STATUSES.LOADING)
    {
        return(
            <h2 className='loading-text'>Loading...</h2>
        )
    }

    if(status===STATUSES.ERROR)
    {
        return(
            <h2 className='err-text'>Failed to load products</h2>
        )
    }

    return(
        
        <div className="productsWrapper">
            {
                products.map((product) => (
                    <div className="card" key={product.id}> 
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}$</h5>
                        {/* {items.map((item)=>{return item.id===product.id})?'disabled':''} */}
                        <button disabled={items.includes(product)} onClick={()=>handleAdd(product)} className="btn">
                            Add to cart
                        </button>

                    </div>
                ))
            }
        </div>
    )
}
export default Products