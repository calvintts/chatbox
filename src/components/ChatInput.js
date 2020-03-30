import React, {Component} from 'react'
import axios from '../api/axios-data'

class ChatInput extends Component {
    INITIAL_STATE = {
        name: "steph",
        content: "",
        response: "",
    }

    state = this.INITIAL_STATE

    handleSubmit = (event) => {
        const now = new Date()
        const date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
        const hour = now.getHours()%12 === 0? 12: now.getHours()%12
        const time = `${hour}:${now.getMinutes().length<10?'0'+now.getMinutes():now.getMinutes()} ${now.getHours()>11?"PM":"AM"}`
        const message = {
            name: this.state.name,
            time: time + " on " + date,
            content: this.state.content
        }
        event.preventDefault()
        axios.post('/message.json', message)
            .then(response=>
            {
                if(response.status===200)
                    this.setState({
                        content:'',
                        response:"Submitted"
                    })
            })
            .catch(error => console.log(error))
            window.location.reload()
    }

    nameChange = (event) => {
        this.setState({name:event.target.value})
    }

    contentUpdate = (event) => {
        this.setState({content:event.target.value})
    }

    render(){
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="two fields">
                    <div className="three wide field">
                        <label>User</label>
                        <select onChange={this.nameChange} value={this.state.name} className="ui fluid dropdown" id="user" name="user">
                            <option value="steph">Steph</option>
                            <option value="calvin">Calvin</option>
                        </select>
                    </div>
                    <div className="eleven wide field">
                        <label>Text</label>
                        <input onChange={this.contentUpdate} value={this.state.content} type="text"/>
                    </div>
                </div>
                <input type="submit" className="ui primary button"></input>
            </form>
        )
    }
}

export default ChatInput
