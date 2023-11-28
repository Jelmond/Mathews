import styles from './Mixes.module.scss'

const data = [
    {
        title: 'Лучшее из Хип-хопа',
        img: '/mixes/hiphop.jpg'
    },
    {
        title:  'Классика Рока',
        img: '/mixes/rock.jpg'
    },
    {
        title: 'Успокаивающий Ambient',
        img: '/mixes/ambient.jpg'
    }
]

const Mixes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mixes}>
                {
                    data.map(i => (
                        <div style={{backgroundImage: `url(${i.img})`}}>
                            <span>{i.title}</span>
                        </div>
                    ))
                }
            </div>
            <button className={styles.moreBtn}>Ещё</button>
        </div>
    )
}

export default Mixes