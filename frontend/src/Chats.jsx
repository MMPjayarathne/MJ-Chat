import { PrettyChatWindow } from 'react-chat-engine-pretty';

const Chats = (props) => {
    return (
        <div className="background">
            <div className='chat-wrapper'>
                <PrettyChatWindow
                    projectId="12435243"
                    username="Masith"
                    secret="This is the secret"
                />
            </div>
        </div>
    );
}

export default Chats