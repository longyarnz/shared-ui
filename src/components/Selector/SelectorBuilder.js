import React, { Fragment, useState, useRef } from 'react';
import { FlatList } from '../../utils/Utils';
import { RoundAddButton } from '../ActionButton';
import { NormalSelector, ActiveSelector } from '.';
import ShouldRender from '../../utils/ShouldRender';
import SearchBar from '../SearchBar';

export function SelectorBuilder(props) {
    const [addingSelector, setAddingSelector] = useState(false);
    const input = useRef(null);

    const selectors = props.selectors || [];

    const toggleTag = text => {
        if (addingSelector) {
            props.addSelector && props.addSelector(text)
                .then(() => setAddingSelector(false));
        }

        else {
            setAddingSelector(true);
            setTimeout(() => {
                input.current.form.click();
            }, 0);
        }
    }

    const AddTag = React.forwardRef((_, ref) => (
        <SearchBar
            className="input-selector"
            domRef={ref}
            placeholder="Add new tag"
            clearForm={() => setAddingSelector(false)}
            onSearch={toggleTag}
            searchIcon="add"
        />
    ));

    const append = (
        <Fragment key={`selector-${selectors.length}`}>
            <ShouldRender if={addingSelector}>
                <span style={props.containerStyle}>
                    <AddTag ref={input} />
                </span>
            </ShouldRender>

            <ShouldRender if={!addingSelector}>
                <span style={props.containerStyle}>
                    <RoundAddButton onClick={toggleTag} />
                </span>
            </ShouldRender>
        </Fragment>
    )

    const removeSelector = text => {
        if (addingSelector) return;

        props.removeSelector(text);
    }

    const view = (text, i) => {
        const isActive = props.isDeleting.some(i => i === text);
        return (
            <span style={props.containerStyle} key={`selector-${i}`}>
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
