// assets
import styles from '../styles/Pagination.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <div className={styles.page_btn}>1</div>
            <div className={styles.page_btn}>2</div>
            <div className={styles.page_btn}>3</div>
            <div className={styles.next_btn}>Next <div><FontAwesomeIcon icon={faAngleRight} /></div></div>
        </div>
    )
}

export default Pagination