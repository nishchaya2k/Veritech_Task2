import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <div className='chatPerson'>
                    <span>Kane</span>
                    <span>last seen 5 mins ago</span>
                </div>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
