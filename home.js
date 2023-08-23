import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container}>
      <div className={styles.innercontainer}>
        <Navbar></Navbar>
        <div className={styles.innercontainer2}>
          <div className='Typography'>
            <h1>Welcome,</h1>
            <h2>To Football Database</h2>
            <h4>
              Here you can view the stats of Footballers':<br></br>
              Attacking stats<br></br>
              Defensive stats<br></br> 
              Passing stats<br></br> 
              of the top 10 Club Players in the premier League.
            </h4>
          </div>
          <div className='image'>
            <Image src="undraw_goal_-0-v5v.svg" alt="Italian Trulli" width={600} height={600}/>
          </div>
        </div>
      </div>
    </div>
  );
}
