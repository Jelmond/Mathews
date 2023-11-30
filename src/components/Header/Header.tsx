import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {

    return(
        <div className={styles.header}>
            <div className={styles.left}>
                <Link className={styles.leftContent} href='/'>пластинка <img src="/logo.png" alt="" /></Link>
            </div>
            <div className={styles.right}>
                <div className={styles.list}>
                    <Link href='/'><p>Главная</p></Link>
                    <Link href='/records'><p>Пластинки</p></Link>
                    <Link href='/cart'><p>Корзина</p></Link>
                    <Link href='/contacts'><p>Контакты</p></Link>
                </div>
            </div>
        </div>
    )
}