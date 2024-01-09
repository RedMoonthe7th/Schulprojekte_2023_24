import React from 'react'
import styles from './List.module.css'

export default function List({listElement1, listElement2, listElement3}){
    return(
        <ul>
            <li className={styles.listElement}>{listElement1}</li>
            <li className={styles.listElement}>{listElement2}</li>
            <li className={styles.listElement}>{listElement3}</li>
        </ul>
    )
}