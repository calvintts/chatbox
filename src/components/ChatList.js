import React, {Component} from 'react'
import Message from './Message'
import axios from '../api/axios-data'

class ChatList extends Component{
    state = {
        data:null,
    }

    componentDidMount() {
        axios.get('/message.json')
            .then(res => {
                const data = Object.entries(res.data).map(([key,val]) =>{
                   return val
                })
                console.log(res)
                this.setState({data})
            })
            .catch(err => console.warn('Unable to load messages!'))
    }

    renderList(){
        if(this.state.data)
        {
            return this.state.data.map((d,index) => {
                return <Message key={index} name={d.name} content={d.content} time={d.time} />
            })
        }
        return <p>No Message found</p>
    }

    render() {
        return (
            <div className="ui comments">
                <h3 className="ui dividing header">Messages:</h3>
                {
                    this.renderList()
                }
            </div>
        )
    }
}

export default ChatList
