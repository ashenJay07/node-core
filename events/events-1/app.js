const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event listener for 'userRegistered'
myEmitter.on('userRegistered', (user) => {
  console.log(`New user registered: ${user.name}`);
  // Simulate sending a welcome email
  sendWelcomeEmail(user);
});

// Event listener for 'orderPlaced'
myEmitter.on('orderPlaced', (order) => {
  console.log(`Order placed by user: ${order.userId}, Order ID: ${order.id}`);
  // Simulate processing the order
  processOrder(order);
});

// Event listener for 'error'
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// Simulate sending a welcome email
function sendWelcomeEmail(user) {
  console.log(`Sending welcome email to ${user.email}`);
}

// Simulate processing the order
function processOrder(order) {
  console.log(`Processing order ID: ${order.id}`);
}

// Simulate a new user registration
const newUser = { name: 'John Doe', email: 'john.doe@example.com' };
myEmitter.emit('userRegistered', newUser);

// Simulate a new order placement
const newOrder = { id: '1234', userId: '5678', items: ['item1', 'item2'] };
myEmitter.emit('orderPlaced', newOrder);

// Emit an error event to see error handling in action
myEmitter.emit('error', new Error('Something went wrong!'));
