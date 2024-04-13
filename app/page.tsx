"use client";
import { Form } from "@/app/ui/form";
import { option } from "@/app/utils/validator";
import { Button } from "@/app/ui/button";
import { FrontCard, BackCard } from "@/app/ui/payment-card";
import { useRef, useState } from "react";
import styles from "./page.css";

enum FormValue {
  CARD_HOLDER_NAME = 'cardHolderName',
  CARD_NUMBER = 'cardNumber',
  MM = 'mm',
  YY = 'yy',
  CVC = 'cvc'
}

export default function Home() {
  const cardholderNameRef = useRef<HTMLInputElement>(null);
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const mmRef = useRef<HTMLInputElement>(null);
  const yyRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const [cardInfo, setCardInfo] = useState({
    cardholderName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    mm: '00',
    yy: '00',
    cvc: '000',
  });

  const handleSubmit = async (data: FormValues) => {
    console.log(`data: ${JSON.stringify(data)}`);
    setCardInfo({
      cardholderName: cardholderNameRef.current?.value.toUpperCase() as string,
      cardNumber: cardNumberRef.current?.value.trim() as string,
      mm: mmRef.current?.value as string,
      yy: yyRef.current?.value as string,
      cvc: cvcRef.current?.value as string
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
      <Form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Form.Input
          className={styles.cardholderName}
          ref={cardholderNameRef}
          label='cardholder name'
          field={FormValue.CARD_HOLDER_NAME}
          options={{
            required: option[FormValue.CARD_HOLDER_NAME].requireMessage,
            pattern: {
              value: option[FormValue.CARD_HOLDER_NAME].pattern,
              message: option[FormValue.CARD_HOLDER_NAME].patternMessage
            }
          }}
          type='text'
          inputMode="text"
          maxLength={34}
          placeholder={option[FormValue.CARD_HOLDER_NAME].placeholder}
        />
        <Form.Input
          className={styles.cardNumber}
          ref={cardNumberRef}
          label='card number'
          field={FormValue.CARD_NUMBER}
          options={{
            required: option[FormValue.CARD_NUMBER].requireMessage,
            pattern: {
              value: option[FormValue.CARD_NUMBER].pattern,
              message: option[FormValue.CARD_NUMBER].patternMessage
            }
          }}
          type='text'
          inputMode="text"
          maxLength={21}
          placeholder={option[FormValue.CARD_NUMBER].placeholder}
        />
        <div className={styles.dateCvcWrapper}>
          <fieldset className={styles.dateFieldset}>
            <legend className={styles.dateLegend}>exp. date (mm/yy)</legend>
            <Form.Input
              className={styles.mm}
              ref={mmRef}
              label='mm'
              field={FormValue.MM}
              options={{
                required: option[FormValue.MM].requireMessage,
                pattern: {
                  value: option[FormValue.MM].pattern,
                  message: option[FormValue.MM].patternMessage
                }
              }}
              type='text'
              inputMode="numeric"
              placeholder={option[FormValue.MM].placeholder}
              labelSrOnly
              maxLength={2}
            />
            <Form.Input
              className={styles.yy}
              ref={yyRef}
              label='yy'
              field={FormValue.YY}
              options={{
                required: option[FormValue.YY].requireMessage,
                pattern: {
                  value: option[FormValue.YY].pattern,
                  message: option[FormValue.YY].patternMessage
                }
              }}
              type='text'
              inputMode="numeric"
              placeholder={option[FormValue.YY].placeholder}
              labelSrOnly
              maxLength={2}
            />
          </fieldset>
          <Form.Input
            className={styles.cvc}
            ref={cvcRef}
            label='cvc'
            field={FormValue.CVC}
            options={{
              required: option[FormValue.CVC].requireMessage,
              pattern: {
                value: option[FormValue.CVC].pattern,
                message: option[FormValue.CVC].patternMessage
              }
            }}
            type='text'
            inputMode="numeric"
            placeholder={option[FormValue.CVC].placeholder}
            maxLength={3}
          />
        </div>
        <Button className={styles.submitBtn} type='submit' textContent="Confirm" />
      </Form>
    </main>
  );
}
