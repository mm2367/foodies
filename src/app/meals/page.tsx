import styles from './page.module.css';
import Link from "next/link";
import MealsGrid from "../../../components/meals/mealgrids";
import {getMeals} from "../../../lib/meals";
import {Suspense} from "react";
import classes from "../../../components/meals/loading.module.css";
export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals by our vibrant community',
};
async function Meals(){
    const meals=await getMeals();
        return <MealsGrid meals={meals}/>
}
export default function MealsPage(){
    return(
        <>
            <header className={styles.header}>
            <h1>
                Delicious Meals, created {' '}
            </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy to do!
                </p>
            <p className={styles.cta}>
                <Link href={'/meals/share'}>
                   Share your favorite recipe
                </Link>
            </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={     <p className={classes.loading}>
                    Fetching Meals
                </p>}>
                 <Meals/>
                </Suspense>
            </main>
        </>
    )
}