import React from 'react';
import { TextIconButton } from '../PrimaryButton';
import './selector.css';
import Spinner from '../Spinner';
export { SelectorBuilder } from './SelectorBuilder';

/**
 * @name Selector
 * @extends `TextIconButton`
 * @description Renders an icon and a text into an `PrimaryButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {function} props.onClick onclick event function of the button.
 * @param {function} props.onClickIcon onclick event function of the icon.
 * @return {JSX.Element} A `TextIconButton` with a text and clickable icon.
 */
export function Selector(props) {
    const addClass = `tag ${props.addClass || ''}`;

    return (
        <TextIconButton {...props} addClass={addClass} icon={props.icon} text={props.text} />
    )
}

export default function DarkSelector(props) {
    const addClass = `dark-selector ${props.selected ? 'selected' : ''} ${props.addClass || ''}`;

    return (
        <Selector icon="close" {...props} addClass={addClass} text={props.text} />
    )
}

export function NormalSelector(props) {
    const addClass = `normal-selector ${props.selected ? 'selected' : ''} ${props.addClass || ''}`;

    return (
        <Selector icon="close" {...props} addClass={addClass} text={props.text} />
    )
}

export function SuccessSelector(props) {
    const addClass = `success-selector ${props.addClass || ''}`;

    return (
        <Selector icon="check" {...props} addClass={addClass} text={props.text} />
    )
}

export function DangerSelector(props) {
    const addClass = `danger-selector ${props.addClass || ''}`;

    return (
        <Selector icon="close" {...props} addClass={addClass} text={props.text} />
    )
}

/**
 * @name ActiveSelector
 * @extends `Selector`
 * @description Wraps a `Selector` and renders a `Spinner` when the `Selector` is clicked.
 * @param {boolean} props.isActive A boolean value to render the `Spinner` component.
 * @return {JSX.Element} A wrapped Selector Component.
 */
export function ActiveSelector(props) {
    const customIcon = props.isActive ? (
        <Spinner colors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} size={14} />
    ) : null;

    const newProps = Object.assign({}, props, { customIcon });

    const { component: Component } = props;

    return (
        <Component {...newProps} />
    );
}