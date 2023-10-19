import React, { memo } from 'react'
import './OficeDessingGallery.css'

function OficeDessingGallery() {
  return (
    <div className='ofice_dessing_dallery'>
        <h2>Office Design Gallery</h2>
        <span>Coolest offices s new cool of in world bored office around, spaces incs annual of coolest headquarters check all those more best worlds offices.</span>
        <div className="ofice_dessing_img_card">
            <img src="https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-indoor-office-png-image_2215293.jpg" alt="" />
            <img src="https://media.istockphoto.com/id/1342421368/photo/modern-bright-office-space.webp?b=1&s=170667a&w=0&k=20&c=sm30pJiI6wRu9e1crTD7JE0OnT56LQ1T6Ufe_U6g-ok=" alt="" />
            <img src="https://media.istockphoto.com/id/155391664/photo/overhead-view-of-business-people-in-a-meeting.jpg?s=612x612&w=0&k=20&c=QCU7JF73jekVr0pcUSFt7FL_ofhYbhagS3sVBQEUGT8=" alt="" />
            <img src="https://t3.ftcdn.net/jpg/05/79/48/50/360_F_579485026_Fb2LO9GgmNKkOi18LjoBVAk1wUtZG2DE.jpg" alt="" />
        </div>
    </div>
  )
}

export default memo(OficeDessingGallery)