import { useEffect, useState } from "react";
import StringMessages from "../message.json";
import './Tree.css'
// import Message from "../Message/Message.jsx";

const Tree = () => {
    const [messageList, setMessageList] = useState([]);

    const Message = ({ text, sender, index }) => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        }

        return (
            <div className={`message-general message-${index}-background`} onClick={handleClick}>
                {open ? (
                    <div className="message-text">
                        <div className="inner-text">
                        <p>{text}</p>
                        <p>{sender}</p>
                        </div>
                    </div>
                ) : (
                    <div className="click-text">click!</div>
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
                src="../src/assets/dali2.png"
                alt="Dali"
                style={{ minWidth: '100vw', minHeight: '100vh' }}
            />
            <div className="maria-background">
                <img 
                    id="maria-emoji" 
                    src="../src/assets/maria.png" 
                    alt="Maria Emoji" 
                    style={{ minWidth: '200px', minHeight: '200px' }}
                />
            </div>
            {messageList.map((item, index) => (
                <div key={index} className={`message-holder-${index}`}>
                    <Message index={index} text={item.text} sender={item.sender} />
                </div>
            ))}
        </div>
    )
}

export default Tree;