// assets
import styles from './../styles/Pages-top.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'

const PagesTop = (props) => {
    return (
        <div className={styles.pages_top_side}>
            <div className={styles.top_side_image_box}></div>

            <div className={styles.top_side_title}>
                <div className={styles.title_box}>{props.title}</div>

                <div className={styles.page_address}><Link href="/">Home</Link> <div><FontAwesomeIcon icon={faAngleRight} /></div> {props.issue}</div>
            </div>
        </div>
    )
}

export default PagesTop