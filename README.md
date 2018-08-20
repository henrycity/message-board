#  Message board

## How to Run App

1. Git clone this repo: `git clone git@github.com:tvtri96/message-board.git`
2. Cd to the cloned repo: `cd message-board`
3. Install the Application with `yarn install`
4. Run app `yarn start`

####Note
Instead of getting all messages from one channel through `/messages/<channel>`. I think the endpoint should be `/channels/<channel/messages>` as getting messages should be under `channels` route. And also sending a new message to a channel needs an ID, so my endpoint is `/channels/:channel/message` instead of `/<channel>`.