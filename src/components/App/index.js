import React from 'react';
import './app.css';
import PrimaryButton, { LoadingTextButton, SuccessButton, DangerButton, RoundSpinnerButton } from '@bit/lekanmedia.fireflies.primary.button';
import Spinner from '@bit/lekanmedia.fireflies.internal.spinner';
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
                    <RoundSpinnerButton spinnerColors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} spinnerSize={25} />
                </span>
                <span>
                    <LoadingTextButton spinnerSize={12} />
                </span>
                <span>
                    <SuccessButton />
                </span>
                <span>
                    <DangerButton />
                </span>
                <span>
                    <Spinner colors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} size={40} />
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
                        <option value="Selected 4">Select 4</option>
                    </SelectButton>
                </span>
                <span>
                    <Dropdown placeholder="Click Me!">
                        <option value="Selected 1">Select 1</option>
                        <option value="Selected 2">Select 2</option>
                        <option value="Selected 3">Select 3</option>
                        <option value="Selected 4">Select 4</option>
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