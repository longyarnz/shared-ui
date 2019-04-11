/**
 * @fileoverview A React component that renders a search-bar with a default CSS ctyle.
 * @exports JSX.Element
 */

import React, { useState, useRef } from 'react';
import { TextIconButton } from '../PrimaryButton';
import './search-bar.css';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';

/**
 * @name SearchBar
 * @extends `TextIconButton`
 * @description Renders a search field and takes the size of the container.
 * @param {string} props.className The default class of the search-bar.
 * @param {boolean} props.done Accepts a boolean value to set the ongoing search as completed.
 * @param {string} props.placeholder Placeholder text for the search bar.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onSearch A function to collect the search text.
 * @param {function} props.cancelSearch A function to cancel an ongoing search.
 * @example
 * <SearchBar placeholder="Search Bar" done={false} onSearch={searchValue => console.log(searchValue)} />
 */
export default function SearchBar(props) {
    const [focus, setFocus] = useState(false);
    const [searching, setSearching] = useState(false);
    const input = useRef(null);
    const className = `search-bar ${props.className || ''}`;

    const triggerSearch = () => {
        if (focus) return;
        setFocus(true);
        input.current.placeholder = '';
        setTimeout(() => input.current.focus(), 100);
    }

    const clearFormValue = () => {
        if (!focus) return;

        else if (searching) {
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
    }

    const searchValue = e => {
        e.preventDefault();
        props.onSearch && props.onSearch(e.target.value[0].value);
        setSearching(true);
        setTimeout(() => input.current.blur(), 100);
        setTimeout(() => setSearching(false), 5000);
    }

    const setPlaceholder = text => {
        input.current.placeholder = text;
    }

    return (
        <form className={className} onClick={triggerSearch} onSubmit={searchValue}>
            <input
                type="text"
                name="search"
                placeholder={props.placeholder}
                required={true}
                disabled={!focus}
                ref={input}
                autoFocus={true}
                onBlur={() => setPlaceholder(props.placeholder)}
                onFocus={() => setPlaceholder('')}
            />

            <ShouldRender if={focus}>
                <span id="close" onClick={clearFormValue}>
                    <i>close</i>
                </span>
            </ShouldRender>

            <ShouldRender if={focus && !searching}>
                <button type="submit">
                    <i>arrow_forward</i>
                </button>
            </ShouldRender>

            <ShouldRender if={focus && searching && props.done !== true}>
                <span>
                    <Spinner size={12} />
                </span>
            </ShouldRender>

            <ShouldRender if={!focus}>
                <span>
                    <i>search</i>
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
 * @example
 * <LongSearchButton text="Search Button" />
 */
export function LongSearchButton(props) {
    const addClass = `long-search-button ${props.addClass || ''}`;

    return (
        <TextIconButton addClass={addClass} icon="search" text={props.text} {...props} />
    )
}