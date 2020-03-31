import React, {Component} from 'react'
import Message from './Message'
import {fetchMessages} from '../actions'
import {connect} from 'react-redux'

class ChatList extends Component{
    componentDidMount() {
        this.props.fetchMessages()
        setInterval(() => this.props.fetchMessages(),5000)
    }

    renderList(){
        if(this.props.data)
        {
            return this.props.data.map((d,index) => {
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

const mapStateToProps = (state) => {
    return ({
        data: state.messages
    })
}

export default connect(mapStateToProps,{fetchMessages})(ChatList)
