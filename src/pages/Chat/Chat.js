import { Grid, TextField } from 'components'
import React, { useEffect, useState } from 'react'
import './chat_styles.scss'
import useSocket from 'context/hooks/useSocket'

const Chat = () => {

    const { socket } = useSocket()

    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        socket.emit('message', { user, content: message })

        const newMessage = { user: 'Me', content: message }

        setMessages([newMessage, ...messages])
        setMessage('')
    }

    useEffect(() => {
        const messageHandler = message => { setMessages(messages => [message, ...messages]) }
        socket.on('message', messageHandler)
        return () => {
            socket.off('message', messageHandler)
        }
    }, [])

    return (
        <Grid className='chat' gap='0.5em'>
            <TextField maxWidth='20em' label='User' value={user} onChange={setUser} />
            <form onSubmit={handleSubmit}>
                <Grid w100 className='chat__textarea' gap='0.5em' maxWidth='90%' columns='1fr auto' itemsY='end'>
                    <TextField label='Message' value={message} onChange={setMessage} />
                    <button className='chat_button'>Send</button>
                </Grid>
            </form>

            <Grid className='message_container' columns='minmax(0, 5em) auto' gap='1em'>
                {messages.map((message, i) =>
                    <React.Fragment key={i}>
                        <p title={message.user} className='message_user'>{message.user}:</p>
                        <p className='message_content'>{message.content}</p>
                    </React.Fragment>
                )}
            </Grid>

        </Grid>
    )
}

export default Chat
