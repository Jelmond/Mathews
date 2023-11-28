import { useState } from 'react'
import styles from './Catalogue.module.scss'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'

import data from './data';
import Card from './Card/Card';

const categories = [
    'Все', 'Hip hop', 'Lo-fi', 'Lounge', 'Jazz', 'Ambient', 
]


const Catalogue = () => {
    const [selected, setSelected] = useState(categories[0])

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Наш каталог пластинок</h3>
            <div className={styles.categories}>
                {
                    categories.map(i => <span onClick={() => setSelected(i)} className={`${styles.category} ${i === selected ? styles.selected : ''}`}>{i}</span>)
                }
            </div>
            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, A11y, Pagination]}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={70}
                    className={styles.swiper}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card {...item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className={styles.moreBtn}>Смотреть все</button>
        </div>
    )
}

export default Catalogue