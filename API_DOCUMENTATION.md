# Crypto API Documentation

## Overview
This Laravel API provides authentication endpoints for a crypto application with Swagger documentation.

## Base URL
```
http://localhost:8000/api
```

## Swagger Documentation
Access the interactive API documentation at:
```
http://localhost:8000/api/documentation
```

## Authentication
The API uses Laravel Sanctum for token-based authentication. Include the token in the Authorization header:
```
Authorization: Bearer {your-token}
```

## Endpoints

### 1. User Registration
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "password_confirmation": "password123"
}
```

**Response (201):**
```json
{
    "status": true,
    "message": "User registered successfully",
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "created_at": "2025-09-29T20:27:25.000000Z",
            "updated_at": "2025-09-29T20:27:25.000000Z"
        },
        "token": "1|pbUjll3WGN95BjiHimtNNwhkhhoLJwBxDuciiWeP98b02004"
    }
}
```

### 2. User Login
**POST** `/auth/login`

Authenticate a user and return an access token.

**Request Body:**
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

**Response (200):**
```json
{
    "status": true,
    "message": "Login successful",
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "email_verified_at": null,
            "created_at": "2025-09-29T20:27:25.000000Z",
            "updated_at": "2025-09-29T20:27:25.000000Z"
        },
        "token": "2|yn8FkvX5E9CNDQ1UCq2goYAwxFHBl8volwrHeYGI714e6870"
    }
}
```

### 3. Get Current User
**GET** `/auth/me`

Get the authenticated user's information.

**Headers:**
```
Authorization: Bearer {your-token}
```

**Response (200):**
```json
{
    "status": true,
    "message": "User data retrieved successfully",
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "email_verified_at": null,
            "created_at": "2025-09-29T20:27:25.000000Z",
            "updated_at": "2025-09-29T20:27:25.000000Z"
        }
    }
}
```

### 4. User Logout
**POST** `/auth/logout`

Revoke the current access token.

**Headers:**
```
Authorization: Bearer {your-token}
```

**Response (200):**
```json
{
    "status": true,
    "message": "Logout successful"
}
```

## Error Responses

### Validation Error (422)
```json
{
    "status": false,
    "message": "Validation failed",
    "errors": {
        "field_name": ["Error message"]
    }
}
```

### Authentication Error (401)
```json
{
    "status": false,
    "message": "Invalid credentials"
}
```

### Unauthorized (401)
```json
{
    "message": "Unauthenticated"
}
```

## Testing the API

### Using cURL

1. **Register a new user:**
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","password_confirmation":"password123"}'
```

2. **Login:**
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

3. **Get user info (replace TOKEN with actual token):**
```bash
curl -X GET http://localhost:8000/api/auth/me \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer TOKEN"
```

## Database
- **Database:** MySQL
- **Database Name:** crypto
- **Host:** 127.0.0.1
- **Port:** 3306

## Features Implemented
✅ User Registration with validation
✅ User Login with token generation
✅ Protected routes with authentication
✅ Token-based authentication using Laravel Sanctum
✅ Swagger/OpenAPI documentation
✅ Comprehensive error handling
✅ JSON API responses
✅ Password hashing
✅ Email uniqueness validation
