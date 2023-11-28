import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>©Пластинка</span>
            <p className={styles.motto}> ПАСТИНКА - найди свой винил</p>
            <div className={styles.links}>
                <img src="/telegram.png" alt="" />
                <img src="/instagram.png" alt="" />
                <img src="/vk.png" alt="" />
            </div>
        </div>
    )
}

export default Footer