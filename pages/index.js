import Head from "next/head";
import styles from "../styles/Home.module.css";
import gsap, { TweenMax, Power3 } from "gsap";
import { useRef, useEffect, useState } from "react";
import Button from "../components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  let heading = useRef(null);
  let searchHomes = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    TweenMax.to(heading, {
      duration: 1,
      ease: Power3.easeInOut,
      opacity: 1,
    });
    TweenMax.to(searchHomes, {
      duration: 1.5,
      ease: Power3.easeInOut,
      opacity: 1,
      delay: 0.5,
      y: 0,
    });
  }, []);
  async function animateButton() {
    await TweenMax.to(searchHomes, {
      duration: 0.3,
      ease: Power3.easeInOut,
      opacity: 0,
    });
    await TweenMax.to(body, {
      duration: 0.5,
      ease: Power3.easeInOut,
      opacity: 0,
    });
    router.push("/listings/3-plymouth-rd");
  }

  return (
    <div className={`${styles.container}`} style={{ minHeight: "75vh" }}>
      <Head>
        <title>Patrick Keenan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${styles.main} w-full relative pt-5`}
        ref={(c) => (body = c)}
      >
        <h1
          className="text-white text-4xl opacity-0 md:text-5xl lg:text-6xl font-extrabold text-center -mt-5 pb-5"
          ref={(el) => (heading = el)}
          id="heading"
        >
          Working
          <br />
          On A Headline
        </h1>
        <div
          className="flex align-middle justify-center -mb-4 opacity-0 transform translate-y-10 "
          ref={(v) => (searchHomes = v)}
          onClick={animateButton}
        >
          <Button text="View Listings" style="primary" />
        </div>
      </div>
    </div>
  );
}
