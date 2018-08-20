import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ChannelPanel = ({ channels, onClickChannel }) => {
    return (
        <List component="nav">
            {channels.map(({ id, description }) => (
                <ListItem button component="a" href={`#${id}`} key={id} onClick={() => onClickChannel(id)}>
                    <ListItemText primary={description} />
                </ListItem>
            ))}
        </List>
    )
}

export default ChannelPanel;