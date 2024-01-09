import classes from "./page.module.css";
import React from "react";
import {getMeal} from "../../../../lib/meals";
import Image from "next/image";
import NotFound from "@/app/meals/not-found";
import {Meal} from "../../../../lib/mealType";
import {notFound} from "next/navigation";
export async function generateMetaData({params}:any){
    const meal:Meal=getMeal(params.pageName)
    if(!meal){
        notFound();
    }
    return {
        title:meal.title,
        description:meal.summary,
    }

}
export default function MealsSlugPage({params}:any){
    const meal:any= getMeal(params.pageName)
    if(!meal){
        NotFound()
    }
    meal.instructions=meal.instructions.replace(/\n/g, '<br />')
    return(

        <>

            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>

                </div>
                <div className={classes.headerText}>
                    <h1>
                        {meal?.title}
                    </h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'meal.creator_email'}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summery}> {meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}/>
            </main>
        </>
    )
}