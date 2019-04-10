import React, { useState, useRef } from 'react';
import { TextIconButton } from '../PrimaryButton';
import './search-bar.css';
import ShouldRender from '../../utils/ShouldRender';
import Spinner from '../Spinner';

export default function SearchBar(props) {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);
    const [searching, setSearching] = useState(false);
    const addClass = `search-bar ${props.addclass || ''}`;

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
        props.searcher && props.searcher(e.target.value[0].value);
        setSearching(true);
        setTimeout(() => input.current.blur(), 100);
        setTimeout(() => setSearching(false), 5000);
    }

    const setPlaceholder = text => {
        input.current.placeholder = text;
    }
    
    return (
        <form className={addClass} onClick={triggerSearch} onSubmit={searchValue}>
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

export function LongSearchButton(props) {
    return (
        <TextIconButton addclass="long-search-button" icon="search" text={props.text} {...props} />
    )
}