import { io } from 'socket.io-client';

/**
 * Socket.io client instance for admin connections
 * Automatically handles authentication and reconnection
 */
let adminSocket = null;
let checkoutSocket = null;

/**
 * Initialize admin WebSocket connection
 * Must be called with a valid JWT token from AdminAuthContext
 * 
 * @param {string} token - JWT token from AdminAuthContext
 * @param {string} serverUrl - Backend URL (optional, defaults to API_URL)
 * @returns {Object} socket instance
 */
export const initializeAdminSocket = (token, serverUrl = null) => {
  if (adminSocket && adminSocket.connected) {
    console.log('🔌 Admin socket already connected, reusing existing connection');
    return adminSocket;
  }

  const API_URL = serverUrl || (import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app');
  console.log('🔌 Initializing admin socket connection to:', API_URL);

  adminSocket = io(`${API_URL}/admin`, {
    auth: {
      token: token
    },
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    transports: ['websocket', 'polling'],
    secure: API_URL.startsWith('https'),
    withCredentials: true,
    forceNew: false
  });

  adminSocket.on('connect', () => {
    console.log('✅ Admin socket connected successfully. Socket ID:', adminSocket.id);
  });

  adminSocket.on('disconnect', (reason) => {
    console.log('🔌 Admin socket disconnected. Reason:', reason);
    if (reason === 'io server disconnect') {
      console.log('🔄 Server disconnected, attempting to reconnect...');
      adminSocket.connect();
    }
  });

  adminSocket.on('connect_error', (error) => {
    console.error('❌ Admin socket connection error:', error.message);
  });

  adminSocket.on('reconnect', (attemptNumber) => {
    console.log('🔄 Admin socket reconnected after', attemptNumber, 'attempts');
  });

  adminSocket.on('reconnect_attempt', (attemptNumber) => {
    console.log('🔄 Admin socket reconnection attempt', attemptNumber);
  });

  adminSocket.on('reconnect_error', (error) => {
    console.error('❌ Admin socket reconnection error:', error.message);
  });

  adminSocket.on('reconnect_failed', () => {
    console.error('❌ Admin socket failed to reconnect after all attempts');
  });

  return adminSocket;
};

/**
 * Initialize checkout WebSocket connection for payment tracking
 * Does not require authentication - uses guest access
 * 
 * @param {string} serverUrl - Backend URL (optional, defaults to API_URL)
 * @returns {Object} socket instance
 */
export const initializeCheckoutSocket = (serverUrl = null) => {
  if (checkoutSocket && checkoutSocket.connected) {
    console.log('🔌 Checkout socket already connected, reusing existing connection');
    return checkoutSocket;
  }

  const API_URL = serverUrl || (import.meta.env.VITE_API_URL || 'https://startupmelabackend.vercel.app');
  console.log('🔌 Initializing checkout socket connection to:', API_URL);

  checkoutSocket = io(`${API_URL}/checkout`, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    transports: ['websocket', 'polling'],
    secure: API_URL.startsWith('https'),
    withCredentials: true,
    forceNew: false
  });

  checkoutSocket.on('connect', () => {
    console.log('✅ Checkout socket connected successfully. Socket ID:', checkoutSocket.id);
  });

  checkoutSocket.on('disconnect', (reason) => {
    console.log('🔌 Checkout socket disconnected. Reason:', reason);
    if (reason === 'io server disconnect') {
      console.log('🔄 Server disconnected, attempting to reconnect...');
      checkoutSocket.connect();
    }
  });

  checkoutSocket.on('connect_error', (error) => {
    console.error('❌ Checkout socket connection error:', error.message);
  });

  checkoutSocket.on('reconnect', (attemptNumber) => {
    console.log('🔄 Checkout socket reconnected after', attemptNumber, 'attempts');
  });

  checkoutSocket.on('reconnect_attempt', (attemptNumber) => {
    console.log('🔄 Checkout socket reconnection attempt', attemptNumber);
  });

  checkoutSocket.on('reconnect_error', (error) => {
    console.error('❌ Checkout socket reconnection error:', error.message);
  });

  checkoutSocket.on('reconnect_failed', () => {
    console.error('❌ Checkout socket failed to reconnect after all attempts');
  });

  return checkoutSocket;
};

