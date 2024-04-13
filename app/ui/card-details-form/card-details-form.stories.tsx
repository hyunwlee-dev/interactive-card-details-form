import type { Meta, StoryObj } from '@storybook/react';
import { CardDetailsForm } from '.';

const meta: Meta<typeof CardDetailsForm> = {
  title: 'Component/Form',
  component: CardDetailsForm,
  tags: ['autodocs'],
  argTypes: {
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

export const Form: StoryObj<typeof CardDetailsForm> = {
  render: ({ ...args }) => (
    <CardDetailsForm handleSubmit={handleSubmit} />
  ),
};
