// assets
import styles from "./../styles/Services.module.css"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faBellConcierge, faFan, faUtensils, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.service_box}>
                <div className={styles.service_icon}><FontAwesomeIcon icon={faCar} /></div>

                <div className={styles.service_title}>Transportion</div>
            </div>

            <div className={styles.service_box}>
                <div className={styles.service_icon}><FontAwesomeIcon icon={faBellConcierge} /></div>

                <div className={styles.service_title}>travel services</div>
            </div>

            <div className={styles.service_box}>
                <div className={styles.service_icon}><FontAwesomeIcon icon={faFan} /></div>

                <div className={styles.service_title}>Spa Relaxtion</div>
            </div>

            <div className={styles.service_box}>
                <div className={styles.service_icon}><FontAwesomeIcon icon={faUtensils} /></div>

                <div className={styles.service_title}>Restaurant</div>
            </div>

            <div className={styles.service_box}>
                <div className={styles.service_icon}><FontAwesomeIcon icon={faChampagneGlasses} /></div>

                <div className={styles.service_title}>Bar & Drink</div>
            </div>
        </div>
    )
}

export default Services