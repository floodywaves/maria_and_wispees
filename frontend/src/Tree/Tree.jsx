import { useEffect, useState } from "react";
import StringMessages from "../message.json";
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
    }, [])

    return (
        <div className="tree-main">
            {messageList.map((item, index) => (
                <Message key={index} text={item.text} sender={item.sender} />
            ))}
        </div>
    )
}

export default Tree;