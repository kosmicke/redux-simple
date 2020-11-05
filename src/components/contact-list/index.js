import React from "react";
import { connect } from "react-redux";

const ContactList = ({ contacts }) => {
    return(
        <div className="container mt-5">
            <h3> Contact list component </h3>
            {contacts.map( cont => (
                <div className="row mb-3">
                    <div className="col">
                        {cont.name}
                    </div>
                    <div className="col">
                        {cont.cel}
                    </div>
                    <div className="col">
                        <button className="btn btn-danger">Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default connect((state) => {
    return {
        contacts : state.contact.contacts
    }
} )(ContactList);