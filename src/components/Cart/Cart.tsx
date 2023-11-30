import styles from './Cart.module.scss'
import data from '../Catalogue/data'
import Card from '../Catalogue/Card/Card'

export default function Cart() {

    return(
        <div className={styles.container}>
            {data.map(i => <Card {...i}/>)}
        </div>
    )
}