"use client";
import { useState } from "react";
import { FrontCard, BackCard } from "@/app/ui/payment-card";
import { CardDetailsForm } from "./ui/card-details-form";
import styles from "./page.css";

export default function Home() {
  const [cardInfo, setCardInfo] = useState({
    cardholderName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    mm: '00',
    yy: '00',
    cvc: '000',
  });

  const handleSubmit = async (data: FormValues) => {
    const { cardHolderName, cardNumber, mm, yy, cvc } = data;
    setCardInfo({
      cardholderName: cardHolderName.toUpperCase(),
      cardNumber: cardNumber.trim(),
      mm: mm.toString(),
      yy: yy.toString(),
      cvc: cvc.toString()
    });
  }

  return (
    <main className={styles.main}>
      <FrontCard
        cardholderName={cardInfo.cardholderName}
        cardNumber={cardInfo.cardNumber}
        mm={cardInfo.mm}
        yy={cardInfo.yy}
      />
      <BackCard cvc={cardInfo.cvc} />
      <CardDetailsForm
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
