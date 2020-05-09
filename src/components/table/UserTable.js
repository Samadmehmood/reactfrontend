import React from 'react';
import moment from 'moment';

const UserTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Todos</th>
                <th>Headlines</th>
                <th>Content Type</th>
                <th>Scheduled</th>
                <th>Channels</th>
                <th>Producers</th>
                <th>Source of Producers</th>
                <th>Likes</th>
                <th>Shares</th>
                <th>Created At</th>
                <th>Published at</th>
                <th>Desired Actions</th>
                <th></th>

            </tr>
        </thead>
    <tbody>
        {
            props.users.length > 0 ? (
                props.users.map (user => (

                    <tr key={user.id}>
                        <td>{user.todo}</td>
                        <td>{user.headlines}</td>
                        <td>{user.contentType}</td>
                        <td>{moment(user.scheduled).format('LLL')}</td>
                        <td>{user.channels}</td>
                        <td>{user.producers}</td>
                        <td>{user.sourceOfProducers}</td>
                        <td>{user.likes}</td>
                        <td>{user.shares}</td>
                        <td>{moment(user.createdAt).format('LLL')}</td>
                        <td>{moment(user.publishedAt).format('LLL')}</td>
                        <td>{user.desiredActions}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(user)}>
                            <i className="material-icons right">edit</i>edit
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteUser(user.id)}>
                            <i className="material-icons right">delete</i>delete
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.users[0]} No Users</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default UserTable;