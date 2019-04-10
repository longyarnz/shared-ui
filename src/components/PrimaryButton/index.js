/**
 * @fileoverview A collection of React components that render buttons with a default CSS ctyle.
 * @exports JSX.Element
 */
import React from 'react';
import './primary-button.css';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';

/**
 * @name PrimaryButton
 * @description Renders a HTML Button element
 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, children?: JSX.Element, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <PrimaryButton
        addclass="override-default-style" 
        text="Without Children"
        width={200} 
        height={40} 
        onClick={e => console.log(e.target)}
    />

    <PrimaryButton
        addclass="override-default-style" 
        width={200} 
        height={40} 
        onClick={e => console.log(e.target)}
    >
        With Children
    </PrimaryButton>
    ```
 */
export default function PrimaryButton(props) {
    const className = `${props.className || 'primary-button'} ${props.addclass || ''}`;
    const style = {
        width: props.width,
        height: props.height,
        ...props.style
    }

    return (
        <button
            {...props}
            style={style}
            className={className}
        >
            {props.children || props.text}
        </button>
    )
}

/**
 * @name IconButton
 * @extends PrimaryButton
 * @description Inserts an Icon from the Material-icon library into a `PrimaryButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, icon?: string, children?: JSX.Element, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `icon`: Name of material-icon;
 * * `iconStyle`: Inline styles for icon;
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `onClick`: onclick event function of the button.
 * ### Example
 ```js
    <IconButton
        addclass="override-default-style" 
        width={200} 
        height={40} 
        icon="add"
        onClick={e => console.log(e.target)}
    />

    <IconButton
        addclass="override-default-style" 
        width={200} 
        height={40} 
        onClick={e => console.log(e.target)}
    >
        <img src="https://fireflies.ai/img/header.png" alt="logo" />
    </IconButton
 ```
 */
export function IconButton(props) {
    const className = `${props.className || 'icon-button'} ${props.addclass || ''}`;

    return (
        <PrimaryButton className={className} {...props}>
            <ShouldRender if={props.icon}>
                <i style={props.iconStyle}>{props.icon}</i>
            </ShouldRender>

            <ShouldRender if={!props.icon && props.children}>
                {props.children}
            </ShouldRender>
        </PrimaryButton>
    )
}

/**
 * @name RoundIconButton
 * @extends IconButton
 * @description Renders a round `IconButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, icon?: string, iconStyle?: {}, children?: JSX.Element, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `icon`: Name of material-icon;
 * * `iconStyle`: Inline CSS styles for icon;
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <RoundIconButton 
        width={200} 
        height={40} 
        icon="add" 
        onClick={e => console.log(e.target)}
    />
    ```
 */
export function RoundIconButton(props) {
    const icon = props.icon;
    const className = `${props.className || 'circle-icon-button'} ${props.addclass || ''}`;

    return (
        <IconButton {...props} className={className} icon={icon} />
    )
}

/**
 * @name RoundSpinnerButton
 * @extends IconButton
 * @description Renders a `Spinner` component into an `IconButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, spinnerSize: number, spinnerColor?: string, spinnerColors?: [string], spinnerDuration?: string, spinnerDepth?: number, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `spinnerSize`: The size of the width and height of the `Spinner`.
 * * `spinnerColor`: A single color for the `Spinner`.
 * * `spinnerColors`: An array of color hex strings for the `Spinner`. It overides `spinnerColor`.
 * * `spinnerDuration`: The duration of a complete revolution of the `Spinner` in seconds.
 * * `spinnerDepth`: The thickness of the `Spinner`.
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <RoundSpinnerButton 
        addclass="override-default-style"
        spinnerColors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} 
        spinnerSize={25} 
        onClick={e => console.log(e.target)}
    />
    ```
*/
export function RoundSpinnerButton(props) {
    const className = `${props.className || 'circle-icon-button'} ${props.addclass || ''}`;
    return (
        <IconButton {...props} className={className}>
            <div>
                <Spinner
                    size={props.spinnerSize}
                    color={props.spinnerColor}
                    colors={props.spinnerColors}
                    duration={props.spinnerDuration}
                    thickness={props.spinnerDepth}
                />
            </div>
        </IconButton>
    )
}

