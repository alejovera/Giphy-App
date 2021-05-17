import React, {useState} from 'react'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CloudIcon from '@material-ui/icons/Cloud';
import { CodeOutlined } from '@material-ui/icons';


function ListIcons(props) {

    const [dataIndex, setDataIndex] = useState([props.data])

    // console.log(dataIndex);
    const icons = [
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />,
        <CodeOutlined />,
        <CloudIcon />,
        <EmojiObjectsIcon />,
        <MeetingRoomIcon />
    ]

    
    return (
        <>
            {dataIndex.map((item) => {
                // console.log(dataIndex);
                // return (
                //     icons[item]
                // ) 
                for (let i = 0; i <= dataIndex; i++) {
                    return(
                        icons[item]
                    )
                }
            })}
        </>
    )
}

export default ListIcons
