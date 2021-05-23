import React from "react";
import { Switch, Route, Redirect, NavLink, BrowserRouter as Router } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      appointments: []
    }
    this.addContact = this.addContact.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }

  addContact(name, phone, email) {
    this.setState((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts,
        {
          name: name,
          phone: phone,
          email: email
        }
      ]
    }))
    
  }

  addAppointment(title, contact, date, time) {
    this.setState((prevState) => ({
      ...prevState,
      appointments: [...prevState.appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }]
    }))
  }

  

  render() {

    return (
      <Router>
        <nav>
          <NavLink to={ROUTES.CONTACTS} activeClassName="active">
            Contacts
          </NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
            Appointments
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to={ROUTES.CONTACTS} />
            </Route>
            <Route path={ROUTES.CONTACTS}>
              <ContactsPage contacts={this.state.contacts} addContact={this.addContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              <AppointmentsPage
                appointments={this.state.appointments}
                addAppointment={this.addAppointment}
                contacts={this.state.contacts}
              />
            </Route>
          </Switch>
        </main>
      </Router>
    );
    }
}

export default App;
