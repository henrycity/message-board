import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

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
        const { data } = await axios.get(`/channels/${id}/messages`);
        this.setState({selectedChannel: id, messages: data});
    }

    render() {
        const {channels, messages, selectedChannel, text} = this.state;

        return (
            <Grid container>
                <Grid item xs={3}>
                    <List component="nav">
                        {channels.map(({id, description}) => (
                            <ListItem button component="a" href={`#${id}`} key={id}
                                      onClick={() => this.onClickChannel(id)}>
                                <ListItemText primary={description}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                {selectedChannel && (
                    <Grid item xs={9}>
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
                        <form noValidate autoComplete="off">
                            <TextField
                                id="multiline-flexible"
                                label="Enter new message"
                                multiline
                                rowsMax="4"
                                value={text}
                                onChange={this.onTextChange}
                                margin="normal"
                                fullWidth
                            />
                            <Button disabled={!text || !selectedChannel} onClick={this.onMessageSubmit}
                                    variant="contained" color="primary">
                                SEND
                            </Button>
                        </form>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default App;
