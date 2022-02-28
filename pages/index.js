import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ReasonsSection from "../components/ReasonsSection";
import Simplify from "../components/Simplify";
import Testimonials from "../components/Testimonials";

import en from "../locales/en";
import fr from "../locales/fr";
import si from "../locales/si";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "fr" ? fr : si;
  // console.log(locale, t);

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
        <Banner t={t} />
        <ReasonsSection />
        <Testimonials />
        <Simplify />
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
