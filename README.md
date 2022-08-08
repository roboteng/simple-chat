# Simple Chat Messenger

This project is split into two sections, both of which require node.
The client (whichh happened to be most of the code) and the server,
which was really only used to store the state between the two (or more) users.
The client is set up to talk to the server directly, instead of proxying, but this could be changed if needed.

## Client

This is built with `create-react-app`, so all the usual testing, starting commands work as expected, namely

- `npm start`
- `npm test`

On startup, the login page lets anyone through, as long as the username and password are the same.
Once connected, each client polls the server once a second to check for new messages.
I would like to change this to a webSocket implementation, as this seems like the perfect use case for it.

## Server

As mentioned before, there isn't too much here, since its just storing the chat history

THe same commands for the client, can be used here to start/test this portion

## Next steps

The biggest things I would want to work on in the future are:
- Switching from polling to webSockers. I haven't used webSockets yet, but I did some researching, and it seems like you can just attach a webSocket server onto an existing server, and use the `ws` protocol, instead of `http`/`https` and registering listeners to the list of messagers would automatically send update to all uusers in the room, using the listener pattern.
- Having persitant storage for the server. The simplest way to do this would just be to write messages to a file, but a better long term solution would be a databse. SQL database seems good enough, but a graph database might be a good fit here too. Users would be nodes, and conversations between users would be the edges.
- Some styling. I didn't do any custom styling in this, but adding some basics like slight colors and layout could would make it a lot nicer to look at

## Process

I tried writing as much as possible in test first TDD/BDD. I tested for the bahavior that I wanted to see, rather than testing implementation details.  The only times I really had to update tests was when I needed to switch to injecting a service into the `Messenger` component. I committed often, so my progress can be seen as I went.
