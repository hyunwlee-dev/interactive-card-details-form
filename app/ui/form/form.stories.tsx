import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '.';
import { option } from '@/app/utils/validator';
import styles from '@/app/page.css';
import { Button } from '../button';

const meta: Meta<typeof Form> = {
  title: 'Component/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

export default meta;

const handleSubmit = async (data: FormValues) => {
  console.log(`data: ${JSON.stringify(data)}`);
}

enum FormValue {
  CARD_HOLDER_NAME = 'cardHolderName',
  CARD_NUMBER = 'cardNumber',
  MM = 'mm',
  YY = 'yy',
  CVC = 'cvc'
}

export const CardDetailsForm: StoryObj<typeof Form> = {
  render: ({ ...args }) => (
    <Form {...args} onSubmit={handleSubmit}>
      <Form.Input
        className={styles.cardholderName}
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
        className={styles.cardNumber}
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
      <div className={styles.dateCvcWrapper}>
        <fieldset className={styles.dateFieldset}>
          <legend className={styles.dateLegend}>exp. date (mm/yy)</legend>
          <Form.Input
            className={styles.mm}
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
  ),
};
