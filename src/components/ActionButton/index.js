/**
 * @fileoverview A collection of React components that render buttons with a default CSS ctyle.
 * @exports JSX.Element
 */
import React from 'react';
import { TextIconButton, RoundIconButton } from '../PrimaryButton';
import { SuccessSecondaryButton } from '../SecondaryButton';
import './action-button.css';
export { SelectButton, Dropdown } from './SelectButton';

/**
 * @name DownloadButton
 * @extends `SuccessSecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @example
 * <DownloadButton addClass="custom-class" text="Without Children" width={200} height={40} onClick={e => console.log(e)} />
 */
export function DownloadButton(props) {
    const addClass = `download-button ${props.addClass || ''}`;

    return (
        <SuccessSecondaryButton addClass={addClass} {...props}>
            <i>save_alt</i>
        </SuccessSecondaryButton>
    )
}

/**
 * @name RoundAddButton
 * @extends `RoundIconButton`
 * @description Renders a round `IconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @example
 * <RoundIconButton addClass="custom-class" width={200} height={40} icon="add" onClick={e => console.log(e)} />
 */
export function RoundAddButton(props) {
    const addClass = `round-add-button ${props.addClass || ''}`;

    return (
        <RoundIconButton addClass={addClass} icon="add" {...props} />
    )
}

/**
 * @name RectAddButton
 * @extends `TextIconButton`
 * @description Renders an icon and a text into an `PrimaryButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {function} props.onClick onclick event function of the button.
 * @example
 * <TextIconButton addClass="rect-add-button" icon="add" text="Add" {...props} />
 */
export function RectAddButton(props) {
    const addClass = `rect-add-button ${props.addClass || ''}`;

    return (
        <TextIconButton addClass={addClass} icon="add" text="Add" {...props} />
    )
}

/**
 * @name SearchButton
 * @extends `RoundIconButton`
 * @description Renders a round `IconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @example
 * <RoundIconButton addClass="custom-class" width={200} height={40} icon="add" onClick={e => console.log(e)} />
 */
export function SearchButton(props) {
    const addClass = `search-button ${props.addClass || ''}`;

    return (
        <RoundIconButton addClass={addClass} icon="search" {...props} />
    )
}

export function StartDateButton(props) {
    const { day = 'DD', month = 'MM', year = 'YYYY' } = props;
    const text = `${day}/${month}/${year}`;
    return (
        <TextIconButton addClass="date-button" icon="calendar_today" text={text} {...props} />
    )
}

export function EndDateButton(props) {
    const { day = 'DD', month = 'MM', year = 'YYYY' } = props;
    const text = `${day}/${month}/${year}`;
    return (
        <TextIconButton addClass="date-button dark" icon="calendar_today" text={text} {...props} />
    )
}
