// assets
import styles from './../styles/Footer.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faAngleRight, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons'

// tools
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {

    let [devHover, setDevHover] = useState(false)

    return (
        <div className={styles.footer}>
            <div className={styles.footer_top_section}>
                <div className={styles.f_c_1}>
                    <div className={styles.logo}>Luxie</div>
                    <div className={styles.contact_number}>+12 345-678-9999</div>
                    <div className={styles.our_gmail}>Masocherr@gmail.com</div>
                    <div className={styles.our_address}>856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa</div>
                </div>

                <div className={styles.f_c_2}>
                    <div className={styles.f_c_t_2}>Our Blog</div>

                    <div className={styles.blog_event}>
                        <div className={styles.event_title}>What Is Lorem Ipsum ?</div>
                        <div className={styles.date_box}><div><FontAwesomeIcon icon={faClock} /></div> Jan 02, 2023</div>
                    </div>

                    <div className={styles.blog_event}>
                        <div className={styles.event_title}>What Is Lorem Ipsum ?</div>
                        <div className={styles.date_box}><div><FontAwesomeIcon icon={faClock} /></div> Jan 02, 2023</div>
                    </div>
                </div>

                <div className={styles.f_c_3}>
                    <div className={styles.footer_column_title}>Links</div>

                    <div className={styles.links}>
                        <div className={styles.link}><div><FontAwesomeIcon icon={faAngleRight} /></div> About Us</div>
                        <div className={styles.link}><div><FontAwesomeIcon icon={faAngleRight} /></div> Our Rooms</div>
                        <div className={styles.link}><div><FontAwesomeIcon icon={faAngleRight} /></div> Career</div>
                        <div className={styles.link}><div><FontAwesomeIcon icon={faAngleRight} /></div> FAQs</div>
                    </div>
                </div>

                <div className={styles.f_c_4}>
                    <div className={styles.footer_column_title}>Subscribe Newsletter</div>

                    <div className={styles.whats_newsletter}>Subscribe our newsletter gor get notification about new updates.</div>

                    <div className={styles.email_input}>
                        <input type="email" placeholder="Enter your email ..." />
                        <div className={styles.submit_btn}><FontAwesomeIcon icon={faPaperPlane} /></div>
                    </div>
                </div>
            </div>

            <div className={styles.footer_bottom_section}>
                <div className={styles.copy_right}>Copyright ©2023 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <Link href="https://github.com/Masocher"><div className='template_developer' style={{color: devHover ? "#1cc3b2" : "#fff", display: "inline", transition: '.2s'}} onMouseEnter={() => setDevHover(true)} onMouseLeave={() => setDevHover(false)}>Masocher</div></Link></div>

                <div className={styles.social_medias}>
                    <div><FontAwesomeIcon icon={faPaperPlane} /></div>
                    <div><FontAwesomeIcon icon={faPaperPlane} /></div>
                    <div><FontAwesomeIcon icon={faPaperPlane} /></div>
                    <div><FontAwesomeIcon icon={faPaperPlane} /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer