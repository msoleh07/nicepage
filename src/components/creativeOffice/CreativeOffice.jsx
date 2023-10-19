import React, { memo } from 'react'
import './CreativeOffice.css'

function CreativeOffice() {
  return (
    <div className='creative_office_page'>
        <div className="creative_office_img_container">
            <img src="https://media.istockphoto.com/id/1460755337/photo/white-color-theme-modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plant-3d.webp?b=1&s=170667a&w=0&k=20&c=vjO4QhU7YP-UEdHsrECZH01Nvj0T5aqnoWSh02XdLeo=" alt="" />
            <img src="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=1024x1024&w=is&k=20&c=Y0nH3YzWfMt4Asf4KyNUCJPReUbpJGOakBjsV4JwIoU=" alt="" />
            <img src="https://i.imgur.com/E9EsYnV.jpg" alt="" />
            <img src="https://i.pinimg.com/originals/9c/90/f3/9c90f3e72ac099cb5d0ef22043fd9cfd.jpg" alt="" />
        </div>
        <div className="creative_office_text_container">
            <h2>Creative Office Layout Ideas</h2>
            <span>New ideas for your office layout do not have to be time consuming or expensive! Whether you’re moving to a new space or trying to improve an existing one, you can refresh your office by following a few simple tips and tricks.</span>
            <span>Sure, it’s nice to perfectly recreate all those pictures you found on Pinterest, but if you don’t have the resources, don’t sweat! </span>
            <span className='width'>Are you ready to be inspired? Here are the coolest office layout ideas you can implement without breaking the bank or killing your schedule.</span>
            <button>learn more</button>
        </div>
    </div>
  )
}

export default memo(CreativeOffice) 