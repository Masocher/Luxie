// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// assets
import styles from './../styles/Slider.module.css'

const Slider = () => {
    return (
        <Swiper
            className={styles.slider}
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
        >
        <SwiperSlide className={styles.slide}>
            <div className={styles.s_i_b_1}></div>

            <div className={styles.slide_information_box}>
                <div className={styles.slide_inf_title}>Premium King Room</div>

                <div className={styles.price_box}>
                    400$ <div>/ day</div>
                </div>

                <div className={styles.slide_services_box}>
                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} classNameName={styles.check_icon} /></div>
                        <div className={styles.slide_service_text}>Size</div>
                        <div>: 30 ft</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} classNameName={styles.check_icon} /></div>
                        <div className={styles.slide_service_text}>Capacity</div>
                        <div>: 5 person</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} classNameName={styles.check_icon} /></div>
                        <div className={styles.slide_service_text}>Bed</div>
                        <div>: King Beds</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} classNameName={styles.check_icon} /></div>
                        <div className={styles.slide_service_text}>Services</div>
                        <div>: Wifi, Television, Bathroom</div>
                    </div>
                </div>

                <div className={styles.view_details}>View Details</div>
            </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
            <div className={styles.s_i_b_2}></div>

            <div className={styles.slide_information_box}>
                <div className={styles.slide_inf_title}>Premium King Room</div>

                <div className={styles.price_box}>
                    400$ <div>/ day</div>
                </div>

                <div className={styles.slide_services_box}>
                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Size</div>
                        <div>: 30 ft</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Capacity</div>
                        <div>: 5 person</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Bed</div>
                        <div>: King Beds</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Services</div>
                        <div>: Wifi, Television, Bathroom</div>
                    </div>
                </div>

                <div className={styles.view_details}>View Details</div>
            </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
            <div className={styles.s_i_b_3}></div>

            <div className={styles.slide_information_box}>
                <div className={styles.slide_inf_title}>Premium King Room</div>

                <div className={styles.price_box}>
                    400$ <div>/ day</div>
                </div>

                <div className={styles.slide_services_box}>
                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Size</div>
                        <div>: 30 ft</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Capacity</div>
                        <div>: 5 person</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Bed</div>
                        <div>: King Beds</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Services</div>
                        <div>: Wifi, Television, Bathroom</div>
                    </div>
                </div>

                <div className={styles.view_details}>View Details</div>
            </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
            <div className={styles.s_i_b_4}></div>

            <div className={styles.slide_information_box}>
                <div className={styles.slide_inf_title}>Premium King Room</div>

                <div className={styles.price_box}>
                    400$ <div>/ day</div>
                </div>

                <div className={styles.slide_services_box}>
                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Size</div>
                        <div>: 30 ft</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Capacity</div>
                        <div>: 5 person</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Bed</div>
                        <div>: King Beds</div>
                    </div>

                    <div className={styles.slide_service}>
                        <div className={styles.slide_service_icon}><FontAwesomeIcon icon={faCheck} /></div>
                        <div className={styles.slide_service_text}>Services</div>
                        <div>: Wifi, Television, Bathroom</div>
                    </div>
                </div>

                <div className={styles.view_details}>View Details</div>
            </div>
        </SwiperSlide>
    </Swiper>
    )
}

export default Slider