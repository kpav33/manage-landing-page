import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: true,
  });
  // useEffect(() => {
  //   if (emblaApi) {
  //     return;
  //   }
  // }, [emblaApi]);

  return (
    <section className={styles.container}>
      <h2>What they&apos;ve said</h2>
      {/* <div className={styles.testimonial}>
        <div className={styles.imageContainer}>
          <Image
            src="/avatar-ali.png"
            width={72}
            height={72}
            alt="avatar image"
          />
        </div>
        <h3>Ali Bravo</h3>
        <p>
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </p>
      </div> */}
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <div className={styles.testimonial}>
              <div className={styles.imageContainer}>
                <Image
                  src="/avatar-anisha.png"
                  width={72}
                  height={72}
                  alt="avatar image"
                />
              </div>
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team&apos;s workflow. The ability
                to maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.testimonial}>
              <div className={styles.imageContainer}>
                <Image
                  src="/avatar-ali.png"
                  width={72}
                  height={72}
                  alt="avatar image"
                />
              </div>
              <h3>Ali Bravo</h3>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.testimonial}>
              <div className={styles.imageContainer}>
                <Image
                  src="/avatar-richard.png"
                  width={72}
                  height={72}
                  alt="avatar image"
                />
              </div>
              <h3>Richard Watts</h3>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can&apos;t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.testimonial}>
              <div className={styles.imageContainer}>
                <Image
                  src="/avatar-shanai.png"
                  width={72}
                  height={72}
                  alt="avatar image"
                />
              </div>
              <h3>Shanai Gough</h3>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.testimonialsButton}>Get Started</button>
    </section>
  );
}
