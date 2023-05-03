// tools
import Link from "next/link"
import { useState } from "react"

// assets
import styles from './../styles/Header.module.css'

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons"

// components
import Menu from "./menu"

// redux
import { useDispatch } from "react-redux"
import { openMenu } from "./redux/actions"

const Header = () => {

    const dispatch = useDispatch()

    return (
        <div className={styles.header}>
            <Menu />

            <div className={styles.logo_box}>
                <div className={styles.logo}>Luxie</div>
            </div>

            <ul className={styles.header_sections}>
                <Link href="/"><li className={styles.header_sec}>Home</li></Link>
                <Link href="/rooms"><li className={styles.header_sec}>Rooms</li></Link>
                <Link href="/about-us"><li className={styles.header_sec}>About Us</li></Link>
                <Link href="/our-blog"><li className={styles.header_sec}>Our Blog</li></Link>
                <Link href="/contact-us"><li className={styles.header_sec}>Contact Us</li></Link>
            </ul>

            <div className={styles.booking}>Book Now <div><FontAwesomeIcon icon={faArrowRight} /></div></div>

            <div className={styles.menu_btn} onClick={() => dispatch(openMenu())}><FontAwesomeIcon icon={faBars} /></div>
        </div>
    )
}

export default Header