/**
 * Get the admin socket instance
 * @returns {Object|null} socket instance or null if not initialized
 */
export const getAdminSocket = () => {
  return adminSocket;
};

/**
 * Get the checkout socket instance
 * @returns {Object|null} socket instance or null if not initialized
 */
export const getCheckoutSocket = () => {
  return checkoutSocket;
};

/**
 * Disconnect admin socket
 */
export const disconnectAdminSocket = () => {
  if (adminSocket) {
    adminSocket.disconnect();
    adminSocket = null;
  }
};

/**
 * Disconnect checkout socket
 */
export const disconnectCheckoutSocket = () => {
  if (checkoutSocket) {
    checkoutSocket.disconnect();
    checkoutSocket = null;
  }
};

/**
 * Subscribe to admin event
 * @param {string} eventName - Event name to listen to
 * @param {Function} callback - Callback function to execute when event fires
 */
export const subscribeToAdminEvent = (eventName, callback) => {
  if (!adminSocket) {
    console.warn('Admin socket not initialized. Call initializeAdminSocket first');
    return;
  }
  adminSocket.on(eventName, callback);
};

/**
 * Subscribe to checkout event
 * @param {string} eventName - Event name to listen to
 * @param {Function} callback - Callback function to execute when event fires
 */
export const subscribeToCheckoutEvent = (eventName, callback) => {
  if (!checkoutSocket) {
    console.warn('Checkout socket not initialized. Call initializeCheckoutSocket first');
    return;
  }
  checkoutSocket.on(eventName, callback);
};

/**
 * Unsubscribe from admin event
 * @param {string} eventName - Event name to stop listening to
 * @param {Function} callback - Callback function to remove
 */
export const unsubscribeFromAdminEvent = (eventName, callback) => {
  if (adminSocket) {
    adminSocket.off(eventName, callback);
  }
};

/**
 * Unsubscribe from checkout event
 * @param {string} eventName - Event name to stop listening to
 * @param {Function} callback - Callback function to remove
 */
export const unsubscribeFromCheckoutEvent = (eventName, callback) => {
  if (checkoutSocket) {
    checkoutSocket.off(eventName, callback);
  }
};

/**
 * Hook: Listen to admin socket events with automatic cleanup
 * Usage: useAdminSocketEvent('event:name', (data) => { ... })
 * 
 * @param {string} eventName - Event name to listen to
 * @param {Function} callback - Callback function to execute
 */
export const useAdminSocketEvent = (eventName, callback) => {
  // This is meant to be used with React hooks in components
  // Return a cleanup function
  return () => {
    if (adminSocket) {
      adminSocket.off(eventName, callback);
    }
  };
};

/**
 * Hook: Listen to checkout socket events with automatic cleanup
 * Usage: useCheckoutSocketEvent('event:name', (data) => { ... })
 * 
 * @param {string} eventName - Event name to listen to
 * @param {Function} callback - Callback function to execute
 */
export const useCheckoutSocketEvent = (eventName, callback) => {
  // This is meant to be used with React hooks in components
  // Return a cleanup function
  return () => {
    if (checkoutSocket) {
      checkoutSocket.off(eventName, callback);
    }
  };
};

/**
 * Join a specific order tracking room (for checkout page)
 * @param {string} orderId - Order ID to track
 */
export const joinOrderTracking = (orderId) => {
  if (checkoutSocket) {
    checkoutSocket.emit('join:order', orderId);
    console.log(`📍 Joined order tracking: ${orderId}`);
  }
};

/**
 * Leave a specific order tracking room
 * @param {string} orderId - Order ID to stop tracking
 */
export const leaveOrderTracking = (orderId) => {
  if (checkoutSocket) {
    checkoutSocket.emit('leave:order', orderId);
    console.log(`📍 Left order tracking: ${orderId}`);
  }
};

export default {
  initializeAdminSocket,
  initializeCheckoutSocket,
  getAdminSocket,
  getCheckoutSocket,
  disconnectAdminSocket,
  disconnectCheckoutSocket,
  subscribeToAdminEvent,
  subscribeToCheckoutEvent,
  unsubscribeFromAdminEvent,
  unsubscribeFromCheckoutEvent,
  useAdminSocketEvent,
  useCheckoutSocketEvent,
  joinOrderTracking,
  leaveOrderTracking
};
