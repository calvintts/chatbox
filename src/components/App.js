import React, {Component} from 'react'
import ChatList from './ChatList'
import ChatInput from'./ChatInput'

class App extends Component{
    render(){
        return(
            <div className="ui container">
                <h2>Chat for Calvin and Steph</h2>
                <ChatList/>
                <ChatInput/>
            </div>
        )
    }
}

export default App
