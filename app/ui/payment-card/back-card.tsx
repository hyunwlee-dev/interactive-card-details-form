import { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./back-card.css";

interface BackCardProps extends HTMLAttributes<HTMLDivElement> {
  cvc: string;
}

export function BackCard({
  cvc,
  className,
  ...props
}: BackCardProps) {
  return (
    <div
      aria-label='back card image'
      role="img"
      className={clsx(styles.backSide, className)}
      {...props}
    >
      <span className={styles.cvc}>{cvc}</span>
    </div>
  );
}
