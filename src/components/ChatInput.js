import React, {Component} from 'react'
import axios from '../api/axios-data'
import {Field,reduxForm} from 'redux-form'
import {fetchMessages} from '../actions'
import {connect} from "react-redux";

class ChatInput extends Component {
    onSubmit = ({name,content}) => {
        const now = new Date()
        const date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
        const hour = now.getHours()%12 === 0? 12: now.getHours()%12
        const time = `${hour}:${now.getMinutes().length<10?'0'+now.getMinutes():now.getMinutes()} ${now.getHours()>11?"PM":"AM"}`
        const message = {
            name,
            time: time + " on " + date,
            content
        }
        axios.post('/message.json', message)
            .then(response=>
            {
                if(response.status===200)
                    this.props.fetchMessages()
            })
            .catch(error => console.log(error))
    }

    renderTextInput = ({input}) =>{
        return (
            <div className="eleven wide field">
                <label>Text</label>
                <input {...input} type="text" autoComplete="off"/>
            </div>
        )
    }
    renderSelectInput(props){
        return(
            <div className="three wide field">
                <label>User</label>
                <select  {...props.input}  >
                    <option></option>
                    <option value="steph">Steph</option>
                    <option value="calvin">Calvin</option>
                </select>
            </div>
        )
    }



    render(){
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="two fields">
                    <Field name="name" component={this.renderSelectInput}/>
                    <Field name="content" component={this.renderTextInput}/>
                </div>
                <input type="submit" className="ui primary button"></input>
            </form>
        )
    }
}

export default connect(null,{fetchMessages})(reduxForm({form: 'ChatInput'})(ChatInput))
