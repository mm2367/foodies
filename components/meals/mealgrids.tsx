import MealItem from "./meal-item";
import {inspect} from "util";
import styles from './meal-grid.module.css'

export default function MealsGrid({meals}:any){
    return(
        <ul className={styles.meals}>
            {meals?.map((meal:any)=>(
                <li key={meal.id}>
                <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    )
}