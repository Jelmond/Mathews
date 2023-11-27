import Image from 'next/image'
import styles from './page.module.scss'
import FirstView from '@/components/FirstView/FirstView'

export default function Home() {
  return (
    <main className={styles.main}>
        <FirstView></FirstView>
    </main>
  )
}
