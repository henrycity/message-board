import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const MessageForm = ({ onMessageSubmit, onTextChange, selectedChannel, text }) => {
    return (
        <form noValidate autoComplete="off">
            <Grid container>
                <Grid item xs={9}>
                    <TextField
                        id="multiline-flexible"
                        label="Enter new message"
                        multiline
                        rowsMax="4"
                        value={text}
                        onChange={onTextChange}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button disabled={!text || !selectedChannel} onClick={onMessageSubmit}
                            variant="contained" color="primary">
                        SEND
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default MessageForm;