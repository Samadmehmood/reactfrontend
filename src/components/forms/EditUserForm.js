import React, { useState, useEffect } from 'react';
import moment from 'moment';
const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
              <div className="row">
                    <div className="input-field col s4">

                        <input type="text" 
                            id="todo" 
                            name="todo" 
                            value={user.todo}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="todo">Todos</label>
                    </div>
              
                    <div className="input-field col s4">
                    <input 
                            type="text" 
                            name="contentType" 
                            value={user.contentType}
                            onChange={handleInputChange} 
                            required />
                        
                        <label htmlFor="contentType" className="active">Content Type</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="headlines" 
                            value={user.headlines}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="headlines">Headlines</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4">

                        <input 
                           input type="text"  
                           name="scheduled"  
                           value={moment(user.scheduled).format('YYYY-MM-DD')} className="datepicker"
                           onChange={handleInputChange} dateFormat='YYYY-MM-DD'
                            required />
                        <label className="active" htmlFor="scheduled">Scheduled</label>
                    </div>
               
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="channels" 
                            value={user.channels}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="channels">Channels</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="producers" 
                            value={user.producers}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="producers">Producers</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="sourceOfProducers" 
                            value={user.sourceOfProducers}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="sourceOfProducers">Source of Producers</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="desiredActions" 
                            value={user.desiredActions}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="desiredActions">Desired Actions</label>
                    </div>
                
                    <div className="input-field col s4">

                        <input 
                            type="number" 
                            name="likes" 
                            value={user.likes}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="likes">Likes</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="number" 
                            name="shares" 
                            value={user.shares}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="shares">Shares</label>
                    </div>
               
                    {/* <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="createdAt" className="datepicker" 
                            value={moment(user.createdAt).format('L')}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="createdAt">Created At</label>
                    </div> */}
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="publishedAt" className="datepicker" 
                            value={moment(user.publishedAt).format('L')}
                            onChange={handleInputChange} 
                            required />
                        <label className="active" htmlFor="publishedAt">Published At</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn"><i className="material-icons right">check</i> Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn red"
                            onClick={() => props.setEditing(false)}>
                               <i className="material-icons right">cancel</i> Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
