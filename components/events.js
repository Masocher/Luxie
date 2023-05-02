// assets
import styles from './../styles/Events.module.css'

const Events = () => {
    return (
        <div className={styles.events}>
            <div className={styles.events_title_box}>
                <div className={styles.events_issue}>OUR BLOG</div>

                <div className={styles.events_title}>Latest News & Event</div>
            </div>

            <div className={styles.events_box}>
                <div className={styles.event_box}>
                    <div className={styles.ev_i_b_1}></div>

                    <div className={styles.event_top_section}>
                        <div className={styles.event_date}>JAN 02, 2023</div>

                        <div className={styles.event_issue}>EVENT</div>
                    </div>

                    <div className={styles.event_title}>What Is Lorem Ipsum ?</div>

                    <div className={styles.event_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>

                <div className={styles.event_box}>
                    <div className={styles.ev_i_b_2}></div>

                    <div className={styles.event_top_section}>
                        <div className={styles.event_date}>JAN 02, 2023</div>

                        <div className={styles.event_issue}>EVENT</div>
                    </div>

                    <div className={styles.event_title}>What Is Lorem Ipsum ?</div>

                    <div className={styles.event_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>

                <div className={styles.event_box}>
                    <div className={styles.ev_i_b_3}></div>

                    <div className={styles.event_top_section}>
                        <div className={styles.event_date}>JAN 02, 2023</div>

                        <div className={styles.event_issue}>EVENT</div>
                    </div>

                    <div className={styles.event_title}>What Is Lorem Ipsum ?</div>

                    <div className={styles.event_description}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                </div>
            </div>
        </div>
    )
}

export default Events