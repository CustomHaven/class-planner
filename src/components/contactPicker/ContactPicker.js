import React from 'react';


export class ContactPicker extends React.Component {
    render() {
        return (
            <select name={this.props.name} onChange={this.props.onChange}>
            <option value={''} key={-1} selected="selected">
                No Contact Selected
            </option>
            {this.props.contacts.map((contact, index) => {
                return (
                    <option key={contact} value={contact}>
                        {contact}
                    </option>
                )
            })}
        </select>
        )
    }
}