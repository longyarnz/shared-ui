/**
 * @fileoverview A collection of React components that render buttons with a default CSS ctyle.
 * @exports JSX.Element
 */
import React from 'react';
import { TextIconButton, RoundIconButton } from '../PrimaryButton';
import { SuccessSecondaryButton } from '../SecondaryButton';
import styles from './action-button.module.css';

/**
 * @name DownloadButton
 * @extends `SuccessSecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SuccessSecondaryButton` with a download icon.
 */
export function DownloadButton(props) {
    const addClass = `${styles['download-button']} ${props.addClass || ''}`;

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
 * @return {JSX.Element} A `RoundIconButton` with an _add_ icon.
 */
export function RoundAddButton(props) {
    const addClass = `${styles['round-add-button']} ${props.addClass || ''}`;

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
 * @return {JSX.Element} A `TextIconButton` with an _add_ icon and _Add_ text.
 */
export function RectAddButton(props) {
    const addClass = `${styles['rect-add-button']} ${props.addClass || ''}`;

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
 * @return {JSX.Element} A `RoundIconButton` with a _search_ icon.
 */
export function SearchButton(props) {
    const addClass = `${styles['search-button']} ${props.addClass || ''}`;

    return (
        <RoundIconButton addClass={addClass} icon="search" {...props} />
    )
}