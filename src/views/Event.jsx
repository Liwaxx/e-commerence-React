import React, {Component} from 'react';
import Axios from "axios";

class Event extends Component {
    state ={
        data : null,
        user_id : localStorage.getItem('user_id')
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
       Axios.get('http://localhost:8000/event/'+this.props.match.params.id)
            .then(res => {
               this.setState({
                   data : res.data.data
               })
                console.log(this.state.data.name);
            })
    }

    joinEvent = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/event/join', {
            user_id : localStorage.getItem('user_id'),
            event_id : this.state.data.id
        }).then(res => {
            alert(res.data.message);
            this.props.history.push('/dashboard');
        })
    }

    renderComponent = () =>{
        if (this.state.data) {
            return (
                <div>
                <h1>{this.state.data.name}</h1>
                <img src={this.state.data.img_url} />
                <button onClick={this.joinEvent}>Join Event</button>
            </div>
            );
        }
        return <p>Loading .....</p>
    }

    render() {
        return (
            <div>
                {this.renderComponent()}
            </div>
        );
    }
}

export default Event;