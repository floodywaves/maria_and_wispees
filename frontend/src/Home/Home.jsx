import { useState } from 'react';
import Message from '../Message/Message.jsx';
import './Home.css'

const Home = () => {
    const [selectedMessageIdx, setSelectedMessageIdx] = useState('');
    return (
        <div>
            <p>tree</p>
            <Message />
        </div>
    )
}

export default Home;
