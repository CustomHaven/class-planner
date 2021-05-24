import React from 'react';
import { ContactPicker } from "../contactPicker/ContactPicker";

export class AppointmentForm extends React.Component {  
    constructor(props) {
        super(props);
        this.getTodayString = this.getTodayString.bind(this);
        this.getContactNames = this.getContactNames.bind(this);
    }
    getContactNames() {
        return this.props.contacts.map((contact) => contact.name);
    }
    getTodayString() {
        const [month, day, year] = new Date().toLocaleDateString("en-US").split('/');
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
    render() {

        const {title, updateTitle, contact, updateContact, date, updateDate, 
            time, updateTime, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
            <label>
                <input 
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => updateTitle(e.target.value)}
                    required
                    placeholder="Appointment Title"
                />
            </label>
            <br />
            <label>
                <ContactPicker 
                    name="contact"
                    value={contact}
                    contacts={this.getContactNames()}
                    onChange={(e) => updateContact(e.target.value)}
                    placeholder="Appointment with"
                />
            </label>
            <br />
            <label>
                <input 
                    name="date"
                    type="date"
                    value={date}
                    min={this.getTodayString()}
                    onChange={(e) => updateDate(e.target.value)}
                    requried
                />
            </label>
            <br />
            <label>
                <input
                    name="time"
                    type="time"
                    value={time}
                    onChange={(e) => updateTime(e.target.value)}
                    required
                />
            </label>
            <br />
            <input type="submit" value="Add Appointment" />
        </form>
        )
    }
}