import { useEffect, useState } from "react";
import messageString from "../MessageData.txt";
import Message from "../Message/Message.jsx";

const Tree = () => {

    const [messageList, setMessageList] = useState([]);
    console.log(messageList);

    useEffect(() => {
        const messages = messageString.split("\n").filter(line => line.trim() !== "");
        setMessageList(messages);
        setMessageList()
    }, [])

    return (
        <>
        {messageList && messageList.map((item) => {
            <Message message={item} />
        })}
        </>
    )

}

export default Tree;
