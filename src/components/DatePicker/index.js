import React, { useState, useRef } from 'react';
import { SelectButton } from '../Dropdown';
import { Calendar } from '@bit/primefaces.primereact.calendar';
import './calendar.css';
import './calendar.x.css';
import './theme.css';
import styles from './date-picker.module.css';

/**
 * @name DatePicker
 * @description Renders a HTML Button element and a dropdown list into a parent container;
 * @extends `Dropdown`
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {string} props.listClass Add extra class styles to overwrite default class of the dropdown list.
 * @param {string} props.text Text for the button.
 * @param {object} props.textStyle Style Inline CSS styles for the button text.
 * @param {string} props.icon Google Material Icon for the button.
 * @param {object} props.iconStyle Style Inline CSS styles for icon.
 * @param {object} props.dropdownStyle Style Inline CSS styles for the dropdown list.
 * @param {JSX.Element} props.children HTML list elements such as `<li></li>`, `<ol></ol>`, 
 *     `<option></option>` rendered as dropdown list elements.
 * @param {function} props.onSelect onSelect event fires after clicking on a date.
 * @returns {JSX.Element} A Calendar UI.
 */
export default function DatePicker(props) {
    const [text, setText] = useState(null);
    const [date, setDate] = useState(new Date(Date.now()));
    const div = useRef(null);

    const CustomIcon = () => {
        const onClick = e => {
            e.stopPropagation();
            setText('DD/MM/YYYY');
            setDate(new Date(Date.now()));
        }

        return (
            <span className={styles['icons']}>
                <i onClick={onClick}>close</i>
                <i>insert_invitation</i>
            </span>
        )
    }

    const pickDate = e => {
        e.stopPropagation();
        const { value } = e;
        const year = value.getFullYear();
        const month = value.getMonth() + 1;
        const day = value.getDate();
        const text = `${day}/${month}/${year}`;
        setText(text);
        setDate(value);
        props.onSelect && props.onSelect(text, value);
        div.current.toggleDropdown();
    }

    const addClass = `${styles['date-picker']} ${props.addClass || ''}`;
    const listClass = `${styles['date-picker-list']} ${props.listClass || ''}`;

    return (
        <SelectButton
            addClass={addClass}
            placeholder={text || 'DD/MM/YYYY'}
            customIcon={CustomIcon}
            preventDefaultClick={true}
            listClass={listClass}
            childHeight={360}
        >
            <div ref={div}>
                <Calendar
                    value={date}
                    onChange={pickDate}
                    inline={true}
                />
            </div>
        </SelectButton>
    )
}
