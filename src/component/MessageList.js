import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const MessageList = ({ messages }) => {
    return (
        <List>
            {messages.map((message, index) => (
                <React.Fragment key={index}>
                    <ListItem>
                        {message}
                    </ListItem>
                    <Divider light/>
                </React.Fragment>
            ))}
        </List>
    )
}

export default MessageList;