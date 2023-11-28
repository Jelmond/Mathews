import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Создай космический вайб у себя дома</h1>
                <p>Онлайн магазин виниловых пластинок, с доставкой прямо к двери создадут у вас дома музыкальную сингулярность!</p> 
                <button>Перейти к винилу</button>
            </div>
            <img className={styles.heroImg} src="/heroImg.png" alt="" />
 
        </div>
    )
}

export default Hero