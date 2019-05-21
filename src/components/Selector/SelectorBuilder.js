import React, { Fragment, useState, useRef } from 'react';
import { FlatList } from '../../utils/Utils';
import { RoundAddButton } from '../ActionButton';
import { NormalSelector, ActiveSelector } from '.';
import ShouldRender from '../../utils/ShouldRender';
import SearchBar from '../SearchBar';

/**
 * @name SelectorBuilder
 * @extends `SearchBar`
 * @description Renders a form with selector style.
 * @param {array} props.selectors An array of text to render as selectors.
 * @param {array} props.isDeleting An array of text to be deleted asynchronously.
 * @param {string} props.placeholder Placeholder text for adding more selectors.
 * @param {string} props.containerClass CSS class for selector container.
 * @param {object} props.containerStyle Inline style for selector container.
 * @param {function} props.addSelector Function for adding text to selectors array. It receives the text value and a promise resolver.
 * @param {function} props.cancelSelector Function for cancelling the addition of a new text to the selectors array.
 * @param {function} props.removeSelector Function for deleting text from the selector array.
 * @return {JSX.Element} A form for creating selectors.
 */
export function SelectorBuilder(props) {
    const [addingSelector, setAddingSelector] = useState(false);
    const input = useRef(null);

    const selectors = props.selectors || [];

    const toggleTag = text => {
        if (addingSelector) {
            props.addSelector && new Promise(resolve => props.addSelector(text, resolve))
                .then(() => setAddingSelector(false));
        }

        else {
            setAddingSelector(true);
            setTimeout(() => {
                input.current.form.click();
            }, 0);
        }
    }

    const placeholder = props.placeholder || 'Add new tag';

    const cancelSearch = () => {
        setAddingSelector(false);
        props.cancelSelector && props.cancelSelector();
    }

    const searchBarClassName = `input-selector ${props.searchBarClassName || ''}`.trim();

    const AddTag = React.forwardRef((_, ref) => (
        <SearchBar
            className={searchBarClassName}
            domRef={ref}
            placeholder={placeholder}
            clearForm={() => setAddingSelector(false)}
            cancelSearch={cancelSearch}
            onSearch={toggleTag}
            searchIcon="add"
        />
    ));

    const append = (
        <Fragment key={`selector-${selectors.length}`}>
            <ShouldRender if={addingSelector}>
                <span className={props.containerClass} style={props.containerStyle}>
                    <AddTag ref={input} />
                </span>
            </ShouldRender>

            <ShouldRender if={!addingSelector}>
                <span className={props.containerClass} style={props.containerStyle}>
                    <RoundAddButton onClick={toggleTag} />
                </span>
            </ShouldRender>
        </Fragment>
    )

    const removeSelector = text => {
        if (addingSelector) return;

        props.removeSelector && props.removeSelector(text);
    }

    const view = (text, i) => {
        const isActive = props.isDeleting && props.isDeleting.some(i => i === text);
        return (
            <span className={props.containerClass} style={props.containerStyle} key={`selector-${i}`}>
                <ActiveSelector
                    text={text}
                    key={Math.random()}
                    isActive={isActive}
                    component={NormalSelector}
                    onClickIcon={() => removeSelector(text)}
                />
            </span>
        )
    };

    return (
        <FlatList
            list={selectors}
            listView={props.view || view}
            append={append}
        />
    )
}
