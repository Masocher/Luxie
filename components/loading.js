// assets
import styles from './../styles/Loading.module.css'

function Loading(props) {
    return (
        <div
            style={{
                display: props.status ? 'flex' : 'none'
            }}
            className={styles.loading_box}
        >
        <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    )
}

export default Loading