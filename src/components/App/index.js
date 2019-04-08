import React from 'react';
import './app.css';
import PrimaryButton, { RoundIconButton, TextIconButton, SuccessButton, DangerButton } from '../PrimaryButton';
import SecondaryButton, { NormalSecondaryButton, SuccessSecondaryButton, DangerSecondaryButton } from '../SecondaryButton';
import { DownloadButton, RoundAddButton, SearchButton, RectAddButton, LongSearchButton, SelectButton, StartDateButton, EndDateButton, Dropdown } from '../ActionButton';

export default function App() {
    return (
        <section className="app">
            <div>
                <h3>Primary Buttons</h3>

                <span>
                    <PrimaryButton text="Dark BG" />
                </span>
                <span>
                    <RoundIconButton />
                </span>
                <span>
                    <TextIconButton icon="donut_large" text="Loading" />
                </span>
                <span>
                    <SuccessButton onClick={() => console.log('SUCCESS')} />
                </span>
                <span>
                    <DangerButton onClick={() => console.log('DANGER')} /></span>
            </div>

            <div>
                <h3>Secondary Buttons</h3>

                <span>
                    <SecondaryButton text="Dark BG" />
                </span>
                <span>
                    <NormalSecondaryButton text="Normal" />
                </span>
                <span>
                    <SuccessSecondaryButton text="Success" />
                </span>
                <span>
                    <DangerSecondaryButton text="Danger" />
                </span>
            </div>

            <div>
                <h3>Action Buttons</h3>

                <span>
                    <DownloadButton />
                </span>
                <span>
                    <RectAddButton />
                </span>
                <span>
                    <RoundAddButton />
                </span>
                <span>
                    <SearchButton />
                </span>
                <span>
                    <StartDateButton />
                </span>
                <span>
                    <EndDateButton />
                </span>
                <span>
                    <SelectButton placeholder="Click Me!">
                        <option value="Selected 1">Select 1</option>
                        <option value="Selected 2">Select 2</option>
                        <option value="Selected 3">Select 3</option>
                        <option value="Selected 4">Select 4</option>
                        <option value="Selected 5">Select 5</option>
                    </SelectButton>
                </span>
                <span>
                    <Dropdown placeholder="Click Me To See Dropdown!">
                        <option value="Selected 1">Select 1</option>
                        <option value="Selected 2">Select 2</option>
                        <option value="Selected 3">Select 3</option>
                        <option value="Selected 4">Select 4</option>
                        <option value="Selected 5">Select 5</option>
                    </Dropdown>
                </span>
                <span>
                    <LongSearchButton text="Search Bar" />
                </span>
            </div>
        </section>
    )
}