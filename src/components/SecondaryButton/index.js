/**
 * @fileoverview A collection of React components that render buttons with a default CSS ctyle.
 * @exports JSX.Element
 */
import React from 'react';
import PrimaryButton from '../PrimaryButton';
import styles from './secondary-button.module.css';

/**
 * @name SecondaryButton
 * @extends `PrimaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `PrimaryButton` with secondary-button style.
 */
export default function SecondaryButton(props) {
    return (
        <PrimaryButton className={styles['secondary-button']} {...props} />
    )
}

/**
 * @name NormalSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with normal style.
 */
export function NormalSecondaryButton(props) {
    return (
        <SecondaryButton className={styles['normal-secondary-button']} text={props.text} {...props} />
    )
}

/**
 * @name SuccessSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with success style.
 */
export function SuccessSecondaryButton(props) {
    return (
        <SecondaryButton className={styles['success-secondary-button']} text={props.text} {...props} />
    )
}

/**
 * @name DangerSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with danger style.
 */
export function DangerSecondaryButton(props) {
    return (
        <SecondaryButton className={styles['danger-secondary-button']} text={props.text} {...props} />
    )
}