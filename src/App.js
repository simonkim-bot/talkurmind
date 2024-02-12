import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="23ac1941-8213-4850-85bd-22903f978b5e"
            //chatID='230337'
            //chatAccessKey='ba3836f4-b2c0-4872-bab2-5e79344b75b3'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={( chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;