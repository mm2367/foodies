import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";
import {Meal} from "./mealType";
const db=sql('meals.db')

export async function getMeals(){
   await new Promise((resolve)=> setTimeout(resolve, 2000));
   return db.prepare('SELECT * FROM meals').all();

}
export function getMeal(pageName:string):Meal{
   return db.prepare('SELECT * FROM meals WHERE pageName = ?').get(pageName) as Meal
}

export async function saveMeal(meal:Meal){
   meal.pageName=slugify(meal.title, {lower:true})
   meal.instructions=xss(meal.instructions)
   const extension =meal.image.name.split('.').pop()
   const fileName=`${meal.pageName}.${extension}`
   const stream =fs.createWriteStream(`public/images/${fileName}`)
   const bufferedImage=await meal.image.arrayBuffer();
   stream.write(Buffer.from(bufferedImage),(error)=>{
      if(error){
         throw new Error('Saving image failed');
      }
   });
   //@ts-ignore
   meal.image=`/images/${fileName}`
   db.prepare(`INSERT into meals (title, summary, instructions, creator, creator_email, image, pageName)
VALUES         (@title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @pageName
       )`).run(meal)
}