import React, { memo } from 'react'
import './Gallery.css'

function Gallery() {
    return (
        <div className='gallery_page'>
            <div className="gallery_img_card">
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            </div>
            <div className="gallery_img_card">
                <img src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
            </div>
            <div className="gallery_img_card">
                <img src="https://bc-resource-centre-prod.s3.amazonaws.com/Why_Images_Are_an_Important_Part_of_Your_Website_Strategy_e04012c72c.jpg" alt="" />
            </div>
            <div className="gallery_img_card">
                <img src="https://images.pexels.com/photos/6893889/pexels-photo-6893889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
        </div>
    )
}

export default memo(Gallery)