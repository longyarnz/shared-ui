import React, { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { Calendar } from '@bit/primefaces.primereact.calendar';
import './date-picker.css';

export default function DatePicker(props) {
    const [text, setText] = useState(null);
    const [date, setDate] = useState(new Date(Date.now()));

    const CustomIcon = () => {
        const onClick = e => {
            e.stopPropagation();
            setText('DD/MM/YYYY');
            setDate(new Date(Date.now()));
        }

        return (
            <span className="icons">
                <i onClick={onClick}>close</i>
                <i>calendar_today</i>
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
    }

    return (
        <Dropdown
            addClass="date-picker"
            placeholder={text || 'DD/MM/YYYY'}
            customIcon={CustomIcon}
            preventDefaultClick={true}
            listClass="date-picker-list"
            childHeight={394}
        >
            <div>
                <Calendar
                    value={date}
                    onChange={pickDate}
                    inline={true}
                />
            </div>
        </Dropdown>
    )
}
