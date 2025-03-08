const autocannon = require('autocannon');

const url = 'http://localhost:3000';
const duration = 30; // 24 hours in seconds = 24 * 60 * 60

const instance = autocannon({
    url,
    duration,
    requests: [
        { method: 'GET', path: '/userRoutes' },
        { method: 'GET', path: '/sensorRoutes' }
    ]
}, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
});

autocannon.track(instance);