import React from 'react';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export class AppointmentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contact: this.props.contacts > 0 ? this.props.contacts[0].name : '',
            date: '',
            time: ''
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount() {
    //     this.setState({contact: this.props.contacts > 0 ? this.props.contacts[0]['name'] : ''})
    // }
    updateTitle(nextState) {
        this.setState({title: nextState})
    }
    updateContact(nextState) {
        this.setState({contact: nextState})
    }
    updateDate(nextState) {
        this.setState({date: nextState})
    }
    updateTime(nextState) {
        this.setState({time: nextState})
    }
    componentDidMount() {
        this.updateTitle();         
        this.updateContact();
        this.updateDate();
        this.updateTime();
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("updated", prevProps);
    }
    handleSubmit(e) {
        console.log('What happened');
        console.log('What happened' + e);
        console.log('What happened');
        e.preventDefault();
        const {title, contact, date, time} = this.state;
        this.props.addAppointment(title, contact, date, time)
        this.setState({title: ''});
        this.setState({contact: ''}); 
        this.setState({date: ''}); 
        this.setState({time: ''});
    }
    render() {
        return (
            <div>
                <section>
                    <h2>Add Appointment</h2>
                    <AppointmentForm 
                        contacts={this.props.contacts}
                        title={this.state.title}
                        updateTitle={this.updateTitle}
                        contact={this.state.contact}
                        updateContact={this.updateContact}
                        date={this.state.date}
                        updateDate={this.updateDate}
                        time={this.state.time}
                        updateTime={this.updateTime}
                        handleSubmit={this.handleSubmit}
                    />        
                </section>
                <hr />
                <section>
                    <h2>Appointments</h2>
                    <TileList tiles={this.props.appointments} />
                </section>
            </div>
        )
    }
}