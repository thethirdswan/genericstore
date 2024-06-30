import { items } from '@/app/lib/data';
import styles from '@/app/page.module.css';
import Image from 'next/image';

export default function Items() {

    return items.map((item) => {
        return (
            <div className={styles.items} key="items">
            <Image
                src={item.picture}
                width={100}
                height={100}
                alt="bayonetta"
            />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
        )
    })

}