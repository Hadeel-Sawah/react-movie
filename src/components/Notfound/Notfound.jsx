import React from 'react';
import notFound from '../../imges/yalantis-interactive-404.gif';
import styles from './Notfound.module.css';
export default function Notfound() {
  return (
  <>
       <img src={notFound} alt="NotFound" className={`${styles.brdr}`}/>
  </>
  )
}
