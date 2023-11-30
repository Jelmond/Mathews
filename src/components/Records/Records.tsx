import styles from './Records.module.scss'
import data from '../Catalogue/data'
import Card from '../Catalogue/Card/Card'

export default function Records() {

    return(
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input placeholder='Поиск' type="text" />
                <div>
                    <img src="/filterIcon.png" alt="" />
                    <button>Поиск</button>
                </div>
            </div>
            <div className={styles.searchResult}>
                {data.map(i => <Card {...i}/>)}
            </div>
        </div>
    )
}