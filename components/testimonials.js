// assets
import styles from './../styles/Testimonials.module.css'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <div className={styles.testimonials_sliders}>
            <Swiper 
                className={styles.testimonials}
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
            >
                <SwiperSlide className={styles.testimonial_box}>
                    <div className={styles.t_i_b_1}></div>
                </SwiperSlide>

                <SwiperSlide className={styles.testimonial_box}>
                    <div className={styles.t_i_b_2}></div>
                </SwiperSlide>

                <SwiperSlide className={styles.testimonial_box}>
                    <div className={styles.t_i_b_3}></div>
                </SwiperSlide>

                <SwiperSlide className={styles.testimonial_box}>
                    <div className={styles.t_i_b_4}></div>
                </SwiperSlide>
            </Swiper>

            <div className={styles.testimonials_slider_1}>
                <div className={styles.testimonial_information_box}>
                    <div className={styles.title_issue}>TESTIMONIALS</div>
                    <div className={styles.slide_inf_title}>Our Guests Love Us</div>
                </div>

                <Swiper 
                    className={styles.testimonials_descriptions}
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide className={styles.testimonial_description_box}>
                        <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.score_box}>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                        </div>

                        <div className={styles.guest_name}>Akash Downey <div>- CEO Deercreative</div></div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.testimonial_description_box}>
                        <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.score_box}>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                        </div>

                        <div className={styles.guest_name}>Akash Downey <div>- CEO Deercreative</div></div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.testimonial_description_box}>
                        <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.score_box}>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                        </div>

                        <div className={styles.guest_name}>Robert Downey <div>- CEO Deercreative</div></div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.testimonial_description_box}>
                        <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.score_box}>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                            <div className={styles.star_icon}><FontAwesomeIcon icon={faStar} /></div>
                        </div>

                        <div className={styles.guest_name}>Akash Downey <div>- CEO Deercreative</div></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials