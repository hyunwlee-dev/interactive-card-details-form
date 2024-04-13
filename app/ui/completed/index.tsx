import { Button } from "@/app/ui/button";
import Image from "next/image";
import styles from "./completed.css";

export function Completed({
  reset,
}: { reset: () => void }) {
  return (
    <section className={styles.completed}>
      <Image
        className={styles.image}
        src='/images/icon-complete.svg'
        width={80}
        height={80}
        alt='complete image'
      />
      <h1 className={styles.heading1}>thank you!</h1>
      <p className={styles.paragraph}>{`We've added you card details`}</p>
      <Button
        onClick={reset}
        className={styles.btn}
        textContent="continue" />
    </section>
  );
}
