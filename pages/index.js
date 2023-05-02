// assets
import styles from './../styles/Home.module.css'

// components
import Header from './../components/header'
import AboutUs from '../components/about-us'
import Services from '../components/services'
import Slider from '../components/slider'
import Testimonials from '../components/testimonials'
import Entertainmets from '../components/entertainments'
import Events from '../components/events'
import ContactUsBox from '../components/contact-us-box'
import Footer from '../components/footer'
import Loading from '../components/loading'

// tools
import { useState } from 'react'

export default function Home() {
  let [loadingStatus, setLoadingStatus] = useState(true)

  setTimeout(() => {
      setLoadingStatus(false)
  }, 2500);

  return (
    <div className={styles.main_container}>
      <Loading status={loadingStatus} />

      <Header />

      <div className={styles.container}>
        <div className={styles.top_side}>
          <div className={styles.welcome_image_box}></div>

          <div className={styles.title_box}>
            <div className={styles.app_issue}>HOTEL & RESORT</div>
            <div className={styles.welcome_title}>Welcome To Luxie</div>
            <div className={styles.discover_btn}>Discover Now</div>
          </div>

          <div className={styles.booking_box}>
            <div className={styles.input_box}>
              <label className={styles.input_title}>Check In</label>
              <input className={styles.book_input} type="date" />
            </div>

            <div className={styles.input_box}>
              <label className={styles.input_title}>Check Out</label>
              <input className={styles.book_input} type="date" />
            </div>

            <div className={styles.input_box}>
              <label className={styles.input_title}>Room</label>
              <select className={styles.select_input}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
              </select>
            </div>

            <div className={styles.input_box}>
              <label className={styles.input_title}>Adult</label>
              <select className={styles.select_input}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
              </select>
            </div>

            <div className={styles.input_box}>
              <label className={styles.input_title}>Children</label>
              <select className={styles.select_input}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
              </select>
            </div>

            <div className={styles.book_btn}>Check Availability</div>
          </div>
        </div>
      </div>

      <div className='main_content'>
        <AboutUs />
        <Services />
        <Slider />
        <Testimonials />
        <Entertainmets />
        <Events />
        <ContactUsBox />
        <Footer />
      </div>
    </div>
  )
}