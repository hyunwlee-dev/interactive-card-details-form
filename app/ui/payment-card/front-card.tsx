import { HTMLAttributes } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./front-card.css";

interface FrontCardProps extends HTMLAttributes<HTMLDivElement> {
  cardholderName: string;
  cardNumber: string;
  mm: string;
  yy: string;
}

export function FrontCard({
  cardholderName,
  cardNumber,
  mm,
  yy,
  className,
  ...props
}: FrontCardProps) {
  return (
    <div
      aria-label='front card image'
      role="img"
      className={clsx(styles.frontSide, className)}
      {...props}
    >
      <Image
        className={styles.logo}
        src={`/images/card-logo.svg`}
        width={54}
        height={30}
        alt='card logo image'
      />
      <span className={styles.cardholderName}>{cardholderName}</span>
      <span className={styles.cardNumber}>{cardNumber}</span>
      <span className={styles.date}>{`${mm}/${yy}`}</span>
    </div>
  );
}
