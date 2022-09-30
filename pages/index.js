import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          accusantium quae vero sint officia cum, harum temporibus blanditiis
          dolor recusandae autem ut assumenda eos ducimus ex facilis ratione
          nihil odio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          accusantium quae vero sint officia cum, harum temporibus blanditiis
          dolor recusandae autem ut assumenda eos ducimus ex facilis ratione
          nihil odio.
        </p>
        <Link href="/ninja">
          <a className={styles.btn}> See ninja listing</a>
        </Link>
        <br />
      </div>
    </>
  );
}
