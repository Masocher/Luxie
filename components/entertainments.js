// assets
import styles from './../styles/Entertainments.module.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// tools
import { useState } from 'react'

const Entertainmets = () => {

    let [isHover1, setIsHover1] = useState(false)
    let [isHover2, setIsHover2] = useState(false)
    let [isHover3, setIsHover3] = useState(false)
    let [isHover4, setIsHover4] = useState(false)

    const hover1 = () => {
        setIsHover1(true)
    }
    const unhover1 = () => {
        setIsHover1(false)
    }

    const hover2 = () => {
        setIsHover2(true)
    }
    const unhover2 = () => {
        setIsHover2(false)
    }

    const hover3 = () => {
        setIsHover3(true)
    }
    const unhover3 = () => {
        setIsHover3(false)
    }

    const hover4 = () => {
        setIsHover4(true)
    }
    const unhover4 = () => {
        setIsHover4(false)
    }

    return (
        <div className={styles.entertainments} slides-per-view="4" centered-slides="true" loop="true">
            <div 
                onMouseEnter={hover1}
                onMouseLeave={unhover1}
                className={styles.entertainment_box}
            >
                <div className={styles.e_i_b_1}></div>

                <div 
                    style={{
                        height: ! isHover1 ? "120px" : "350px",
                        backgroundColor: ! isHover1 ? "rgba(0, 0, 0, .5)" : "#1cc3b2"
                    }}
                    className={styles.entertainment_title_box}
                >
                    <div className={styles.e_t_b}>
                        <div className={styles.entertainment_issue}>Entertainment</div>
                        <div className={styles.entertainment_title}>Lorem Ipsum</div>
                    </div>

                    <div 
                        style={{
                            opacity: isHover1 ? '1' : '0'
                        }}
                        className={styles.about_entertainment}
                    >
                        <div className={styles.about_e_b}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.e_b_discover_btn}>Discover Now <FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
            </div>

            <div 
                onMouseEnter={hover2}
                onMouseLeave={unhover2}
                className={styles.entertainment_box_2}
            >
                <div className={styles.e_i_b_2}></div>

                <div 
                    style={{
                        height: ! isHover2 ? "120px" : "350px",
                        backgroundColor: ! isHover2 ? "rgba(0, 0, 0, .5)" : "#1cc3b2"
                    }}
                    className={styles.entertainment_title_box}
                >
                    <div className={styles.e_t_b}>
                        <div className={styles.entertainment_issue}>Entertainment</div>
                        <div className={styles.entertainment_title}>Lorem Ipsum</div>
                    </div>

                    <div 
                        style={{
                            opacity: isHover2 ? '1' : '0'
                        }}
                        className={styles.about_entertainment}
                    >
                        <div className={styles.about_e_b}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.e_b_discover_btn}>Discover Now <FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
            </div>

            <div 
                onMouseEnter={hover3}
                onMouseLeave={unhover3}
                className={styles.entertainment_box}
            >
                <div className={styles.e_i_b_3}></div>

                <div 
                    style={{
                        height: ! isHover3 ? "120px" : "350px",
                        backgroundColor: ! isHover3 ? "rgba(0, 0, 0, .5)" : "#1cc3b2"
                    }}
                    className={styles.entertainment_title_box}
                >
                    <div className={styles.e_t_b}>
                        <div className={styles.entertainment_issue}>Entertainment</div>
                        <div className={styles.entertainment_title}>Lorem Ipsum</div>
                    </div>

                    <div 
                        style={{
                            opacity: isHover3 ? '1' : '0'
                        }}
                        className={styles.about_entertainment}
                    >
                        <div className={styles.about_e_b}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.e_b_discover_btn}>Discover Now <FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
            </div>

            <div 
                onMouseEnter={hover4}
                onMouseLeave={unhover4}
                className={styles.entertainment_box_4}
            >
                <div className={styles.e_i_b_4}></div>

                <div 
                    style={{
                        height: ! isHover4 ? "120px" : "350px",
                        backgroundColor: ! isHover4 ? "rgba(0, 0, 0, .5)" : "#1cc3b2"
                    }}
                    className={styles.entertainment_title_box}
                >
                    <div className={styles.e_t_b}>
                        <div className={styles.entertainment_issue}>Entertainment</div>
                        <div className={styles.entertainment_title}>Lorem Ipsum</div>
                    </div>

                    <div 
                        style={{
                            opacity: isHover4 ? '1' : '0'
                        }}
                        className={styles.about_entertainment}
                    >
                        <div className={styles.about_e_b}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>

                        <div className={styles.e_b_discover_btn}>Discover Now <FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entertainmets