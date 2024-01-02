import img from './images/chatbot.jpg'
import React, { useState } from 'react';
import { properties } from "./properties";

export default function ChatBot() {

    const [currentUserMsg, setCurrentUserMsg] = useState('');

    const [userMsgHistory, setUserMessageHistory] = useState([]);
    const [botMsgHistory, setBotMessageHistory] = useState([]);
    const [messageHistory, setMessageHistory] = useState([]);

    async function change(e) {
        if (e.which === 13) {

            if (!e.repeat && e.target.value !== '') {
                
                setMessageHistory([...messageHistory, e.target.value]);

                setUserMessageHistory([...userMsgHistory, e.target.value]);
                const response = await fetch(`${properties.AI_URL}/ai` , {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({query: e.target.value})
                  });
                const reply = await response.text();
                setMessageHistory([...messageHistory, reply]);
                setBotMessageHistory([...botMsgHistory, reply]);
            }
            e.preventDefault();
            setCurrentUserMsg("");
        } else {
            setCurrentUserMsg(e.target.value);
        }
        

    }
    
    return <div className='chatbot'>
        <div className='chatbox'>
            <div className='chatboxMessages'>
            <botMsg>Hi! How can I help you</botMsg>
                {userMsgHistory.map((msg, idx) => {
                    return <>
                    <br></br>
                    <usermsg>{msg}</usermsg>
                    {botMsgHistory.length > idx && <><br></br><botMsg>{botMsgHistory[idx]}</botMsg></>}
                    </>
                })}
            </div>
            <form>
                <div id='usermsg'>
                    <textarea value={currentUserMsg} onKeyDown={change} onChange={(e) => setCurrentUserMsg(e.target.value)}></textarea>
                </div>
                
            </form>
        </div>
    <button> 
      <img src={img} width={100}></img>
    </button>
    </div>
}