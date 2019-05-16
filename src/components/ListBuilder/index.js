import React, { Fragment, useRef } from 'react';
import { FlatList } from '../../utils/Utils';
import styles from './list.module.css';
import ShouldRender from '../../utils/ShouldRender';

function HeaderRow(props) {
    const collectRowData = () => {
        props.onClick && props.onClick(props.lists);
    }

    return (
        <div className={styles['list-row-header']} onClick={collectRowData}>
            <FlatList
                list={props.lists}
                listView={(item, i) => (
                    <span key={`header-${i}`}>{item}</span>
                )}
            />
        </div>
    )
}

function Row(props) {
    const div = useRef(null);

    const collectRowData = e => {
        const divs = document.querySelectorAll(`.${styles['list-row']}`);
        divs.forEach(div => div.classList.remove(styles['selected']));
        div.current.classList.toggle(styles['selected']);
        props.onClick && props.onClick(props.lists);
    }

    const className = `${styles['list-row']} ${props.selected ? styles['selected'] : ''}`.trim();

    return (
        <div className={className} ref={div} onClick={collectRowData} style={props.rowStyle}>
            <FlatList
                list={props.lists}
                listView={(item, i) => (
                    <Fragment key={`row-${i}`}>
                        <ShouldRender if={typeof item !== 'object'}>
                            <span style={props.textStyle}>{item}</span>
                        </ShouldRender>

                        <ShouldRender if={typeof item === 'object' && item.text}>
                            <figure>
                                <div>
                                    <img style={props.imgStyle} src={item.src} alt="profile avatar" />
                                </div>
                                <figcaption style={props.textStyle}>{item.text}</figcaption>
                            </figure>
                        </ShouldRender>
                    </Fragment>
                )}
            />
        </div>
    )
}

/**
 * @name ListBuilder
 * @description Renders a responsive table into a parent container;
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {[string]} props.headers An array of strings as table headers.
 * @param {[string]} props.rows An array of an array of strings as table data
 * @param {number} props.defaultSelectedRow An index for the row that should be highlighted by default.
 * @param {object} props.containerStyle Style Inline CSS styles for container element.
 * @param {object} props.rowStyle Style Inline CSS styles for row element.
 * @param {object} props.headerStyle Style Inline CSS styles for header element.
 * @param {object} props.imgStyle Style Inline CSS styles for the img element.
 * @param {object} props.textStyle Style Inline CSS styles for text element in the table.
 * @param {function} props.onClick onclick event function for the row and header. It receives the table data as an argument.
 * @returns {JSX.Element} A table component.
 */
export default function ListBuilder(props) {
    const className = `${styles['list']} ${props.addClass || ''}`;

    return (
        <section className={className} style={props.containerStyle}>
            <HeaderRow 
                lists={props.headers} 
                onClick={props.onClick} 
                style={props.headerStyle} 
            />

            <FlatList
                list={props.rows}
                listView={(items, i) => (
                    <Row 
                        key={`row-${i}`} 
                        lists={items} 
                        imgStyle={props.imgStyle}
                        rowStyle={props.rowStyle}
                        textStyle={props.textStyle}
                        onClick={props.onClick}
                        selected={props.defaultSelectedRow === i}
                    />
                )}
            />
        </section>
    )
}
