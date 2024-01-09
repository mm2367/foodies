'use client';
import classes from "./image-picker.module.css";
import {ChangeEventHandler, MutableRefObject, ReactEventHandler, SyntheticEvent, useRef, useState} from "react";
import Image from "next/image";
export default function ImagePicker({label, name}:any){
    const imageInput = useRef<HTMLInputElement>();
    const [pickedImage, setPickedImage]=useState<  string | ArrayBuffer | null>();

    const handleClickPick=()=>{
        imageInput.current?.click()
    }
    const handleImageChange=(event:SyntheticEvent<any> )=>{
        //@ts-ignore
        const file= event.target?.files[0]
        if (!file) {
            setPickedImage(undefined);
            return;
        }
        const fileReader=new FileReader()
        fileReader.onload=()=>{
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={"image"}>
                {label}
                </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p> No image selected</p>}
                    {pickedImage && (
                        <Image
                         src={pickedImage as string}
                         alt={"The image selected by the user"}
                         fill
                        />
                    )}
                </div>
                <input className={classes.input} type={"file"}
                       id={"image"}
                       accept={"image/png, image/jpg" }
                       name={name}
                       ref={imageInput as MutableRefObject<HTMLInputElement>}
                       onChange={handleImageChange}
                       required
                />
                <button className={classes.button} type={"button"} onClick={handleClickPick}>
                    Pick an image
                </button>
            </div>
        </div>

    )
}