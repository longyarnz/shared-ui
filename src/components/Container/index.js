import React from 'react';
import styles from './container.module.css';
import { TextIconButton, DangerButton } from '../PrimaryButton';
import ShouldRender from '../../utils/ShouldRender';

export default function Container(props) {
    const { padding, color, width = 'auto', height = 'auto' } = props;
    const style = {
        padding, width, height, border: `1px solid ${color}`
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

/**
 * @name IntegrationContainer
 * @extends `TextIconButton`
 * @description Renders an image, text, an anchor element and a `TextIconButton`.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.size Width and Heigth values of the button.
 * @param {object} props.style Style Inline CSS styles for the figure.
 * @param {string} props.name Name of the integration.
 * @param {string} props.src Image link for the integration logo.
 * @param {string} props.href Href link.
 * @param {boolean} props.integrated Boolean value to determine if the integration is completed.
 * @param {boolean} props.new Boolean value to determine if the integration is new.
 * @returns {JSX.Element} A figure element with a `TextIconButton` and text children.
 */
export function IntegrationContainer(props) {
    const className = `${styles['integration-container']} ${props.addClass || ''}`.trim();

    const actionText = props.integrated ? 'Remove' : 'Connect';

    const spanText = props.integrated ? 'Disconnect from' : 'Connect to';

    const style = {
        width: props.size || 250,
        height: props.size || 250,
        ...props.style
    }

    return (
        <figure className={className} style={style}>
            <ShouldRender if={props.integrated}>
                <i className={`${styles['tag']} ${styles['tag-1']}`}>check</i>
            </ShouldRender>

            <ShouldRender if={props.new}>
                <i className={`${styles['tag']} ${styles['tag-2']}`}>N</i>
            </ShouldRender>

            <div>
                <img src={props.src} alt={`${props.name} integration`} />
            </div>

            <figcaption>
                <span>{spanText} {props.name}</span>

                <ShouldRender if={props.integrated}>
                    <DangerButton addClass={styles['remove']} text={actionText} onClick={props.onClick} />
                </ShouldRender>

                <ShouldRender if={!props.integrated}>
                    <TextIconButton text={actionText} icon="chevron_right" onClick={props.onClick} />
                </ShouldRender>
            </figcaption>
        </figure>
    )
}