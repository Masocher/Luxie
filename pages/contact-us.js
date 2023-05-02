// assets
import styles from './../styles/pages/Contact-us.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// components
import Header from '../components/header'
import PagesTop from '../components/pages-top'
import ContactUsBox from '../components/contact-us-box'
import Footer from '../components/footer'
import Loading from '../components/loading'

// tools
import { useState } from 'react'

const ContactUs = () => {
    let [loadingStatus, setLoadingStatus] = useState(true)

    setTimeout(() => {
        setLoadingStatus(false)
    }, 2500);

    return (
        <div className={styles.main_container}>
            <Loading status={loadingStatus} />

            <Header />

            <div className={styles.container}>
                <PagesTop title="Contact Us" issue="Contact Us" />

                <div className={styles.contact_information}>
                    <div className={styles.contact_inf_box}>
                        <span><FontAwesomeIcon icon={faPhone} /></span>

                        <div className={styles.title_box}>
                            <div>Phone</div>

                            <span>+01-234-567-890</span>
                        </div>
                    </div>

                    <div className={styles.contact_inf_box}>
                        <span><FontAwesomeIcon icon={faLocationDot} /></span>

                        <div className={styles.title_box}>
                            <div>Address</div>

                            <span>Iris Watson, 283 Fusce Rd,NY</span>
                        </div>
                    </div>

                    <div className={styles.contact_inf_box}>
                        <span><FontAwesomeIcon icon={faClock} /></span>

                        <div className={styles.title_box}>
                            <div>Open time</div>

                            <span>10:00 am to 23:00 pm</span>
                        </div>
                    </div>

                    <div className={styles.contact_inf_box}>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>

                        <div className={styles.title_box}>
                            <div>Email</div>

                            <span>Info.luxie @gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className={styles.message_box}>
                    <div className={styles.title_box}>
                        <div className={styles.title_issue}>CONTACT US</div>

                        <div className={styles.main_title}>Leave Message</div>
                    </div>

                    <div className={styles.input_box}>
                        <div className={styles.inputs}>
                            <input className={styles.message_input} type="text" placeholder="Your Name" />
                            <input className={styles.message_input} type="text" placeholder="Your Email" />
                        </div>

                        <textarea className={styles.message_content} placeholder="Your Message"></textarea>
                    </div>

                    <div className={styles.send_message_btn}>Send Message</div>
                </div>
            </div>

            <ContactUsBox />

            <Footer />
        </div>
    )
}

export default ContactUs