/**
 * @name TextIconButton
 * @extends PrimaryButton
 * @description Renders an icon and a text into an `PrimaryButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, text: string, textStyle: {}, icon: string, iconStyle: {}, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `text`: Text in the button.
 * * `textStyle`: Inline CSS style for button text.
 * * `icon`: Name of material-icon.
 * * `iconStyle`: Inline CSS style for icon.
 * * `onClick`: onclick event function of the button.
 * ### Example
 ```js
    <TextIconButton addclass="rect-add-button" icon="add" text="Add" {...props} />
 ```
 */
export function TextIconButton(props) {
    const className = props.className || 'text-icon-button';
    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton {...props} className={className} style={style}>
            <i style={props.iconStyle}>{props.icon}</i>
            <span style={props.textStyle}>{props.text}</span>
        </PrimaryButton>
    )
}

/**
 * @name LoadingTextButton
 * @extends PrimaryButton
 * @description Renders a `Spinner` component and a text node into a `PrimaryButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, spinnerSize: number, spinnerColor?: string, spinnerColors?: [string], spinnerDuration?: string, spinnerDepth?: number, text: string, textStyle: {}, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `spinnerSize`: The size of the width and height of the `Spinner`.
 * * `spinnerColor`: A single color for the `Spinner`.
 * * `spinnerColors`: An array of color hex strings for the `Spinner`. It overides `spinnerColor`.
 * * `spinnerDuration`: The duration of a complete revolution of the `Spinner` in seconds.
 * * `spinnerDepth`: The thickness of the `Spinner`.
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `text`: Text in the button.
 * * `textStyle`: Inline CSS style for button text.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <LoadingTextButton spinnerSize={12} />
    ```
*/
export function LoadingTextButton(props) {
    const text = props.text || 'Loading';

    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton {...props} className="loading-text-button" style={style}>
            <Spinner
                size={props.spinnerSize}
                color={props.spinnerColor}
                colors={props.spinnerColors}
                duration={props.spinnerDuration}
                thickness={props.spinnerDepth}
            />
            <span style={props.textStyle}>{text}</span>
        </PrimaryButton>
    )
}

/**
 * @name SuccessButton
 * @extends TextIconButton
 * @description Renders a _check_ icon and a _success_ text into a `TextIconButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, textStyle?: {}, icon?: string, iconStyle?: {}, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `text`: Text in the button.
 * * `textStyle`: Inline CSS style for button text.
 * * `icon`: Name of material-icon.
 * * `iconStyle`: Inline CSS style for icon.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <SuccessButton />
    ```
 */
export function SuccessButton(props) {
    const text = props.text || 'Success';
    const icon = props.icon || 'check';

    return (
        <TextIconButton className="success-button" icon={icon} text={text} {...props} />
    )
}

/**
 * @name DangerButton
 * @extends TextIconButton
 * @description Renders a _close_ icon and a _Danger_ text into a `TextIconButton`.
 * @param {{className: string, addclass?: string, width: number, height: number, text?: string, textStyle?: {}, icon: string, iconStyle: {}, onClick?: function}} props
 * ### Props
 * Props includes all HTML button props, e.g:
 * * `className`: The default class of the button.
 * * `addclass`: Add extra class styles to overwrite default class.
 * * `width`: Width of the button.
 * * `height`: Height of the button.
 * * `text`: Text in the button.
 * * `textStyle`: Inline CSS style for button text.
 * * `icon`: Name of material-icon.
 * * `iconStyle`: Inline CSS style for icon.
 * * `onClick`: onclick event function of the button.
 * ### Example
    ```js
    <SuccessButton />
    ```
 */
export function DangerButton(props) {
    const text = props.text || 'Danger';
    const icon = props.icon || 'close';

    return (
        <TextIconButton className="danger-button" icon={icon} text={text} {...props} />
    )
}