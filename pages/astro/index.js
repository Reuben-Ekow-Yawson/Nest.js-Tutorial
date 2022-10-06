import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Astro.module.css";


export const getStaticProps = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await result.json();

  return {
    props: {
      astro: data,
    },
  };
};

const Test = ({ astro }) => {
  console.log(astro);
  return (
      <div>
        {astro &&
          astro.map((rey) => {
            return (
              <Link href={'/astro/' + rey.id} key={rey.id}>
                <a className={styles.single}>
                  <h3>{rey.name}</h3>
                </a>
              </Link>
            );
          })}
      </div>
  );
};

export default Test;
