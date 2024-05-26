import { useState } from 'react';
import './Message.css';

const Message = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="message-container" onClick={handleClick}>
            {open ?
            <div>message</div>
            : <div>click!</div>}
        </div>
    )
}

export default Message;
