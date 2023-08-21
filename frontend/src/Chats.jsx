import './styles/chat.css'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const Chats = (props) => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID, 
        props.user.username, props.user.secret
    );
    return (
    <div style={{ height: "100vh", fontFamily: 'Open Sans' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )

}

export default Chats;