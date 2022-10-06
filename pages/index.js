import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Astro | Home</title>
        <meta keyword="astro" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
          tortor at auctor urna nunc id cursus metus. Maecenas ultricies mi eget
          mauris pharetra et. Tincidunt dui ut ornare lectus sit. Adipiscing
          bibendum est ultricies integer quis auctor elit sed. Nisl purus in
          mollis nunc sed id. Eu ultrices vitae auctor eu. Sit amet consectetur
          adipiscing elit duis tristique sollicitudin nibh sit. Quis enim
          lobortis scelerisque fermentumng diam donec adipiscin imperdiet dui.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
          tortor at auctor urna nunc id cursus metus. Maecenas ultricies mi eget
          mauris pharetra et. Tincidunt dui ut ornare lectus sit. Adipiscing
          bibendum est ultricies integer quis auctor elit sed. Nisl purus in
          mollis nunc sed id. Eu ultrices vitae auctor eu. Sit amet consectetur
          adipiscing elit duis tristique sollicitudin nibh sit. Quis enim
          lobortis scelerisque fermentumng diam donec adipiscin imperdiet dui.
        </p>
        <Link href="/astro">
          <a className={styles.btn}>See list</a>
        </Link>
      </div>
    </>
  );
}
