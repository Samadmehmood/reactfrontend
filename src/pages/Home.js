import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import UserTable from '../components/table/UserTable';
import AddUserForm from '../components/forms/AddUserForm';
import EditUserForm from '../components/forms/EditUserForm';


class Home extends Component {
 
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            users: [],
            search:"",
            currentUser: { 
            id: null,
             todo: '',
             contentType:'',
             headlines:'',
             scheduled:'',
             channels:'',
             producers:'',
             sourceOFProducers:'',
             desiredActions:'',
             likes:'',
             shares:'',
             createdAt:'',
             publishedAt:''
        
        },
            editing: false
        }
    }
    scrollToBottom = () => {
      this.myRef.current.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {
        this.refreshUserTable();
    }
    
    refreshUserTable() {
        this.usersData = api.get(`api`)
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    addUser = user => {

        api.post('api', qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
    };

    deleteUser = id => {

        api.delete(`api/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        api.put(`api/${id}`, qs.stringify(user))
            .then(res => {

                this.refreshUserTable();
            });
        
        this.setState({ 
            currentUser: 
            { 
            id: null, 
            todo: '',
            contentType:'',
            headlines:'',
            scheduled:'',
            channels:'',
            producers:'',
            sourceOfProducers:'',
            desiredActions:'',
            likes:'',
            shares:'',
            createdAt:'',
            publishedAt:'' 
        }
        });

        this.setEditing(false);
    };

    editRow = user => {
this.scrollToBottom();
        this.setState({ 
            currentUser: { 
                id: user.id,
                todo:user.todo,
                contentType:user.contentType,
                headlines:user.headlines,
                scheduled:user.scheduled,
                channels:user.channels,
                producers:user.producers,
                sourceOfProducers:user.sourceOfProducers,
                desiredActions:user.desiredActions,
                likes:user.likes,
                shares:user.shares,
                createdAt:user.createdAt,
                publishedAt:user.publishedAt 
                }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };
    onchange = e => {
        this.setState({ search: e.target.value });
      };
    render () {
        const { users } = this.state;
        const { search } = this.state;
        const filteredUsers = users.filter(user => {
          const u1= user.todo.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          const u2=user.contentType.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          return u1+u2;
        });
        return (
          <div className="container">
            <div className="row">
              <div className="col s12 l12">
                <div className="input-field col s4">
                  <input
                    type="text"
                    id="search"
                    name="search" 
                    value={search}
                    onChange={this.onchange}
                    required
                  />
                  <label htmlFor="search">Search</label>
                </div>
               
                <div className="input-field col s4">
                <button onClick={() =>this.scrollToBottom()} className="waves-effect waves-light btn"><i className="material-icons right">add</i> Add New</button>
                </div>
              </div>
              <div className="col s12 l12">
                <h5>Content</h5>
                <UserTable
                  users={filteredUsers}
                  editRow={this.editRow}
                  deleteUser={this.deleteUser}
                />
              </div>
              {this.state.editing ? (
                <div className="col s12 l12">
                  <h4>Edit Content</h4>
                  <EditUserForm
                    editing={this.state.editing}
                    setEditing={this.setEditing}
                    currentUser={this.state.currentUser}
                    updateUser={this.updateUser}
                  />
                 
                  
                </div>
              ) : (
                <div className="col s12 l12">
                  <h4>Add Content</h4>
                  <AddUserForm addUser={this.addUser} />
                  
                </div>
              )}
              
            </div>
            <div ref={this.myRef}></div>
          </div>
        );
    };
};

export default Home;