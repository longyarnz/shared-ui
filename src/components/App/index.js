import React, { useState, useEffect, useRef } from 'react';
import './app.css';
import PrimaryButton, { LoadingTextButton, SuccessButton, DangerButton, RoundSpinnerButton } from '../PrimaryButton';
import Spinner from '../Spinner';
import SecondaryButton, { NormalSecondaryButton, SuccessSecondaryButton, DangerSecondaryButton } from '../SecondaryButton';
import { DownloadButton, RoundAddButton, SearchButton, RectAddButton, SelectButton, StartDateButton, EndDateButton, Dropdown } from '../ActionButton';
import SearchBar, { LongSearchButton } from '../SearchBar';
import DarkSelector, { NormalSelector, SuccessSelector, DangerSelector } from '../Selector';
import SelectorBuilder from '../Selector/SelectorBuilder';

export default function App() {
    const cache = useRef(null);
    const [isDeleting, setIsDeleting] = useState([]);
    const [selectors, setSelectors] = useState(['Antelope', 'Buffalo', 'Cheetah', 'Dragon', 'Eagle', 'Flamingo']);

    useEffect(() => {
        cache.current = selectors;

        return () => cache.current = selectors;
    }, [selectors])

    return (
        <section className="app">
            <div>
                <h3>Primary Buttons</h3>

                <span>
                    <RoundSpinnerButton spinnerColors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} spinnerSize={25} />
                </span>
                <span>
                    <Spinner colors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} size={40} />
                </span>
                <span>
                    <PrimaryButton text="Dark BG" />
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
                <span style={{ width: 500 }}>
                    <SearchBar placeholder="Search Bar" />
                </span>
            </div>

            <div>
                <h3>Selector Components</h3>

                <span>
                    <DarkSelector text="Disabled" disabled={true} />
                </span>

                <span>
                    <DarkSelector text="Dark" />
                </span>

                <span>
                    <DarkSelector text="Selected" selected={true} />
                </span>

                <span>
                    <NormalSelector text="Normal" />
                </span>

                <span>
                    <SuccessSelector text="Success" />
                </span>

                <span>
                    <DangerSelector text="Danger" />
                </span>
            </div>

            <div>
                <h3>Selector Builder</h3>

                <SelectorBuilder
                    selectors={selectors}
                    isDeleting={isDeleting}
                    addSelector={text => {
                        return new Promise(resolve => setTimeout(() => {
                            resolve(setSelectors(cache.current.concat([text])));
                        }, 3000));
                    }}
                    removeSelector={text => {
                        setIsDeleting(isDeleting.concat(text));
                        setTimeout(() => {
                            setSelectors(cache.current.filter(i => i !== text))
                        }, 3000);
                    }}
                />
            </div>
        </section>
    )
}