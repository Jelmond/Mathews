import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {

    return(
        <div className={styles.header}>
            <div className={styles.left}>
                <Link href='/'>пластика</Link>
            </div>
            <div className={styles.right}>
                <div className={styles.input}>
                    <input/>
                    <img src='/searchIcon.png'/>
                </div>
                <div className={styles.list}>
                    <Link href='/'><p>главная</p></Link>
                    <Link href='/chosen'><p>избранное</p></Link>
                    <Link href='/new'><p>новинки</p></Link>
                    <Link href='/bucket'><p>корзина</p></Link>
                </div>
            </div>
        </div>
    )
}