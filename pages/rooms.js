// assets
import styles from './../styles/pages/Rooms.module.css'

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

const Rooms = () => {
    let [loadingStatus, setLoadingStatus] = useState(true)

    setTimeout(() => {
        setLoadingStatus(false)
    }, 2500);

    return (
        <div className={styles.main_container}>
            <Loading status={loadingStatus} />

            <Header />

            <div className={styles.container}>
                <PagesTop title="Our Rooms" issue="Rooms" />

                <div className={styles.rooms_section}>
                    <div className={styles.rooms}>
                        <div className={styles.room}>
                            <div className={styles.r_i_b_1}></div>

                            <div className={styles.room_information_box}>
                                <div className={styles.title_box}>Premium King Room</div>

                                <div className={styles.price_box}>400$ <div>/ day</div></div>

                                <div className={styles.room_information}>
                                    <div className={styles.capacity}>
                                        <div className={styles.capacity_title}>Capacity</div>
                                        <div className={styles.room_capacity}>: 5 person</div>
                                    </div>


                                    <div className={styles.size}>
                                        <div className={styles.size_title}>Size</div>
                                        <div className={styles.room_size}>: 30 ft</div>
                                    </div>
                                </div>

                                <div className={styles.view_details}>View Details <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.room}>
                            <div className={styles.r_i_b_2}></div>

                            <div className={styles.room_information_box}>
                                <div className={styles.title_box}>Premium King Room</div>

                                <div className={styles.price_box}>400$ <div>/ day</div></div>

                                <div className={styles.room_information}>
                                    <div className={styles.capacity}>
                                        <div className={styles.capacity_title}>Capacity</div>
                                        <div className={styles.room_capacity}>: 5 person</div>
                                    </div>


                                    <div className={styles.size}>
                                        <div className={styles.size_title}>Size</div>
                                        <div className={styles.room_size}>: 30 ft</div>
                                    </div>
                                </div>

                                <div className={styles.view_details}>View Details <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.room}>
                            <div className={styles.r_i_b_3}></div>

                            <div className={styles.room_information_box}>
                                <div className={styles.title_box}>Premium King Room</div>

                                <div className={styles.price_box}>400$ <div>/ day</div></div>

                                <div className={styles.room_information}>
                                    <div className={styles.capacity}>
                                        <div className={styles.capacity_title}>Capacity</div>
                                        <div className={styles.room_capacity}>: 5 person</div>
                                    </div>


                                    <div className={styles.size}>
                                        <div className={styles.size_title}>Size</div>
                                        <div className={styles.room_size}>: 30 ft</div>
                                    </div>
                                </div>

                                <div className={styles.view_details}>View Details <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <div className={styles.room}>
                            <div className={styles.r_i_b_4}></div>

                            <div className={styles.room_information_box}>
                                <div className={styles.title_box}>Premium King Room</div>

                                <div className={styles.price_box}>400$ <div>/ day</div></div>

                                <div className={styles.room_information}>
                                    <div className={styles.capacity}>
                                        <div className={styles.capacity_title}>Capacity</div>
                                        <div className={styles.room_capacity}>: 5 person</div>
                                    </div>


                                    <div className={styles.size}>
                                        <div className={styles.size_title}>Size</div>
                                        <div className={styles.room_size}>: 30 ft</div>
                                    </div>
                                </div>

                                <div className={styles.view_details}>View Details <div><FontAwesomeIcon icon={faArrowRight} /></div></div>
                            </div>
                        </div>

                        <Pagination />
                    </div>

                    <div className={styles.filter_box}>
                        <div className={styles.date_inputes}>
                            <label className={styles.input_title}>Date</label>

                            <div className={styles.inputes}>
                                <input className={styles.date_input} placeholder="Check In" type="text" />
                                <input className={styles.date_input} placeholder="Check Out" type="text" />
                            </div>
                        </div>

                        <div className={styles.guests_inputes}>
                            <label className={styles.input_title}>Guests</label>

                           <div className={styles.inputes}>
                                <select className={styles.guest_input}>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                </select>

                                <select className={styles.guest_input}>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                </select>
                           </div>
                        </div>

                        <div className={styles.check_availability}>Check Availability</div>
                    </div>
                </div>
            </div>

            <ContactUsBox />

            <Footer />
        </div>
    )
}

export default Rooms