"use client";
import styles from "./page.css";
import { Form } from "@/app/ui/form";
import { option } from "@/app/utils/validator";
import { Button } from "./ui/button";

enum FormValue {
  CARD_HOLDER_NAME = 'cardHolderName',
  CARD_NUMBER = 'cardNumber',
  MM = 'mm',
  YY = 'yy',
  CVC = 'cvc'
}

export default function Home() {
  const handleSubmit = async (data: FormValues) => {
    console.log(`data: ${JSON.stringify(data)}`);
  }

  return (
    <main>
      hello world! from hyunwl`12`12ee
      <div className={styles.breakpointsTest}>
        breakpoints test
      </div>
      <Form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Form.Input
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
          placeholder={option[FormValue.CARD_HOLDER_NAME].placeholder}
        />
        <Form.Input
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
          placeholder={option[FormValue.CARD_NUMBER].placeholder}
        />
        <fieldset>
          <legend>exp. date (mm/yy)</legend>
          <Form.Input
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
          />
          <Form.Input
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
          />
        </fieldset>
        <Form.Input
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
        />
        <Button type='submit' textContent="Confirm" />
      </Form>
    </main >
  );
}
