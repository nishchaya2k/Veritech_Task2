import React from 'react'

const Message = () => {
    return (
        <div className='message owner'>
            <span className='today'>Today</span>
            <div className='thread flex-left'>
                <div className="messageInfo">
                    <img
                        src="https://images.pexels.com/photos/19902863/pexels-photo-19902863/free-photo-of-a-woman-in-a-purple-jacket-standing-in-front-of-a-microphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <div>10:23</div>
                </div>

                <div className="messageContent">
                    <p>OMG😲 did you remember what to you did yesterday at the football ground?</p>
                </div>

            </div>


            <div className='thread flex-right'>
                <div className="messageInfo">
                    <img
                        src="https://images.pexels.com/photos/14875249/pexels-photo-14875249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                    />
                    <div>11:09</div>
                </div>

                <div className="messageContent">
                    <p>No!, no idea😓</p>
                </div>

            </div>
        </div>



    )
}

export default Message


{/* <div className="messageContent">
                <p>hello</p>
                <img
                    src="https://images.pexels.com/photos/14875249/pexels-photo-14875249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                />
            </div> */}