import React, { memo } from 'react'
import './HighlyEfficient.css'

function HighlyEfficient() {
    return (
        <div className='highly_efficient_page'>
            <div className="highly_efficient_container">
                <div className="highly_efficient_img_container">
                    <div className="highly_efficient_img_card"></div>
                </div>
                <div className="highly_efficient_text_container">
                    <h2>5 Highly Efficient Office Layouts</h2>
                    <div className="highly_efficient_text_item">
                        <span>here are quite a few critical decisions that will underpin the structure of an office layout such as the division of public and private areas and the relative arrangement of empty space. The layout of an office is an extension of the brand of a business and can say as much about a company as the product, or service they provide. </span>
                        <button>read more</button>
                    </div>
                </div>
            </div>
            <div className="highly_efficient_img">
                <img src="https://images01.nicepage.com/6d/d0/6dd01d1f5b0cb7b8533d3f1639b09855.png" alt="" />
            </div>
        </div>
    )
}

export default memo(HighlyEfficient)