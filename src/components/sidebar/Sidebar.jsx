import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import {  BiLogIn , BiLogOut} from 'react-icons/bi'
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai'
import { FaUserGroup } from 'react-icons/fa6'
import { MdContacts } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import { OPEN_ALL_CART } from '../../app/openAllCatalog'
import { useDispatch } from 'react-redux'



const saidebartItem = [
    {
        name: "Home",
        icon: AiOutlineHome,
        link: '/'
    },
    {
        name: "About",
        icon: FaUserGroup,
        link: '/about'
    },
    {
        name: "Servicess",
        icon: IoIosMail,
        link: '/servicess'
    },
    {
        name: "Contact",
        icon: MdContacts,
        link: '/contact'
    },
    {
        name: "Log in",
        icon: BiLogIn,
        link: '/log_in'
    },
    {
        name: "Sign Up",
        icon: BiLogOut,
        link: '/sign_up'
    }
]





function Sidebar() {
    
    const dispatch = useDispatch()

    return (
        <div className='sidebar_page'>

            <aside className='sidebar'>
                <div className='saidebar_top'>
                    <img src="data:image/png;base64,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" alt="" width={80} height={80} className='sidebar_logo' />
                    <button onClick={()=> dispatch(OPEN_ALL_CART())} className='sidebar_close'><AiOutlineClose/></button>
                </div>
                <ul className="saidebar_list">
                    {
                        saidebartItem.map(({ name, icon: Icon, link }) => (
                            <Link to={link} className="saidebar_item" key={name}>
                                <button className='saidebar_link' >
                                    <span className="saidebar_icon">
                                        <Icon />
                                    </span>
                                    <span className="saidebar_name">{name}</span>
                                </button>
                            </Link>
                        ))
                    }
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar