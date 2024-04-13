"use client";
import { useState } from "react";
import { FrontCard, BackCard } from "@/app/ui/payment-card";
import { CardDetailsForm } from "@/app/ui/card-details-form";
import { Completed } from "@/app/ui/completed";
import If from "@/app/utils/if";
import styles from "./page.css";

export default function Home() {
  const initInfo = {
    cardholderName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    mm: '00',
    yy: '00',
    cvc: '000',
  }

  const [cardInfo, setCardInfo] = useState({ ...initInfo });

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

  const reset = () => {
    setCardInfo({ ...initInfo });
  }

  const isCompleted = () => {
    return cardInfo.mm !== '00';
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
      <If condition={!isCompleted()}>
        <If.Then>
          <CardDetailsForm
            className={styles.cardDetailsForm}
            handleSubmit={handleSubmit}
          />
        </If.Then>
        <If.Else>
          <Completed reset={reset} />
        </If.Else>
      </If>
    </main>
  );
}
