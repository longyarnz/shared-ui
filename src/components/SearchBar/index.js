/**
 * @fileoverview A React component that renders a search-bar with a default CSS ctyle.
 * @exports JSX.Element
 */

import React, { useState, useRef } from 'react';
import { TextIconButton } from '../PrimaryButton';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';
import styles from './search-bar.module.css';

/**
 * @name SearchBar
 * @extends `TextIconButton`
 * @description Renders a search field and takes the size of the container.
 * @param {string} props.className The default class of the search-bar.
 * @param {boolean} props.done Accepts a boolean value to set the ongoing search as completed.
 * @param {boolean} props.preventDefaultOnchange Accepts a boolean value to prevent the default onChange event handler.
 * @param {string} props.placeholder Placeholder text for the search bar.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.clearForm A function to run when you clear the search field.
 * @param {function} props.onSearch A function to collect the search text.
 * @param {function} props.cancelSearch A function to cancel an ongoing search.
 * @return {JSX.Element} A search input with a spinner component.
 */
export default function SearchBar(props) {
    const [focus, setFocus] = useState(false);
    const [searching, setSearching] = useState(false);
    let input = useRef(null);

    input = props.domRef ? props.domRef : input;
    const className = `${styles['search-bar']} ${props.className || ''}`;

    const triggerSearchField = () => {
        if (focus) return;
        setFocus(true);
        input.current.placeholder = '';
        setTimeout(() => input.current.focus(), 100);
    }

    const clearFormValue = () => {
        if (!focus) return;

        else if (searching && !props.done) {
            setSearching(false);
            props.cancelSearch && props.cancelSearch();
        }

        else if ([null, undefined, ''].includes(input.current.value)) {
            setFocus(false);
            input.current.placeholder = props.placeholder;
        }

        else {
            input.current.value = null;
            input.current.focus();
        }

        props.clearForm && props.clearForm();
    }

    const searchValue = e => {
        e.preventDefault();
        const target = e.target[0] ? e.target[0] : e.target;
        props.onSearch && props.onSearch(target.value, e);
        setSearching(true);
        e.target[0] && setTimeout(() => input.current && input.current.blur(), 100);
    }

    const onChange = e => {
        if (!props.onChange) return;
        
        props.preventDefaultOnchange 
            ? props.onChange && props.onChange(e)
            : searchValue(e);
    }

    const setPlaceholder = text => {
        input.current.placeholder = text;
    }

    const searchIcon = props.searchIcon || 'search';

    const autoComplete = props.autoComplete || 'off';

    const name = props.name || 'search';

    return (
        <form className={className} onClick={triggerSearchField} onSubmit={searchValue} autoComplete={autoComplete}>
            <input
                type="text"
                name={name}
                placeholder={props.placeholder || 'Search'}
                required={props.required}
                disabled={!focus}
                ref={input}
                autoFocus={props.autoFocus ? props.autoFocus : true}
                onBlur={() => setPlaceholder(props.placeholder)}
                onFocus={() => setPlaceholder('')}
                onChange={onChange}
            />

            <ShouldRender if={focus}>
                <span id={styles['close']} onClick={clearFormValue}>
                    <i>close</i>
                </span>
            </ShouldRender>

            <ShouldRender if={focus && (!searching || props.done)}>
                <button type="submit">
                    <i>arrow_forward</i>
                </button>
            </ShouldRender>

            <ShouldRender if={focus && searching && props.done !== true}>
                <span>
                    <Spinner colors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} size={14} />
                </span>
            </ShouldRender>

            <ShouldRender if={!focus}>
                <span>
                    <i>{searchIcon}</i>
                </span>
            </ShouldRender>
        </form>
    )
}

/**
 * @name LongSearchButton
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
 * @return {JSX.Element} A `TextIconButton` with an _search_ icon and _Search_ text.
 */
export function LongSearchButton(props) {
    const addClass = `${styles['long-search-button']} ${props.addClass || ''}`;

    return (
        <TextIconButton addClass={addClass} icon="search" text={props.text} {...props} />
    )
}