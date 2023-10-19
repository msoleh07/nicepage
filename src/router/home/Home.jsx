import React from 'react'
import Ofices from '../../components/ofices/Ofices'
import PositionImg from '../../components/positionImg/PositionImg'
import OficeDessingGallery from '../../components/oficeDessingGallery/OficeDessingGallery'
import HighlyEfficient from '../../components/highlyEfficient/HighlyEfficient'
import Gallery from '../../components/gallery/Gallery'
import TipsForDesigning from '../../components/tipsForDesigning/TipsForDesigning'
import CreativeOffice from '../../components/creativeOffice/CreativeOffice'
import Sidebar from '../../components/sidebar/Sidebar'


function Home() {
  let w = window.innerWidth
  console.log(w);
  return (
    <div className='home_page'>
      <Ofices/>
      <PositionImg/>
      <OficeDessingGallery/>
      <HighlyEfficient/>
      <Gallery/>
      <TipsForDesigning/>
      <CreativeOffice/>
    </div>
  )
}

export default Home