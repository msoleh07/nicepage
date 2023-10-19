import React, { memo } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { MdEmail ,MdContacts ,MdOutlineMiscellaneousServices } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import {IoHome} from 'react-icons/io5'
import {FaBook } from 'react-icons/fa'
import {RiFacebookFill , RiTwitterXFill} from 'react-icons/ri'
import { AiFillInstagram ,AiOutlineGooglePlus} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer_page'>
      <div className="footer_container">
        <div className="footer_your_logo">
          <div className="your_logo_text_container">
            <ul>
              <li><h2>Your Logo</h2></li>
              <li>Your Tgline here</li>
            </ul>
          </div>
          <div className="your_about_text_container">
            <ul>
              <li><h2>About Us</h2></li>
              <li><span>We want to help bring talanted stutents and unique startups together</span></li>
            </ul>
          </div>
          <div className="your_contact_text_container">
            <ul>
              <li><h2>Contact Us</h2></li>
              <div className="footer_contact_card">
                <li><BiSolidPhoneCall /><span>+998 90-997-62-20</span></li>
                <li><MdEmail /><span>msoleh@gmail.com</span></li>
              </div>
            </ul>
          </div>
        </div>
        <div className="footer_information_container">
          <ul>
            <li><h2>Information</h2></li>
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Event</li>
          </ul>
        </div>
        <div className="footer_helpful_container">
          <ul>
            <li><h2>Helpful Links</h2></li>
            <li><IoHome/><Link to={'/'}>Home</Link></li>
            <li><FaBook/> <Link>About</Link></li>
            <li><MdOutlineMiscellaneousServices/> <Link>Servicess</Link></li>
            <li><MdContacts/><Link>Contact</Link></li>
          </ul>
        </div>
        <div className="footer_input_container">
          <h2>Subsceribe More Info</h2>
          <div className="footer_input_card">
            <span>
              <MdEmail />
            </span>
            <input type="email" placeholder='Enter your Email' />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer_links_icon_container">
        <div className="footer_links_icon_item">
          <div className="footer_icon_card">
          <RiFacebookFill/>
          </div>
          <div className="footer_icon_card">
          <AiOutlineGooglePlus/>
          </div>
          <div className="footer_icon_card">
          <RiTwitterXFill/>
          </div>
          <div className="footer_icon_card">
          <AiFillInstagram/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer)