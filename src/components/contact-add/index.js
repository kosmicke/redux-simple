import React, { useState } from "react";
import { connect } from "react-redux";
import * as ContactActions from '../../store/actions/contact'

const ContactAdd = ({ dispatch }) => {

    const [name, setName] = useState("");
    const [cel, setCel] = useState("");

    const saveContact = (e) => {
        e.preventDefault();
        dispatch(ContactActions.createContact(name, cel))
    }

    return(
        <div className="container">
            <h3> Contact add component </h3>
            <form onSubmit={saveContact}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="cel">Cel</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="cel" 
                                value={cel}
                                onChange={e => setCel(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default connect()(ContactAdd);