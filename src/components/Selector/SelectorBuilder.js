import React, { Fragment, useState, useEffect, useRef } from 'react';
import { FlatList } from '../../utils/Utils';
import { RoundAddButton } from '../ActionButton';
import { NormalSelector, ActiveSelector } from '.';
import ShouldRender from '../../utils/ShouldRender';
import SearchBar from '../SearchBar';

export default function SelectorBuilder({ removeSelector, ...props }) {
    const [addingSelector, setAddingSelector] = useState(false);
    const input = useRef(null);

    useEffect(() => {

    }, [addingSelector])

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
                <span>
                    <AddTag ref={input} />
                </span>
            </ShouldRender>

            <ShouldRender if={!addingSelector}>
                <RoundAddButton onClick={toggleTag} />
            </ShouldRender>
        </Fragment>
    )

    const view = (text, i) => {
        const isActive = props.isDeleting.some(i => i === text);
        return (
            <span key={`selector-${i}`}>
                <ActiveSelector
                    text={text}
                    key={Math.random()}
                    isActive={isActive}
                    component={NormalSelector}
                    onClickIcon={() => removeSelector(text)}
                />
            </span>
        )
    }   ;

    return (
        <FlatList
            list={selectors}
            listView={props.view || view}
            append={append}
        />
    )
}
