var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'client@example.com',
        text: 'Hello from the client side'
    });
});

socket.on('newMessage', function (email) {
    console.log('New message:', email);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});