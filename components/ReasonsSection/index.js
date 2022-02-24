import React from "react";

import styles from "./ReasonsSection.module.css";

export default function ReasonsSection() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            What&apos;s different about Manage?
          </h2>
          <p className={styles.text}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div>
          <div className={styles.reasonsContainer}>
            <div className={styles.reasonsTitle}>
              <span>01</span>Track company-wide progress
            </div>
            <p className={styles.reasonsText}>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className={styles.reasonsContainer}>
            <div className={styles.reasonsTitle}>
              <span>02</span>Advanced built-in reports
            </div>
            <p className={styles.reasonsText}>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className={styles.reasonsContainer}>
            <div className={styles.reasonsTitle}>
              <span>03</span>Everything you need in one place
            </div>
            <p className={styles.reasonsText}>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
