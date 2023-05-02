// assets
import styles from './../styles/About-us.module.css'

const AboutUs = () => {
    return (
        <div className={styles.about_us_box}>
            <div className={styles.about_left_side}>
                <div className={styles.about_title_box}>
                    <div className={styles.title_issue}>ABOUT US</div>
                    <div className={styles.about_title}>Welcome To Luxie Hotel Luxury</div>
                </div>

                <div className={styles.about_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                <div className={styles.manager_box}>Manager : <div>Masocher</div></div>
            </div>

            <div className={styles.about_right_side}>
                <div className={styles.right_column}>
                    <div className={styles.about_image_box_2}></div>
                    <div className={styles.about_image_box_3}></div>
                </div>

                <div className={styles.left_column}>
                    <div className={styles.about_image_box_1}></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs