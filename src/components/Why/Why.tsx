import styles from './Why.module.scss'

const perksArray = [
    {
        img: '/perksIcons/note.png',
        title: 'Идеальное качество',
        description: 'Наши пластинки звучат  чисто и без шумов, и все это благодоря наивысшему качеству продукта!',
    },
    {
        img: '/perksIcons/note.png',
        title: 'Идеальное качество',
        description: 'Наши пластинки звучат  чисто и без шумов, и все это благодоря наивысшему качеству продукта!',
    },
    {
        img: '/perksIcons/note.png',
        title: 'Идеальное качество',
        description: 'Наши пластинки звучат  чисто и без шумов, и все это благодоря наивысшему качеству продукта!',
    },
]

const Why = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>
            Почему выбирают именно наши виниловые пластинки?
            </h3>
            <div className={styles.perks}>
                {
                    perksArray.map(i => (
                        <div className={styles.perk}>
                            <img src={i.img} alt="" />
                            <div>
                                <h5>{i.title}</h5>
                                <p>{i.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Why