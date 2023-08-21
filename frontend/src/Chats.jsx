import { PrettyChatWindow } from 'react-chat-engine-pretty';
import './styles/chat.css'

const Chats = (props) => {
    return (
        <div className="background">
            <div className='chat-wrapper'>
                <PrettyChatWindow
                    projectId="780a355e-d4b6-4c72-88d7-d80356a65a95"
                    username={props.user.username}
                    secret={props.user.secret}/>
            </div>
        </div>
    );
}

export default Chats