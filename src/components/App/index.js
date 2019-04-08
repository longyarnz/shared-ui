import React from 'react';
import './app.css';
import PrimaryButton, { RoundIconButton, TextIconButton, SuccessButton, DangerButton } from '../PrimaryButton';
import SecondaryButton, { NormalSecondaryButton, SuccessSecondaryButton, DangerSecondaryButton } from '../SecondaryButton';
import { DownloadButton, RoundAddButton, SearchButton, RectAddButton, LongSearchButton, SelectButton, StartDateButton, EndDateButton } from '../ActionButton';

export default function App() {
    return (
        <section className="app">
            <div>
                <h3>Primary Buttons</h3>

                <PrimaryButton text="Dark BG" />

                <RoundIconButton />

                <TextIconButton icon="donut_large" text="Loading" />

                <SuccessButton onClick={() => console.log('SUCCESS')} />

                <DangerButton onClick={() => console.log('DANGER')} />
            </div>

            <div>
                <h3>Secondary Buttons</h3>

                <SecondaryButton text="Dark BG" />

                <NormalSecondaryButton text="Normal" />

                <SuccessSecondaryButton text="Success" />

                <DangerSecondaryButton text="Danger" />
            </div>

            <div>
                <h3>Action Buttons</h3>

                <DownloadButton />

                <RectAddButton />

                <RoundAddButton />

                <SearchButton />

                <StartDateButton />

                <EndDateButton />

                <SelectButton text="Select Button" />

                <LongSearchButton text="Search Bar" />
            </div>
        </section>
    )
}