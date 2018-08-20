import * as React from 'react';

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