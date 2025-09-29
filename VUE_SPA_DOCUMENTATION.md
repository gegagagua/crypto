# Vue 2 SPA Documentation

## Overview
This Vue 2 Single Page Application (SPA) integrates with the Laravel API backend to provide a complete authentication system for the crypto application.

## Architecture

### Frontend Stack
- **Vue 2.7.16** - Progressive JavaScript framework
- **Vue Router 3.6.5** - Client-side routing
- **Vuex 3.6.2** - State management
- **Axios 1.6.0** - HTTP client for API communication
- **Vite** - Build tool and development server

### Backend Integration
- **Laravel API** - RESTful API endpoints
- **Laravel Sanctum** - Token-based authentication
- **MySQL Database** - Data persistence

## Project Structure

```
resources/js/
├── components/
│   ├── App.vue                 # Main application component
│   ├── Dashboard.vue           # Dashboard page
│   └── auth/
│       ├── Login.vue          # Login form
│       └── Register.vue       # Registration form
├── router/
│   └── index.js               # Vue Router configuration
├── store/
│   ├── index.js               # Vuex store
│   └── modules/
│       └── auth.js            # Authentication module
├── app.js                     # Main application entry point
└── bootstrap.js               # Bootstrap configuration
```

## Features

### 🔐 Authentication System
- **User Registration** - Create new accounts with validation
- **User Login** - Secure authentication with tokens
- **User Logout** - Token revocation
- **Protected Routes** - Route guards for authenticated users
- **Persistent Sessions** - Token storage in localStorage

### 🎨 User Interface
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean and intuitive interface
- **Loading States** - User feedback during API calls
- **Error Handling** - Comprehensive error display
- **Form Validation** - Real-time validation feedback

### 🔄 State Management
- **Centralized State** - Vuex store for application state
- **Authentication State** - User data and login status
- **API Integration** - Seamless backend communication
- **Error Handling** - Global error management

## API Integration

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Request Configuration
```javascript
// Axios configuration
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Token authentication
const token = localStorage.getItem('auth_token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
```

## Routing

### Route Configuration
```javascript
const routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/login', component: Login, meta: { requiresGuest: true } },
    { path: '/register', component: Register, meta: { requiresGuest: true } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
];
```

### Route Guards
- **Authentication Guard** - Redirects unauthenticated users to login
- **Guest Guard** - Redirects authenticated users to dashboard
- **Automatic Redirects** - Smart navigation based on auth state

## State Management

### Vuex Store Structure
```javascript
// Auth module state
const state = {
    user: null,
    token: localStorage.getItem('auth_token'),
    isAuthenticated: false
};

// Actions
- login(credentials)     // Authenticate user
- register(userData)     // Register new user
- logout()              // Logout user
- fetchUser()           // Get current user data
- initializeAuth()      // Initialize auth state
```

## Components

### App.vue
- **Main Layout** - Navigation and routing container
- **Authentication State** - Global auth status display
- **Loading Overlay** - Global loading indicator
- **Navigation** - Dynamic navigation based on auth state

### Login.vue
- **Login Form** - Email and password input
- **Validation** - Real-time form validation
- **Error Display** - API error handling
- **Loading States** - Submit button states

### Register.vue
- **Registration Form** - Complete user registration
- **Password Confirmation** - Password matching validation
- **Validation** - Comprehensive form validation
- **Error Handling** - Detailed error messages

### Dashboard.vue
- **User Information** - Display user account details
- **Crypto Features** - Placeholder for crypto functionality
- **API Status** - Connection status indicator
- **Responsive Layout** - Mobile-friendly design

## Development

### Getting Started
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

### Development Workflow
1. **Hot Reload** - Vite provides instant hot module replacement
2. **API Integration** - Axios handles all API communication
3. **State Management** - Vuex manages application state
4. **Routing** - Vue Router handles client-side navigation

## Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
    plugins: [
        createVuePlugin(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
});
```

### Environment Variables
- **API Base URL** - Configured to `/api`
- **CSRF Token** - Automatically handled by Laravel
- **Authentication** - Token-based with Sanctum

## Security Features

### Authentication Security
- **Token-based Auth** - Secure API authentication
- **Token Storage** - Secure localStorage implementation
- **Route Protection** - Automatic route guards
- **CSRF Protection** - Laravel CSRF token integration

### Input Validation
- **Client-side Validation** - Real-time form validation
- **Server-side Validation** - API validation responses
- **Error Handling** - Comprehensive error display
- **XSS Protection** - Vue's built-in XSS protection

## Browser Support

### Modern Browsers
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Features Used
- ES6+ JavaScript
- CSS Grid and Flexbox
- Fetch API (via Axios)
- Local Storage
- History API (Vue Router)

## Performance

### Optimization Features
- **Code Splitting** - Automatic code splitting with Vite
- **Tree Shaking** - Unused code elimination
- **Minification** - Production build optimization
- **Asset Optimization** - Optimized CSS and JS bundles

### Bundle Sizes
- **CSS Bundle** - ~6.5KB (gzipped: ~1.5KB)
- **JS Bundle** - ~186KB (gzipped: ~65KB)
- **Total Bundle** - ~192KB (gzipped: ~66KB)

## Testing

### Manual Testing
1. **Registration Flow** - Test user registration
2. **Login Flow** - Test user authentication
3. **Protected Routes** - Test route guards
4. **Logout Flow** - Test user logout
5. **Error Handling** - Test error scenarios

### API Integration Testing
- **Authentication** - Test token-based auth
- **Error Responses** - Test API error handling
- **Loading States** - Test loading indicators
- **State Management** - Test Vuex state updates

## Deployment

### Production Build
```bash
npm run build
```

### Laravel Integration
- **Asset Compilation** - Vite compiles assets
- **Route Handling** - Laravel serves SPA for all routes
- **API Separation** - API routes handled separately
- **Static Assets** - Optimized static file serving

## Troubleshooting

### Common Issues
1. **Build Errors** - Check Tailwind CSS compatibility
2. **API Errors** - Verify Laravel API is running
3. **Routing Issues** - Check Vue Router configuration
4. **State Issues** - Verify Vuex store setup

### Debug Tools
- **Vue DevTools** - Browser extension for debugging
- **Network Tab** - Monitor API requests
- **Console Logs** - Check for JavaScript errors
- **Laravel Logs** - Check server-side errors

## Future Enhancements

### Planned Features
- **Crypto Portfolio** - Real cryptocurrency data
- **Trading Interface** - Buy/sell functionality
- **Market Data** - Real-time price updates
- **User Preferences** - Customizable settings
- **Notifications** - Real-time alerts
- **Mobile App** - React Native or Flutter

### Technical Improvements
- **Vue 3 Migration** - Upgrade to Vue 3
- **TypeScript** - Add type safety
- **Testing Suite** - Unit and integration tests
- **PWA Features** - Progressive Web App capabilities
- **Performance Monitoring** - Real-time performance tracking
