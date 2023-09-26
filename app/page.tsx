import Image from 'next/image'
import styles from './page.module.css'
import { BoxContainter } from './widget'

export default function Home() {
  return (
    <main className={styles.main}>
      <BoxContainter />
    </main>
  )
}
