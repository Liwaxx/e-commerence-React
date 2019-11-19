import React, {Component} from 'react';
import Axios from "axios";

class AdminDashboard extends Component {

    state = {
        data : [],
        isCreate: false,
        isUpdate: false,
        id: null,
        postData : {
            name : '',
            date : '',
            address : '',
            description : '',
            image : null,
        },
        // dataStore : {
        //     name : '',
        //     date : '',
        //     address : '',
        //     description : '',
        //     image : null,
        // }
    }
    getDataAll = () => {
        Axios.get('http://localhost:8000/event')
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    };
    componentDidMount() {
      this.getDataAll();
    }

    handleChangefile = (e) => {
        this.setState({
            postData: {
                ...this.state.postData,
                image: e.target.files[0]
            }
        });
        console.log(this.state.image)
    };
    handleChange = (e) => {
        let { postData } = this.state;
        postData[e.target.name] = e.target.value;
        this.setState({
            postData
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const { name, description, address, image, date} = this.state.postData;
        let form = new FormData();
        form.append('name', name);
        form.append('address', address);
        form.append('date', date);
        form.append('description', description);
        form.append('image', image);
        form.append('api_token', localStorage.getItem('admin_token'));

        Axios.post('http://localhost:8000/event', form, {headers : { 'content-type' : 'multipart/form-data'}})
            .then(res => {
                alert(res.data.message);
                this.setState({
                    isCreate : false
                })
            })
    }

    handleSubmitUpdate = (e) =>{
        e.preventDefault();
        const { name, description, address, image, date} = this.state.postData;
        let form = new FormData();
        form.append('name', name);
        form.append('address', address);
        form.append('date', date);
        form.append('description', description);
        form.append('image', image);
        form.append('api_token', localStorage.getItem('admin_token'));
        Axios.post('http://localhost:8000/event/update/'+ this.state.id, form, {headers : { 'content-type' : 'multipart/form-data'}})
            .then(res => {
                alert(res.data.message);
                this.setState({
                    isUpdate : false,
                });
                window.location.reload();
            });
    }

    createButton = () =>{
        this.setState({
            isCreate : !this.state.isCreate
        })
    }
    editButton = (e) =>{
        this.setState({
            id: e.target.id,
        })
        Axios.get('http://localhost:8000/event/'+e.target.id)
            .then(res => {
                this.setState({
                    postData : {
                        ...res.data.data
                    },
                    isUpdate : true,

                })
            } )
    }

    renderFormCreate = () =>{

        if (this.state.isCreate){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <label>nama Event</label>
                    <input type={'text'} name={'name'} onChange={this.handleChange} />
                    <br/>
                    <label>Tanggal Event</label>
                    <input type={'date'} name={'date'} onChange={this.handleChange}/>
                    <br/>
                    <label>Alamat Event</label>
                    <input type={'text'} name={'address'} onChange={this.handleChange}/>
                    <br/>
                    <label>Deskripsi Event</label>
                    <input type={'text'} name={'description'} onChange={this.handleChange}/>
                    <br/>
                    <label>Photo</label>
                    <input type={'file'} name={'image'} onChange={this.handleChangefile}/>
                    <button type={'submit'}>Simpan</button>
                    </form>
                </div>
            );
        }
    }

    renderFormUpdate = () =>{
        if (this.state.isUpdate){
            return (
                <div>
                    <form onSubmit={this.handleSubmitUpdate}>
                        <label>nama Event</label>
                        <input type={'text'} name={'name'} onChange={this.handleChange} value={this.state.postData.name}/>
                        <br/>
                        <label>Tanggal Event</label>
                        <input type={'date'} name={'date'} onChange={this.handleChange} value={this.state.postData.date}/>
                        <br/>
                        <label>Alamat Event</label>
                        <input type={'text'} name={'address'} onChange={this.handleChange} value={this.state.postData.address}/>
                        <br/>
                        <label>Deskripsi Event</label>
                        <input type={'text'} name={'description'} onChange={this.handleChange} value={this.state.postData.description}/>
                        <br/>
                        <label>Photo</label>
                        <input type={'file'} name={'image'} onChange={this.handleChangefile}/>
                        <button type={'submit'}>Simpan</button>
                    </form>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderFormCreate()}
                {this.renderFormUpdate()}
                <button onClick={this.createButton}>Tambah Event</button>
                <div>
                    {this.state.data.map((data,index) => {
                        return(
                          <div key={index}>
                              <h1>{data.name}</h1>
                              <div>{data.date}</div>
                              <div>{data.description}</div>
                              <img src={data.img_url} />
                              <button onClick={this.editButton} id={data.id}>Edit</button>
                          </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default AdminDashboard;