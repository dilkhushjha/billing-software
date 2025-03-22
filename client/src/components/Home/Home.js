import React from 'react'
import styles from './Home.module.css'

const Home = () => {

    return (
        <div className={styles.pageContainer}>

            <section className={styles.hero}>
                <h1>Complete software solution for Businesses.</h1>
                <button onClick={() => window.location.href = '/login'} className={styles.login}>Get started</button>

            </section>
        </div>
    )
}

export default Home
