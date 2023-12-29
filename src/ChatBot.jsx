import img from './images/chatbot.jpg'
import React, { useState } from 'react';

export default function ChatBot() {

    const [userMsg, setUserMsg] = useState('');

    const [userMsgHistory, setUserMessageHistory] = useState([]);
    var botMsgs = [];

    function change(e) {
        if (e.which === 13) {
            console.log("ENTER");
            if (!e.repeat) {
                setUserMessageHistory([...userMsgHistory, e.target.value]);
                setUserMsg("");
                // const newEvent = new Event("submit", {cancelable: true});
                // event.target.form.dispatchEvent(newEvent);
            
            }
            e.preventDefault(); // Prevents the addition of a new line in the text field
        } else {
            setUserMsg(e.target.value);
        }

    }
    
    return <div className='chatbot'>
        <div className='chatbox'>
            <botMsg>Hi! How can I help you</botMsg>
            {userMsgHistory.map((msg, idx) => {
                return <>
                <br></br>
                <userMsg>{msg}</userMsg>
                </>
                
            })}
            <form>
                <div id='usermsg'>
                    <textarea value={userMsg} onKeyDown={change} onChange={(e) => setUserMsg(e.target.value)}></textarea>
                </div>
                
            </form>
            
        </div>
    <button> 
      <img src={img} width={100}></img>
    </button>
    </div>
}