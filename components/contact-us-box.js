// assets
import styles from './../styles/Contact-us-box.module.css'

const ContactUsBox = () => {
    return (
        <div className={styles.contact_us}>
            <div className={styles.contact_us_title_box}>
                <div className={styles.contact_us_title}>Contact Us Now !</div>

                <div className={styles.contact_number}>Contact (+12) 345-678-9999 To Book Directly Or For Advice</div>
            </div>

            <div className={styles.contact_btn}>Contact Now</div>
        </div>
    )
}

export default ContactUsBox