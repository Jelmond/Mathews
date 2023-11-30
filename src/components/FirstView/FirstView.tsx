"use client"

import styles from './FirstView.module.scss'
import Hero from '../Hero/Hero'
import Why from '../Why/Why'
import Catalogue from '../Catalogue/Catalogue'
import Mixes from '../Mixes/Mixes'

export default function FirstView() {

    return(
        <div className={styles.first}>
            <Hero />
            <Why />
            <Catalogue />
            <h3 className={styles.mixes}>Подборки пластинок</h3>
            <Mixes />
        </div>
    )
}