import React from 'react';
import './app.css';
import PrimaryButton, { RoundIconButton, LoadingTextButton, SuccessButton, DangerButton } from '../PrimaryButton';
import SecondaryButton, { NormalSecondaryButton, SuccessSecondaryButton, DangerSecondaryButton } from '../SecondaryButton';
import { DownloadButton, RoundAddButton, SearchButton, RectAddButton, SelectButton, StartDateButton, EndDateButton, Dropdown } from '../ActionButton';
import SearchBar, { LongSearchButton } from '../SearchBar';

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
                    <LoadingTextButton />
                </span>
                <span>
                    <SuccessButton />
                </span>
                <span>
                    <DangerButton />
                </span>
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
                    <RoundAddButton />
                </span>
                <span>
                    <DownloadButton />
                </span>
                <span>
                    <RectAddButton />
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
                    </SelectButton>
                </span>
                <span>
                    <Dropdown placeholder="Click Me!">
                        <option value="Selected 1">Select 1</option>
                        <option value="Selected 2">Select 2</option>
                        <option value="Selected 3">Select 3</option>
                    </Dropdown>
                </span>
            </div>

            <div>
                <h3>Search Components</h3>

                <span>
                    <SearchButton />
                </span>
                <span>
                    <LongSearchButton text="Search Button" />
                </span>
                <span style={{width: 500}}>
                    <SearchBar placeholder="Search Bar" />
                </span>
            </div>
        </section>
    )
}