import React from 'react';
import './app.css';
import PrimaryButton, { CircleIconButton, TextIconButton, SuccessButton, DangerButton } from '../PrimaryButton';

export default function App() {
  return (
    <section className="app">
      <div>
        <PrimaryButton text="Dark BG" />

        <CircleIconButton />

        <TextIconButton icon="donut_large" text="Loading" />

        <SuccessButton onClick={() => console.log('SUCCESS')} />

        <DangerButton onClick={() => console.log('DANGER')} />
      </div>
    </section>
  )
}