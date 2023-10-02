'use client'
import { useState } from "react";
import { Toast } from "@/app/widget/toast";
import styles from "./page.module.css"
import { boxShadows } from "./shadow.query";

type BoxshadowsProp = {
    id: number|null
    isClicked: boolean
}

export const ShadowContainter =()=> {
    const [showToast, setToast] = useState<BoxshadowsProp>({
        id: null,
        isClicked: false
    });
    const hideToast =()=> setToast({
        id: null,
        isClicked: false
        })
    return( 
        <>
            <section className={styles.container}>
                {boxShadows.map((boxShadow, key)=> <section key={boxShadow.id} className={styles.box}>
                    <div style={{boxShadow: boxShadow.name}} onClick={
                        ()=> navigator.clipboard.writeText(`box-shadow: ${boxShadow.name};`)
                                .then(() => setToast({
                                    id: boxShadow.id,
                                    isClicked: true})
                                )  
                    }>
                    <span>{boxShadow.id}</span>
                    </div>                    
                </section>
                )}
            </section>
            {showToast.isClicked && <Toast onHide={hideToast}>
                {`Box-shadow ${showToast.id} copied to clipboard!`}
            </Toast>}
        </>
    )
}