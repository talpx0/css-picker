'use client'
import { useEffect, useState } from "react";
import { boxShadows } from "./(cssQuery)/boxShaow";
import styles from './page.module.css'

type ToastProps = {
    children: React.ReactNode
    duration?: number
    onHide: () => void
}

type BoxshadowsProp = {
    id: number|null
    isClicked: boolean
}

export const Toast = ({ children, duration = 1000, onHide }:ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(onHide, duration);
        return () => clearTimeout(timer);
    }, [duration, onHide]);

    return (
        <div className={styles.toast} >
            {children}
        </div>
    );
}


export const BoxContainter =()=> {
    const [showToast, setToast] = useState<BoxshadowsProp>({
        id: null,
        isClicked: false
    });
    const hideToast =()=> setToast({
        id: null,
        isClicked: false
        });
    return( 
        <>
            <section className={styles.container}>
                {boxShadows.map((boxShadow, key)=> <section key={boxShadow.id} className={styles.box}>
                    <div style={{boxShadow: boxShadow.name}} onClick={
                        ()=> navigator.clipboard.writeText(`box-shadow: ${boxShadow.name}`)
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
