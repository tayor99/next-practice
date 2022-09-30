import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

const Ninja = ({ ninjas }) => {
  return (
    <>
      <h1>Ninjas </h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninja/${ninja.id}`} key={ninja.id}>
          <span className={styles.single}>
            <h3>{ninja.name}</h3>
          </span>
        </Link>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default Ninja;
