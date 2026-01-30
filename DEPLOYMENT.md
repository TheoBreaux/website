# Hostinger Deployment Guide

## Step 1: Build the Project

The project is already built. The production files are in the `dist` folder.

## Step 2: Upload to Hostinger

1. **Access Hostinger File Manager or use FTP**
   - Log into your Hostinger control panel (hPanel)
   - Navigate to File Manager or use an FTP client (FileZilla, WinSCP, etc.)

2. **Navigate to your domain's public folder**
   - Usually: `public_html` or `www` folder
   - This is where your website files should be uploaded

3. **Upload all files from the `dist` folder**
   - Upload ALL contents of the `dist` folder
   - Make sure to maintain the folder structure (especially the `assets` folder)

## Step 3: Configure .htaccess for React Router

Since this is a Single Page Application (SPA) with React Router, you need to configure your server to handle client-side routing.

Create or update a `.htaccess` file in your `public_html` folder with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

## Step 4: Verify Deployment

1. Visit your domain: `https://theobreaux.com`
2. Test all routes (About, Projects, Contact, etc.)
3. Check that images and assets load correctly
4. Test the contact form

## Important Notes

- **File Permissions**: Make sure files have proper permissions (644 for files, 755 for folders)
- **SSL Certificate**: Ensure SSL is enabled for HTTPS
- **Environment Variables**: If you're using EmailJS, make sure the environment variables are set in your build, or configure them in Hostinger's environment settings if available

## Troubleshooting

If routes don't work:
- Verify `.htaccess` file is uploaded and configured correctly
- Check that `mod_rewrite` is enabled on your Hostinger server
- Contact Hostinger support if needed

If assets don't load:
- Verify the `assets` folder was uploaded correctly
- Check file paths are correct (case-sensitive on Linux servers)
- Clear browser cache

