let messages = [];

// peudo-enum
const messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

class Message {
    constructor(type, user, message) {
        this.type = type;
        this.user = user;
        this.message = message;
    }
}

/**
 * @param {Message} message 
 * @returns {Element}
 */
function createMessageElement(message) {
    let messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    let messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

/**
 * @param {Event} event 
 * @returns {Void}
 */
function addMessageHandler(event) {
    // data
    let user, type;
    let messageInput = document.getElementById('message-input');
    let messagesContainerEl = document.getElementById('message-container');

    // figure out which button was pressed
    // ??? maybe seperate into separate handlers
    switch(event.target.id) {
        case 'send-button':
            user = 'John';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Jane';
            type = messageType.in;
            break;
        default:
            user = 'Unknown';
            type = messageType.unknown;
            break;
    }

    // don't send a blank message
    if (messageInput.value != '') {
        let message = new Message(type, user, messageInput.value);
        messages.push(messages);

        let el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

// when the body loads, execute following
document.body.onload = function() {
    // apply handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
};