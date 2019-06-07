/**
 * @fileoverview A collection of React components that render buttons with a default CSS ctyle.
 * @exports JSX.Element
 */
import React from 'react';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';
import styles from './primary-button.module.css';

/**
 * @name PrimaryButton
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.ref Ref object for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A HTML `button`
 */
function Button(props) {
    const unsupportedProps = [
        'addClass', 'spinnerColor', 'spinnerColors', 'onClickIcon', 'customClick',
        'customIcon', 'isActive', 'childHeight','component', 'preventDefaultClick', 'buttonRef',
        'spinnerDepth', 'spinnerDuration', 'spinnerSize', 'listClass', 'iconStyle', 'forwardRef'
    ];

    const className = `${styles['shared-ui-button']} ${props.className || styles['primary-button']} ${props.addClass || ''}`.trim();
    const style = {
        width: props.width,
        height: props.height,
        ...props.style
    }

    const newProps = { ...props };

    for (const key in newProps) {
        if (unsupportedProps.includes(key)) {
            delete newProps[key];
        }
    }

    return (
        <button
            {...newProps}
            style={style}
            className={className}
            ref={props.forwardRef}
        >
            {props.children || props.text}
        </button>
    )
}

const PrimaryButton = React.forwardRef(
    function PrimaryButton(props, ref) {
        return <Button {...props} forwardRef={ref} />
    }
);

/**
 * @name IconButton
 * @extends `PrimaryButton`
 * @description Inserts an Icon from the Material Icon library into a `PrimaryButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `PrimaryButton` component with an icon as a child.
 */
export function IconButton(props) {
    const className = props.className || styles['icon-button'];

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
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A round `IconButton` component.
 */
export function RoundIconButton(props) {
    const icon = props.icon;
    const className = props.className || styles['circle-icon-button'];

    return (
        <IconButton {...props} className={className} icon={icon} />
    )
}

/**
 * @name RoundSpinnerButton
 * @extends `IconButton`
 * @description Renders a `Spinner` component into an `IconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {number} props.spinnerSize The size of the width and height of the `Spinner`.
 * @param {string} props.spinnerColor A single color for the `Spinner`.
 * @param {[string]} props.spinnerColors An array of color hex strings for the `Spinner`. It overides `spinnerColor`.
 * @param {string} props.spinnerDuration The duration of a complete revolution of the `Spinner` in seconds.
 * @param {number} props.spinnerDepth The thickness of the `Spinner` border.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A round `IconButton` with a child `Spinner` component.
*/
export function RoundSpinnerButton(props) {
    const className = props.className || `${styles['circle-icon-button']} ${styles['loader']}`;
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
 * @extends `PrimaryButton`
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
 * @param {function} props.onClickIcon onclick event function of the icon in the button.
 * @returns {JSX.Element} A `PrimaryButton` component with an icon and a text node as its children.
 */
export function TextIconButton(props) {
    const className = props.className || styles['text-icon-button'];

    const style = {
        width: props.width,
        height: props.height,
        color: props.color,
        borderColor: props.color
    }

    const onClickIcon = e => {
        e.stopPropagation();
        props.onClickIcon && props.onClickIcon();
    }

    return (
        <PrimaryButton {...props} ref={props.buttonRef} className={className} style={style}>
            <ShouldRender if={!props.customIcon}>
                <i style={props.iconStyle} onClick={onClickIcon}>{props.icon}</i>
            </ShouldRender>

            <ShouldRender if={props.customIcon}>
                {props.customIcon}
            </ShouldRender>

            <span style={props.textStyle}>{props.text}</span>
        </PrimaryButton>
    )
}

/**
 * @name LoadingTextButton
 * @extends `PrimaryButton`
 * @description Renders a `Spinner` component and a text node into a `PrimaryButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {number} props.spinnerSize The size of the width and height of the `Spinner`.
 * @param {string} props.spinnerColor A single color for the `Spinner`.
 * @param {[string]} props.spinnerColors An array of color hex strings for the `Spinner`. It overides `spinnerColor`.
 * @param {string} props.spinnerDuration The duration of a complete revolution of the `Spinner` in seconds.
 * @param {number} props.spinnerDepth The thickness of the `Spinner` border.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `PrimaryButton` component with a `Spinner` component and text node as its children.
*/
export function LoadingTextButton(props) {
    const text = props.text || 'Loading';

    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <PrimaryButton {...props} className={styles['loading-text-button']} style={style}>
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
 * @extends `TextIconButton`
 * @description Renders a _check_ icon and a _success_ text into a `TextIconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `TextIconButton` component with a _check_ icon and _Success_ text as its children.
 */
export function SuccessButton(props) {
    const text = props.text || 'Success';
    const icon = props.icon || 'check';

    return (
        <TextIconButton className={styles['success-button']} icon={icon} text={text} {...props} />
    )
}

/**
 * @name DangerButton
 * @extends `TextIconButton`
 * @description Renders a _close_ icon and a _Danger_ text into a `TextIconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {function} props.onClick onclick event function of the button.
 * @returns {JSX.Element} A `TextIconButton` component with a _close_ icon and _Danger_ text as its children.
 */
export function DangerButton(props) {
    const text = props.text || 'Danger';
    const icon = props.icon || 'close';

    return (
        <TextIconButton className={styles['danger-button']} icon={icon} text={text} {...props} />
    )
}

export default PrimaryButton;