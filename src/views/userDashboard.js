import React, {Component} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

class UserDashboard extends Component {

    state = {
        data : []
    }
    componentDidMount() {
        Axios.get('http://localhost:8000/event')
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }

    render() {
        return (
            <div>
                ini user
                {this.state.data.map((cur , index) => {
                    return <div key={index}>
                        <h1>{cur.name}</h1>
                        <p>{cur.description}</p>
                        <Link to={`/event/${cur.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                })}
            </div>
        );
    }
}

export default UserDashboard;