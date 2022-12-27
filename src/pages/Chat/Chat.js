import { Grid } from 'components'
import React, { useCallback, useState } from 'react'
import './chat_styles.scss'

const Chat = () => {

    const [message, setMessage] = useState('');

    const handleChangeTextArea = useCallback(e => {
        setMessage(message => e.target.value)
    }, [])
    
    return (
        <Grid className='chat' gap='0.5em'>
            <Grid className='chat__textarea' w100 gap='0.5em' maxWidth='90%'>
                <label htmlFor='message'>Message</label>
                <textarea id="message" value={message} onChange={handleChangeTextArea} rows={2}/>
            </Grid>
            <button className='chat_button'>Send message</button>
        </Grid>
    )
}

export default Chat
