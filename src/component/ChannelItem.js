// @flow
import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type Channel = {
    id: number,
    description: string,
}

type Props = {
    channel: Channel,
    onClickChannel: (id: number) => Promise<mixed>,
}

const ChannelPanel = ({ channel: { id, description }, onClickChannel }: Props) => {
    const handleClickChannel = () => {
        onClickChannel(id)
    }

    return (
        <ListItem button component="a" href={`#${id}`} key={id} onClick={handleClickChannel}>
            <ListItemText primary={description} />
        </ListItem>
    )
}

export default ChannelPanel;