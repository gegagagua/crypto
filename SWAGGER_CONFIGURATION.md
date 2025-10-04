# Swagger API Documentation Configuration

## 📝 Overview

Swagger API documentation ავტომატურად იყენებს თქვენი აპლიკაციის URL-ს `.env` ფაილიდან.

## ⚙️ Configuration

### 1. `.env` ფაილში დააყენეთ `APP_URL`

```bash
# Local Development
APP_URL=http://localhost:8000

# Production
APP_URL=https://yourdomain.com

# Staging
APP_URL=https://staging.yourdomain.com
```

### 2. Swagger Documentation-ის Regenerate

ყოველ ჯერზე როცა შეცვლით `APP_URL`-ს, გაუშვით:

```bash
php artisan l5-swagger:generate
```

## 🔍 როგორ მუშაობს

1. **`config/l5-swagger.php`** - აყენებს constant-ს:
   ```php
   'L5_SWAGGER_CONST_HOST' => env('APP_URL', 'http://localhost:8000') . '/api'
   ```

2. **`AuthController.php`** - იყენებს constant-ს:
   ```php
   /**
    * @OA\Server(
    *     url=L5_SWAGGER_CONST_HOST,
    *     description="API Server"
    * )
    */
   ```

3. **Generated `api-docs.json`** - ინახავს ფაქტობრივ URL-ს:
   ```json
   {
     "servers": [
       {
         "url": "http://localhost:8000/api",
         "description": "API Server"
       }
     ]
   }
   ```

## 📍 Swagger UI Access

- **Local**: http://localhost:8000/api/documentation
- **Production**: https://yourdomain.com/api/documentation

## 🚀 Quick Setup

```bash
# 1. Copy .env.example to .env
cp .env.example .env

# 2. Set your APP_URL
# Edit .env file and set APP_URL=http://your-domain.com

# 3. Generate Swagger docs
php artisan l5-swagger:generate

# 4. Access Swagger UI
# Open: http://your-domain.com/api/documentation
```

## 🔧 Different Environments

### Development
```bash
APP_URL=http://localhost:8000
```

### Docker
```bash
APP_URL=http://localhost:8080
```

### Production
```bash
APP_URL=https://api.yourdomain.com
```

### With Port
```bash
APP_URL=http://localhost:3000
```

## ✅ Verification

1. შეამოწმეთ `.env` ფაილი:
   ```bash
   cat .env | grep APP_URL
   ```

2. Regenerate Swagger:
   ```bash
   php artisan l5-swagger:generate
   ```

3. შეამოწმეთ generated JSON:
   ```bash
   cat storage/api-docs/api-docs.json | grep -A 5 "servers"
   ```

4. გახსენით Swagger UI და შეამოწმეთ "Servers" dropdown

## 📝 Notes

- ✅ URL ავტომატურად იცვლება environment-ის მიხედვით
- ✅ არ არის საჭირო code-ის შეცვლა სხვადასხვა environment-ებისთვის
- ✅ `/api` ავტომატურად ემატება base URL-ს
- ⚠️ არ დაგავიწყდეთ `l5-swagger:generate` გაშვება URL-ის შეცვლის შემდეგ

## 🐛 Troubleshooting

### Problem: Swagger shows wrong URL

**Solution:**
```bash
# Clear config cache
php artisan config:clear

# Regenerate Swagger
php artisan l5-swagger:generate

# Clear browser cache
# Refresh Swagger UI (Ctrl+Shift+R or Cmd+Shift+R)
```

### Problem: Changes not reflected

**Solution:**
```bash
# Make sure .env is correct
cat .env | grep APP_URL

# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear

# Regenerate
php artisan l5-swagger:generate
```

## 🎉 Result

ახლა Swagger API Documentation ავტომატურად იყენებს სწორ URL-ს თქვენი environment-ის მიხედვით!
