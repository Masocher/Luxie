// assets
import styles from '../styles/Scrolling.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

// tools
import { useState, useEffect } from 'react'

const Scrolling = () => {

    let [windowStatus, setWindowStatus] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > '200') {
                setWindowStatus(true)
            } else {
                setWindowStatus(false)
            }
        })
    }, [])

    return (
        <div
            onClick={() => {
                window.scrollTo({
                    top: '0',
                    behavior: 'smooth'
                })
            }}
            style={{
                opacity: windowStatus ? '1' : '0'
            }}
            className={styles.scroll_btn}
        >
            <FontAwesomeIcon icon={faAngleUp} />
        </div>
    )
}

export default Scrolling