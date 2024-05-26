import { useEffect, useState } from "react";
import StringMessages from "../message.json";
import './Tree.css'
// import Message from "../Message/Message.jsx";

const Tree = () => {
    const [messageList, setMessageList] = useState([]);

    const Message = ({ text, sender }) => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        }

        return (
            <div className="message-container" onClick={handleClick}>
                {open ? (
                    <div>
                        <p>{text}</p>
                        <p>{sender}</p>
                    </div>
                ) : (
                    <div>click!</div>
                )}
            </div>
        )
    }

    useEffect(() => {
        setMessageList(StringMessages);
    }, []);

    return (
        <div className="tree-main">
            <img 
                id="background"
                src="../src/assets/dali.jpeg"
                alt="Dali"
                style={{ minWidth: '100%', minHeight: '100%' }}
            />
            <img 
                id="maria-emoji" 
                src="../src/assets/maria.png" 
                alt="Maria Emoji" 
                style={{ minWidth: '300px', minHeight: '300px' }}
            />
            {messageList.map((item, index) => (
                <div key={index} className="message-container">
                    <Message text={item.text} sender={item.sender} />
                </div>
            ))}
        </div>
    )
}

export default Tree;