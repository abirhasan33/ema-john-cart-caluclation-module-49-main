import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviewtiem.css'

const Reviewtiem = (props) => {
    const {product, handleRemoveProudtc} = props;
    const {name, img, price,shipping, quantity} = props.product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-items-detals-container'>
                <div className="review-items-detals">
                    <p className='product-name' titel={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...': name}
                    </p>
                    <p>price: <span className='color'>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProudtc(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviewtiem;