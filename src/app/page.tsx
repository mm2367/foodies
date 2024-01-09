import Image from 'next/image'
import Link from "next/link";
import styles from './page.module.css';
import ImageSlideshow from "../../components/images/imagesslideshow";
import {getMeals} from "../../lib/meals";
export default function Home() {
  return (
      <>
          <header className={styles.header}>
              <div className={styles.slideshow}>
                  <ImageSlideshow/>
              </div>
              <div>
                  <div className={styles.hero}>
                      <h1> NextLevel Food for NextLevel Foodies</h1>
                      <p>Taste & share from all over the world.</p>
                  </div>
                  <div className={styles.cta}>
                      <Link href={'/community'}>
                          Join the Community
                      </Link>
                      <Link href={'/meals'}>
                          Explore the Meals
                      </Link>
                  </div>
              </div>
          </header>
          <main>
              <section className={styles.section}>
                  <h2>How it works</h2>
                  <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                  </p>
                  <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                  </p>
              </section>

              <section className={styles.section}>
                  <h2>Why NextLevel Food?</h2>
                  <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                  </p>
                  <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                  </p>
              </section>
          </main>
          </>
  );
}