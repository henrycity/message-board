import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import ChannelPanel from "./component/ChannelPanel";
import MessageList from "./component/MessageList";
import MessageForm from "./component/MessageForm";
import './App.css';

class App extends Component {
    state = {
        channels: [],
        messages: [],
        selectedChannel: null,
        text: ''
    }

    componentDidMount = async () => {
        const {data} = await axios.get('/channels');
        this.setState({channels: data});
    }

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    onMessageSubmit = async () => {
        const {selectedChannel, messages, text} = this.state;
        await axios.put(`/channels/${selectedChannel}/message`, {
            message: text
        });
        const updatedMessages = messages.concat([text]);
        this.setState({text: '', messages: updatedMessages});
    }

    onClickChannel = async (id) => {
        const {data} = await axios.get(`/channels/${id}/messages`);
        this.setState({selectedChannel: id, messages: data});
    }

    render() {
        const {channels, messages, selectedChannel, text} = this.state;

        return (
            <Grid container>
                <Grid item xs={3}>
                    <ChannelPanel channels={channels} onClickChannel={this.onClickChannel}/>
                </Grid>
                {selectedChannel && (
                    <Grid item xs={9}>
                        <MessageList messages={messages}/>
                        <MessageForm
                            onMessageSubmit={this.onMessageSubmit}
                            onTextChange={this.onTextChange}
                            selectedChannel={selectedChannel}
                            text={text}
                        />
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default App;
