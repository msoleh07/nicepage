import React, { memo } from 'react'
import './PositionImg.css'

function PositionImg() {
    return (
        <div className='position_img_page' >
            <div className="position_img_item_border">
                <div className="pisation_img_item_text">
                    <h2>The coolest workplaces offices in the world</h2>
                    <span>Best office design of group layout. Are coolest workplaces offices in the world. Architecture studio arquitectes life. Home office best design interior luxury offices. Office design ideas make work my home organization. Home office setup ideas offices in small furniture layout. Office interior design dreams house furniture cool interiors. Interior ideas decorating a home office of bamboo rod. Home office space ideas design small decorating. Bloc offices new york city office snapshots modern design. </span>
                    <button>read more</button>
                </div>
                <div className="posation_item_img_border">
                    <div className="position_card_img">
                        <div className="position_small_card">
                            <div className="position_item">
                                <b>10</b>
                                <span>Ofice Ideas</span>
                            </div>
                        </div>
                    </div>
                   <div className="cart">
                   <span className='position_title'>Monday Consulting, an IT consultancy company based in Hamburg, Germany</span>
                   </div>
                </div>
            </div>
            <div className="position_icons_container">
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPPyaVkISCOCVu-jK7yhjFSBGKtsAfD734aISWTCYfPlcf97ZD" alt="" />
                    <b>GALLERY</b>
                </div>
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvovbFd2WDlzN6hNyF9uhVioJJU0p3Z1h3c-iQVcRbSsptfb2D" alt="" />
                    <b>IDEAS</b>
                </div>
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwtecFt8RTpEDVSgBPp-q2P_XI-9-dtvJkbLbfmxJzdxIEquIS" alt="" />
                    <b>AWARDS</b>
                </div>
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEXvKVIViD48a305r-KuexrEADRgG09VA_GewhDxgBxhN5ZNe" alt="" />
                    <b>FEATURES</b>
                </div>
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDp8rQsmDd7FD50ct1gpffB_w1jkwn36_Y-AAJ82fHOvdL6CCS" alt="" />
                    <b>DESIGN</b>
                </div>
                <div className="position_img_icons_card">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQao-w8jqc4jibObpZcvgESxipn_kgHbFJRQV21REYIw4yOD0K6" alt="" />
                    <b>SUPPORT</b>
                </div>
            </div>
        </div>
    )
}

export default memo(PositionImg)