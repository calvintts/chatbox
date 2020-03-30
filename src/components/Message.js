import React from 'react'
import CalvinImg from '../data/img/calvin.jfif'
import StephImg from '../data/img/steph.jfif'

const Message = (props) => {
    return (
        <div className="comment">
            <a className="avatar" alt="avatar">
                <img src={props.name=='calvin'?CalvinImg:StephImg}/>
            </a>
            <div className="content">
                <span style={{textTransform:'capitalize'}}className="author">{props.name}</span>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Message
