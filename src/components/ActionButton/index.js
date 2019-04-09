import React from 'react';
import { TextIconButton, RoundIconButton } from '../PrimaryButton';
import { SuccessSecondaryButton } from '../SecondaryButton';
import './action-button.css';
export { SelectButton, Dropdown } from './SelectButton';

export function DownloadButton(props) {
    return (
        <SuccessSecondaryButton addclass="download-button" {...props}>
            <i>save_alt</i>
        </SuccessSecondaryButton>
    )
}

export function RoundAddButton(props) {
    return (
        <RoundIconButton addclass="round-add-button" icon="add" {...props} />
    )
}

export function RectAddButton(props) {
    return (
        <TextIconButton addclass="rect-add-button" icon="add" text="Add" {...props} />
    )
}


export function SearchButton(props) {
    return (
        <RoundIconButton addclass="search-button" icon="search" {...props} />
    )
}

export function StartDateButton(props) {
    const { day = 'DD', month = 'MM', year = 'YYYY' } = props;
    const text = `${day}/${month}/${year}`;
    return (
        <TextIconButton addclass="date-button" icon="calendar_today" text={text} {...props} />
    )
}

export function EndDateButton(props) {
    const { day = 'DD', month = 'MM', year = 'YYYY' } = props;
    const text = `${day}/${month}/${year}`;
    return (
        <TextIconButton addclass="date-button dark" icon="calendar_today" text={text} {...props} />
    )
}
