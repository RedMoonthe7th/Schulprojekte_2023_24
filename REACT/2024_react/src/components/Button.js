import React from 'react'
import styles from './Button.module.css'

export default function Button({content}){
    return(
        <div>
            <button className={styles.main} onClick={()=>{alert("You clicked a button. Here is your cookie")}}> {content} </button>
        </div>
        
    )
}