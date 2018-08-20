// @flow
import * as React from 'react';
import List from '@material-ui/core/List';

import ChannelItem from './ChannelItem';

type Channel = {
    id: number,
    description: string,
}

type Props = {
    channels: Array<Channel>,
    onClickChannel: (id: number) => Promise<mixed>,
}

const ChannelPanel = ({ channels, onClickChannel }: Props) => {
    return (
        <List component="nav">
            {channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} onClickChannel={onClickChannel} />
            ))}
        </List>
    )
}

export default ChannelPanel;