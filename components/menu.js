// assets
import styles from '../styles/Menu.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'
import { useState } from 'react'

// redux
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "./redux/actions"

const Menu = () => {

    const menuStatus = useSelector(reducer => reducer)

    const dispatch = useDispatch()

    return (
        <div style={{left: menuStatus ? '0' : '-500px'}} className={styles.menu}>
            <div className={styles.top_content}>
                <div className={styles.logo}>Luxie</div>
                <div className={styles.close_btn} onClick={() => dispatch(closeMenu())}><FontAwesomeIcon icon={faClose} /></div>
            </div>

            <ul className={styles.menu_links}>
                <Link onClick={() => dispatch(closeMenu())} style={{textDecoration: 'none'}} href="/"><li className={styles.menu_link}>Home</li></Link>
                <Link onClick={() => dispatch(closeMenu())} style={{textDecoration: 'none'}} href="/rooms"><li className={styles.menu_link}>Rooms</li></Link>
                <Link onClick={() => dispatch(closeMenu())} style={{textDecoration: 'none'}} href="/about-us"><li className={styles.menu_link}>About Us</li></Link>
                <Link onClick={() => dispatch(closeMenu())} style={{textDecoration: 'none'}} href="/our-blog"><li className={styles.menu_link}>Our Blog</li></Link>
                <Link onClick={() => dispatch(closeMenu())} style={{textDecoration: 'none'}} href="/contact-us"><li className={styles.menu_link}>Contact Us</li></Link>
            </ul>

            <div className={styles.booking_btn}>Book Now <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
        </div>
    )
}

export default Menu