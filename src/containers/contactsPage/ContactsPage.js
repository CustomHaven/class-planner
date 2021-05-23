import React from 'react';
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
// contacts={this.state.contacts} addContact={this.addContact}

export class ContactsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            duplicate: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const {name, phone, email, duplicate} = this.state;
        if (!duplicate) {
            this.props.addContact(name, phone, email);
            this.setState({name: ''})
            this.setState({phone: ''})
            this.setState({email: ''})
        }
    }
    updateName(nextState) {
        this.setState({name: nextState});
    }
    updatePhone(nextState) {
        this.setState({phone: nextState});
    }
    updateEmail(nextState) {
        this.setState({email: nextState});
    }
    componentDidMount() {
        this.nameIsDuplicate = () => {
            const found = this.props.contacts.find((contact) => contact.name === this.state.name);
            if (found !== undefined) {
              return true;
            }
            return false;
          };
      
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        // if (this.nameIsDuplicate !== prevState) {
        //     this.setState({ duplicate: true });
        //   } else {
        //     this.setState({ duplicate: false });
        //   }
        
        console.log("updated", prevProps);
    }
    render() {
        return (
            <>
                <section>
                    <h2>
                    Add Contact
                    {this.state.duplicate ? " - Name Already Exists" : ''}
                    </h2>
                    <ContactForm
                        name={this.state.name} 
                        updateName={this.updateName}
                        phone={this.state.phone} 
                        updatePhone={this.updatePhone}
                        email={this.state.email}
                        updateEmail={this.updateEmail} 
                        handleSubmit={this.handleSubmit}
                    />
                </section>
                <hr />
                <section>
                    <h2>Contacts</h2>
                    <TileList tiles={this.props.contacts} />
                </section>
            </>
        )
    }
}