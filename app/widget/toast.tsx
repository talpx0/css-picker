'use client'
import { useEffect, useState } from "react";
import styles from './toast.module.css'
type ToastProps = {
    children: React.ReactNode
    duration?: number
    onHide: () => void
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