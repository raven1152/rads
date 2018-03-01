# RADS socket.io Realtime Server

## Real-time Analytics, Dashboards, and Signage

_** This is a work in progress, and not intended to be used as production software._

This project requires a node environment

### The following sub-projects make up this project

* Angular UI - ./rads
* Node.js Realtime Server - ./rads-io

## About the Console page

The console page is adapted from a socket.io chat example.  Eventually this will evolve into real-time server-initiated page updates so that graphics, table data, and other content can move dynamically as business processes update their data.  The following is my current thinking for a command architecture that might eventually support the real-time feature.

#### Broadcast Messages -- received by all terminals.

  Forms:
    /broadcast [message]
     -or-
    [message]

  Examples:
    The quick brown fox jumped over the lazy dog.
    /broadcast The quick brown fox jumped over the lazy dog.

#### Client Commands -- command received by all terminals, confirmation received by the terminal that sent the command.

  Forms:
    /[command name] [command targets] --[parameter name] [parameter value]

  Examples:
    /refresh data ticker --nodes axcustulds01 axcustulds04 --period 60s

#### Server Commands -- command received by a server, confirmation received by the terminal that sent the command.

  Forms:
    /server [targets] /[host command string]

  Examples:
    /server reddis.axc.com maven.axc.com /sudo /etc/init.d/mysql restart
