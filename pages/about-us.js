// assets
import styles from './../styles/pages/About-us.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// components
import Header from '../components/header'
import PagesTop from '../components/pages-top'
import ContactUsBox from '../components/contact-us-box'
import Footer from '../components/footer'
import Loading from '../components/loading'
import Scrolling from '../components/scrolling'

// tools
import { useState } from 'react'

const AboutUs = () => {
    let [loadingStatus, setLoadingStatus] = useState(true)

    setTimeout(() => {
        setLoadingStatus(false)
    }, 2500);

    return (
        <div className={styles.main_container}>
            <Loading status={loadingStatus} />

            <Scrolling />

            <Header />

            <div className={styles.container}>
                <PagesTop title="About Us" issue="About Us" />

                <div className={styles.testimonials_section}>
                    <div className={styles.left_side}>
                        <div className={styles.about_image_box}></div>
                    </div>

                    <div className={styles.right_side}>
                        <div className={styles.about_title_box}>
                            <div className={styles.title_issue}>TESTIMONIALS</div>
                            <div className={styles.about_title}>20 Years Of Experience</div>
                        </div>

                        <div className={styles.about_description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering. That there may be some pure mourning for the poison. Ridiculous mouse mauris vitae ultricies leo intact.</div>
                        <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                    </div>
                </div>

                <div className={styles.hotel_video_box}>
                    <div className={styles.image_box}></div>

                    <div className={styles.bottom_content}>
                        <div className={styles.title_box}>
                            <div>ULTIMATE SOLUTIONS</div>

                            <div className={styles.main_title}>Our Hotel & Rooms</div>
                        </div>

                        <div className={styles.play_btn}><FontAwesomeIcon icon={faPlay} /></div>
                    </div>
                </div>

                <div className={styles.hotel_sections}>
                    <div className={styles.title_box}>
                        <div className={styles.title_issue}>ULTIMATE SOLUTIONS</div>

                        <div className={styles.main_title}>Our Hotel & Rooms</div>
                    </div>

                    <div className={styles.hotel_op_boxes}>
                        <div className={styles.hotel_op_box}>
                            <div className={styles.i_b_1}></div>

                            <div className={styles.blue_box}>Biking & Sports</div>
                        </div>

                        <div className={styles.hotel_op_box}>
                            <div className={styles.i_b_2}></div>

                            <div className={styles.blue_box}>Retaurant & Bar</div>
                        </div>

                        <div className={styles.hotel_op_box}>
                            <div className={styles.i_b_3}></div>
                            
                            <div className={styles.blue_box}>Pool & Party</div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactUsBox />

            <Footer />
        </div>
    )
}

export default AboutUs