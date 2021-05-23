import React from 'react';
import { ContactPicker } from "../contactPicker/ContactPicker";

export class AppointmentForm extends React.Component {  
    
    
    render() {
        // const {contacts, title, updateTitle, contact, updateContact, date, updateDate, 
        //     time, updateTime, handleSubmit} = this.props;
        
        const getContactNames = () => this.props.contacts.map((contact) => contact.name);
        const getTodayString = () => {
            const [month, day, year] = new Date().toLocaleDateString("en-US").split('/');
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        }
        return (
            <form onSubmit={this.props.handleSubmit}>
            <label>
                <input 
                    name="title"
                    type="text"
                    value={this.props.title}
                    onChange={(e) => this.props.updateTitle(e.target.value)}
                    required
                    placeholder="Appointment Title"
                />
            </label>
            <br />
            <label>
                <ContactPicker 
                    name="contact"
                    value={this.props.contact}
                    contacts={getContactNames()}
                    onChange={(e) => this.props.updateContact(e.target.value)}
                    placeholder="Appointment with"
                />
            </label>
            <br />
            <label>
                <input 
                    name="date"
                    type="date"
                    value={this.props.date}
                    min={getTodayString()}
                    onChange={(e) => this.props.updateDate(e.target.value)}
                    requried
                />
            </label>
            <br />
            <label>
                <input
                    name="time"
                    type="time"
                    value={this.props.time}
                    onChange={(e) => this.props.updateTime(e.target.value)}
                    required
                />
            </label>
            <br />
            <input type="submit" value="Add Appointment" />
        </form>
        )
    }
}