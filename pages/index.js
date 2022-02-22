import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manage landing page</title>
        <meta
          name="description"
          content="Manage landing page challenge by Frontend Mentor"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        {/* <Header /> */}
        <Banner />
        <Footer />
        {/* <Image
          src="/bg-simplify-section-desktop.svg"
          alt="alternative image"
          width={1439}
          height={360}
        /> */}
      </main>
    </div>
  );
}
