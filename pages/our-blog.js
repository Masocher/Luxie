// assets
import styles from './../styles/pages/Our-blog.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// components
import Header from '../components/header'
import PagesTop from '../components/pages-top'
import Pagination from '../components/pagination'
import ContactUsBox from '../components/contact-us-box'
import Footer from '../components/footer'
import Loading from '../components/loading'

// tools
import { useState } from 'react'

const OurBlog = () => {
    let [loadingStatus, setLoadingStatus] = useState(true)

    setTimeout(() => {
        setLoadingStatus(false)
    }, 2500);

    return (
        <div className={styles.main_container}>
            <Loading status={loadingStatus} />

            <Header />

            <div className={styles.container}>
                <PagesTop title="Our Blog" issue="Blog" />

                <div className={styles.news_box}>
                    <div className={styles.left_side}>
                        <div className={styles.big_new_box}>
                            <div className={styles.b_n_i_1}></div>

                            <div className={styles.information_box}>
                                <div className={styles.inf_row}>
                                    <div>JAN 29, 2023</div>
                                    <span>/</span>
                                    <div>EVENT</div>
                                </div>

                                <div className={styles.title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>

                                <div className={styles.description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.</div>

                                <div className={styles.read_more_btn}>Read More <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.big_new_box}>
                            <div className={styles.b_n_i_2}></div>

                            <div className={styles.information_box}>
                                <div className={styles.inf_row}>
                                    <div>JAN 29, 2023</div>
                                    <span>/</span>
                                    <div>EVENT</div>
                                </div>

                                <div className={styles.title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>

                                <div className={styles.description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.</div>

                                <div className={styles.read_more_btn}>Read More <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.big_new_box}>
                            <div className={styles.b_n_i_3}></div>

                            <div className={styles.information_box}>
                                <div className={styles.inf_row}>
                                    <div>JAN 29, 2023</div>
                                    <span>/</span>
                                    <div>EVENT</div>
                                </div>

                                <div className={styles.title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>

                                <div className={styles.description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.</div>

                                <div className={styles.read_more_btn}>Read More <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.big_new_box}>
                            <div className={styles.b_n_i_4}></div>

                            <div className={styles.information_box}>
                                <div className={styles.inf_row}>
                                    <div>JAN 29, 2023</div>
                                    <span>/</span>
                                    <div>EVENT</div>
                                </div>

                                <div className={styles.title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>

                                <div className={styles.description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.</div>

                                <div className={styles.read_more_btn}>Read More <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.big_new_box}>
                            <div className={styles.b_n_i_5}></div>

                            <div className={styles.information_box}>
                                <div className={styles.inf_row}>
                                    <div>JAN 29, 2023</div>
                                    <span>/</span>
                                    <div>EVENT</div>
                                </div>

                                <div className={styles.title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>

                                <div className={styles.description}>It is important to take care of the patient, to be followed by the doctor, but it is a time of great pain and suffering.</div>

                                <div className={styles.read_more_btn}>Read More <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <Pagination />
                    </div>

                    <div className={styles.right_side}>
                        <div className={styles.newsletter_box}>
                            <div className={styles.title_box}>
                                <div className={styles.main_title}>Newsletter</div>

                                <div className={styles.description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</div>
                            </div>

                            <div className={styles.input_box}>
                                <input className={styles.input_box_input} type="text" placeholder="Enter your email ..." />

                                <div className={styles.subscribe_btn}>Subscribe</div>
                            </div>
                        </div>

                        <div className={styles.recent_news}>
                            <div className={styles.title_box}>Recent News</div>

                            <div className={styles.new_boxes}>
                                <div className={styles.new_box}>
                                    <div className={styles.i_b_1}></div>

                                    <div className={styles.information_box}>
                                        <div className={styles.inf_row}>
                                            <div>JAN 29, 2023</div>
                                            <span>/</span>
                                            <div>EVENT</div>
                                        </div>

                                        <div className={styles.information_box_title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>
                                    </div>
                                </div>

                                <div className={styles.new_box}>
                                    <div className={styles.i_b_2}></div>

                                    <div className={styles.information_box}>
                                        <div className={styles.inf_row}>
                                            <div>JAN 29, 2023</div>
                                            <span>/</span>
                                            <div>EVENT</div>
                                        </div>

                                        <div className={styles.information_box_title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>
                                    </div>
                                </div>

                                <div className={styles.new_box}>
                                    <div className={styles.i_b_3}></div>

                                    <div className={styles.information_box}>
                                        <div className={styles.inf_row}>
                                            <div>JAN 29, 2023</div>
                                            <span>/</span>
                                            <div>EVENT</div>
                                        </div>

                                        <div className={styles.information_box_title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>
                                    </div>
                                </div>

                                <div className={styles.new_box}>
                                    <div className={styles.i_b_4}></div>

                                    <div className={styles.information_box}>
                                        <div className={styles.inf_row}>
                                            <div>JAN 29, 2023</div>
                                            <span>/</span>
                                            <div>EVENT</div>
                                        </div>

                                        <div className={styles.information_box_title_box}>Lorem ipsum is placeholder text commonly used in the graphic.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tags_box}>
                            <div className={styles.title_box}>Tags</div>

                            <div className={styles.tags}>
                                <div className={styles.tag}>Bed</div>
                                <div className={styles.tag}>Hotel</div>
                                <div className={styles.tag}>Travel</div>
                                <div className={styles.tag}>Restaurant</div>
                                <div className={styles.tag}>Sport</div>
                                <div className={styles.tag}>Holiday</div>
                                <div className={styles.tag}>Music</div>
                                <div className={styles.tag}>Trip</div>
                                <div className={styles.tag}>Tourist</div>
                                <div className={styles.tag}>Foody</div>
                                <div className={styles.tag}>Resorts</div>
                            </div>
                        </div>

                        <div className={styles.instagram_posts}>
                            <div className={styles.title_box}>Instagram</div>

                            <div className={styles.posts}>
                                <div className={styles.p_i_1}></div>
                                <div className={styles.p_i_2}></div>
                                <div className={styles.p_i_3}></div>
                                <div className={styles.p_i_4}></div>
                                <div className={styles.p_i_5}></div>
                                <div className={styles.p_i_6}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactUsBox />

            <Footer />
        </div>
    )
}

export default OurBlog