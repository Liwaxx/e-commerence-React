import React, {Component} from 'react';
import  axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    state = {
        email : '',
        password: ''
    }

    handleChange = (e,key) => {
        this.setState({
                [key] : e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', this.state)
            .then(res => {
                console.log(res)
               if (res.data.data.role_id === 2){
                   localStorage.setItem('admin_token', res.data.data.api_token);
                   localStorage.setItem('user_id', res.data.data.id);
                   this.props.history.push('/admin');
               }
                else{
                   localStorage.setItem('user_token', res.data.data.api_token);
                   localStorage.setItem('user_id', res.data.data.id);
                   this.props.history.push('/dashboard');
               }
            });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method={'post'}>
                    <input type={'text'} onChange={e => this.handleChange(e , 'email')}/>
                    <input type={'password'} onChange={e => this.handleChange(e, 'password')}/>
                    <input type={'submit'} value={'Login'}/>
                </form>
            </div>
        );
    }
}

export default Login;