import React, { useState, useEffect, useRef } from 'react';
import './app.css';
import PrimaryButton, { LoadingTextButton, SuccessButton, DangerButton, RoundSpinnerButton } from '../PrimaryButton';
import Spinner from '../Spinner';
import SecondaryButton, { NormalSecondaryButton, SuccessSecondaryButton, DangerSecondaryButton } from '../SecondaryButton';
import Tile from '../Tile';
import { DownloadButton, RoundAddButton, SearchButton, RectAddButton } from '../ActionButton';
import { SelectButton, Dropdown } from '../Dropdown';
import SearchBar, { LongSearchButton } from '../SearchBar';
import Selector, { DarkSelector, NormalSelector, SuccessSelector, DangerSelector, SelectorBuilder } from '../Selector';
import DatePicker from '../DatePicker';
import ListBuilder from '../ListBuilder';
import ToggleButton from '../ToggleButton';
import { IntegrationContainer } from '../Container';

export default function App() {
    const cache = useRef(null);
    const [isDeleting, setIsDeleting] = useState([]);
    const [searchEnd, setSearchEnd] = useState(false);
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
                <h3>Tiles</h3>

                <span>
                    <Tile color="#6a7499" text="Dark BG" />
                </span>
                <span>
                    <Tile text="Normal" />
                </span>
                <span>
                    <Tile color="#26BC8E" text="Success" />
                </span>
                <span>
                    <Tile color="#F76378" text="Danger" />
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
            </div>

            <div>
                <h3>Dropdown Components</h3>

                <span style={{ width: 200 }}>
                    <SelectButton placeholder="Click Me!" onSelect={e => console.log(e)} defaultValue="1">
                        <option value="1">Asuma</option>
                        <span value="2">
                            <span style={{color: 'red'}}>Baki</span>
                        </span>
                        <option value="3">Choji</option>
                        <option value="4">Danzou</option>
                    </SelectButton>
                </span>
                <span style={{ width: 200 }}>
                    <Dropdown placeholder="Click Me!" onSelect={e => console.log(e)} defaultValue="1">
                        <span value="1">
                            <span style={{color: 'red'}}>Aubergine</span>
                        </span>
                        <option value="2">Broccoli</option>
                        <option value="3">Cabbage</option>
                        <option value="4">Dewberry</option>
                    </Dropdown>
                </span>
                <span>
                    <SelectButton width={150} addClass="prepend-icon" placeholder="Filter" onSelect={e => console.log(e)}>
                        <option value="1">Select 1</option>
                        <option value="2">Select 2</option>
                        <option value="3">Select 3</option>
                        <option value="4">Select 4</option>
                    </SelectButton>
                </span>
            </div>

            <div>
                <h3>Search Components</h3>

                <span style={{ width: 200 }}>
                    <SearchButton />
                </span>
                <span style={{ width: 150 }}>
                    <LongSearchButton text="Search Button" />
                </span>
                <span style={{ width: 500 }}>
                    <SearchBar
                        placeholder="Search Bar"
                        done={searchEnd}
                        onSearch={searchText => {
                            setSearchEnd(false);
                            console.log(searchText);
                            setTimeout(() => setSearchEnd(true), 10000);
                        }}
                    />
                </span>
            </div>

            <div>
                <h3>Date Picker</h3>

                <span>
                    <DatePicker onSelect={(e, date) => console.log(e, date)} />
                </span>
            </div>

            <div>
                <h3>Selector Components</h3>

                <span style={{ width: 100 }}>
                    <DarkSelector text="Disabled" disabled={true} />
                </span>

                <span style={{ width: 100 }}>
                    <Selector icon="close" color="#000" text="Dark" />
                </span>

                <span style={{ width: 100 }}>
                    <DarkSelector text="Selected" selected={true} />
                </span>

                <span style={{ width: 100 }}>
                    <NormalSelector text="Normal" onClickIcon={e => console.log(e)} />
                </span>

                <span style={{ width: 100 }}>
                    <SuccessSelector text="Success" />
                </span>

                <span style={{ width: 100 }}>
                    <DangerSelector text="Danger" />
                </span>
            </div>

            <div>
                <h3>Selector Builder</h3>

                <SelectorBuilder
                    selectors={selectors}
                    isDeleting={isDeleting}
                    containerStyle={{ width: 100 }}
                    addSelector={(text, resolve) => {
                        setTimeout(() => {
                            resolve(setSelectors(cache.current.concat([text])));
                        }, 3000);
                    }}
                    removeSelector={text => {
                        setIsDeleting(isDeleting.concat([text]));
                        setTimeout(() => {
                            setSelectors(cache.current.filter(i => i !== text))
                        }, 3000);
                    }}
                />
            </div>

            <div>
                <h3>List Builder</h3>

                <ListBuilder
                    headers={['Name', 'Alerts', 'Count', 'Call']}
                    rows={[
                        ['Pep Guardiola', 'Invoice', 87, 5],
                        [{ text: 'Zenedine Zidane', src: 'assets/img/logo.png' }, 'Pricing', 7, 15],
                        [{ text: 'Alex Fergusson', src: 'assets/img/logo.png' }, 'Invites', 18, 50],
                        [{ text: 'Jose Mourinho', src: 'assets/img/logo.png' }, 'Upgrade', 0, 1],
                    ]}
                    onClick={rowData => console.log(rowData)}
                    defaultSelectedRow={2}
                />
            </div>

            <div>
                <h3>Toggle Button</h3>

                <span>
                    <ToggleButton onToggle={e => console.log(e)} disabled={true} />
                </span>

                <span>
                    <ToggleButton onToggle={e => console.log(e)} />
                </span>

                <span>
                    <ToggleButton offColor="#ccc" onColor="#e82a73" defaultValue={true} height={80} width={200} onToggle={e => console.log(e)} />
                </span>
            </div>

            <div>
                <h3>Integration Containers</h3>

                <span>
                    <IntegrationContainer
                        name="Zapier"
                        src="/assets/img/zapier.png"
                        href="https://fireflies.ai"
                        integrated={true}
                    />
                </span>

                <span>
                    <IntegrationContainer
                        name="Hubpot"
                        new={true}
                        src="/assets/img/hubspot.png"
                        href="https://fireflies.ai"
                    />
                </span>

                <span>
                    <IntegrationContainer
                        name="Salesforce"
                        src="/assets/img/salesforce.png"
                        href="https://fireflies.ai"
                    />
                </span>

                <span>
                    <IntegrationContainer
                        name="Slack"
                        src="/assets/img/slack.png"
                        href="https://fireflies.ai"
                    />
                </span>

                <span>
                    <IntegrationContainer
                        name="Gmail"
                        src="/assets/img/gmail.png"
                        href="https://fireflies.ai"
                        integrated={true}
                    />
                </span>
            </div>

        </section>
    )
}