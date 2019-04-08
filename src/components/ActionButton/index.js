import React from 'react';
import { TextIconButton } from '../PrimaryButton';
import { SuccessSecondaryButton, NormalSecondaryButton } from '../SecondaryButton';
import './action-button.css';

export function DownloadButton(props) {
    return (
        <SuccessSecondaryButton addclass="download-button" {...props}>
            <i>save_alt</i>
        </SuccessSecondaryButton>
    )
}

export function RoundAddButton(props) {
    return (
        <NormalSecondaryButton addclass="round-add-button" {...props}>
            <i>add</i>
        </NormalSecondaryButton>
    )
}

export function RectAddButton(props) {
    return (
        <TextIconButton addclass="rect-add-button" icon="add" text="Add" {...props} />
    )
}

export function SelectButton(props) {
    return (
        <TextIconButton addclass="select-button" icon="arrow_drop_down" text={props.text} {...props} />
    )
}

export function SearchButton(props) {
    return (
        <NormalSecondaryButton addclass="search-button" {...props}>
            <i>search</i>
        </NormalSecondaryButton>
    )
}

export function LongSearchButton(props) {
    return (
        <TextIconButton addclass="long-search-button" icon="search" text={props.text} {...props} />
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
