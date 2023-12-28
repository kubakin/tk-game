import styles from './index.module.scss'
import React, {ForwardedRef} from "react";

export const Input = React.forwardRef((props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => (
    <>
        <input ref={ref} {...props} className={styles.inputUI}/>
    </>
));
