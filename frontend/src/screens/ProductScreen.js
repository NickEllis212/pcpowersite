import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';





export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1); {/*use state set to 1 as that will be the customers default amount*/}
    const productDetails = useSelector((state) => state.productDetails );
    const { loading, error, product} = productDetails;

   useEffect(() =>{
       dispatch(detailsProduct(productId));
   },[dispatch, productId]);
   const addToBasketHandler = () => {
    props.history.push(`/basket/${productId}?qty=${qty}`);}; {/*redirects user to basket screen based off of product Id*/}
    return (
        <div>
        {loading? (
        <LoadingBox></LoadingBox>
       ) : error? (
        <MessageBox>{error}</MessageBox>
        ) : (
            <div>
            <Link to="/">Back to Products</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="medium" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-2">
                    <ul>
                        <li>
                            <h1>{product.name}</h1> {/*takes product name from product data in backend*/}
                        </li>
                        <li>
                            {product.proccesor}
                        </li>
                        <li>
                            {product.ram}
                        </li>
                        <li>
                            {product.graphics} 
                        </li>
                        <li>
                            Price: £{product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">£{product.price}</div> 

                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock> 0? ( //if product stock is greater than 0 then add display in stock otherwise display unavailable.
                                        <span className="success">In stock</span>
                                            ): (
                                        <span className="error">Unavailable</span>
                                
                                       )}
                                    
                                    </div>

                                </div>
                            </li>
                            {
                                product.countInStock > 0 && ( 
                                <>
                                <li>
                                    <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty} onChange={e => setQty(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map(x =>( //outputs a a list within a dropdown depending on the stock count
                                                        <option key={x + 1}value={ x+1 }>{ x +1 }</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button 
                                        onClick={addToBasketHandler}
                                        className="primary block"> Add to basket</button>
                                </li>
                                </> 

                                )
                            }
                        </ul>
                    </div>
    
             </div>  
            </div>
        </div>
        )}
    </div>
    
        );
}
