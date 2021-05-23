import React from 'react';


export class ContactForm extends React.Component {
    // const { name, phone, email, update } = this.props;
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={this.props.name}
              onChange={(e) => this.props.updateName(e.target.value)}
              required
              placeholder="Contact Name"
            />
          </label>
          <br />
          <label>
            <input
              type="tel"
              name="phone"
              value={this.props.phone}
              onChange={(e) => this.props.updatePhone(e.target.value)}
              required
              // regex is for US phone numbers
              pattern="00[4][4][\d]{10}"
              placeholder="Contact Phone (###-###-####)"
            />
          </label>
          <br />
          <label>
            <input
              type="email"
              name="email"
              value={this.props.email}
              onChange={(e) => this.props.updateEmail(e.target.value)}
              required
              placeholder="Contact Email"
            />
          </label>
          <br />
          <input type="submit" value="Add Contact" />
        </form>
        )
    }
}