import React, { useState } from 'react';
const AddUserForm = props => {

    const initialFormState = {  
    todo: '',
    contentType:'',
    headlines:'',
    scheduled:'',
    publishedAt:'',
    channels:'',
    producers:'',
    sourceOfProducers:'',
    desiredActions:'',
    likes:'',
    shares:'',
    createdAt:'',
   };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setUser({ ...user, [name]: value 
           
        });
    }

    const submitForm = event => {
        event.preventDefault();
        props.addUser(user);
        setUser(initialFormState);
    };

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
                        <label htmlFor="todo">Todos</label>
                    </div>
              
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="contentType" 
                            value={user.contentType}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="contentType">Content Type</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="headlines" 
                            value={user.headlines}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="headlines">Headlines</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4">
                   
                    <input type="date" name="scheduled"  id="scheduled" value={user.scheduled}
                          onChange={handleInputChange} 
                            required />
                        <label htmlFor="scheduled" className="active">Scheduled</label>
                    </div>
               
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="channels" 
                            value={user.channels}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="channels">Channels</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="producers" 
                            value={user.producers}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="producers">Producers</label>
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
                        <label htmlFor="sourceOfProducers">Source of Producers</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="desiredActions" 
                            value={user.desiredActions}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="desiredActions">Desired Actions</label>
                    </div>
                
                    <div className="input-field col s4">

                        <input 
                            type="number" 
                            name="likes" 
                            value={user.likes}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="likes">Likes</label>
                    </div>
               
                    <div className="input-field col s4">

                        <input 
                            type="number" 
                            name="shares" 
                            value={user.shares}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="shares">Shares</label>
                    </div>
               
                    {/* <div className="input-field col s4">

                        <input 
                            type="text" 
                            name="createdAt" className="datepicker" 
                            value={user.createdAt}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="createdAt">Created At</label>
                    </div> */}
               
                    <div className="input-field col s4">

                    <input 
                            type="date" 
                            name="publishedAt" 
                            value={user.publishedAt}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="publishedAt">Published At</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn"><i className="material-icons right">add</i> Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
