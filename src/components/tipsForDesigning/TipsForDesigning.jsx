import React, { memo } from 'react'
import './TipsForDesigning.css'

function TipsForDesigning() {
  return (
    <div className='tips_for_designing_page'>
        <div className="tips_for_designing_text_container">
            <h2>Tips for designing a modern office</h2>
            <div className="tips_for_designing_text_index_card">
                <div className="index_item">
                    <b>01</b>
                    <span>Open up the space</span>
                </div>
                <div className="index_item">
                    <b>02</b>
                    <span>Introduce more light</span>
                </div>
                <div className="index_item">
                    <b>03</b>
                    <span>Consider glass partitions</span>
                </div>
            </div>
        </div>
        <div className="tips_for_designing_img_container">
            <div className="tips_for_designing_img_item">
                <img src="https://images01.nicepage.com/6f/ef/6fefae6e5b483d19430b172da4da2bd3.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default memo(TipsForDesigning)