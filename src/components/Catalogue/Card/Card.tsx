import styles from './Card.module.scss'

interface CardProps {
    img: string;
    author: string;
    title: string;
    genres: string[];
    sale: number;
    price: number;
}

const Card = ({img, author, title, genres, sale, price} : CardProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.cardImg} src={img}/>
            <p className={styles.author}>{author}</p>
            <p className={styles.title}>{title}</p>
            <div className={styles.cardBottom}>
                <ul>
                    {genres.map(i => <li>{i}</li>)}
                </ul>
                <div>
                    <span className={styles.sale}>-{sale}%</span>
                    <span className={styles.price} data-full-price={`${price} BYN`}>{Math.floor(price / 2)} BYN</span>
                </div>
            </div>
        </div>
    )
}

export default Card