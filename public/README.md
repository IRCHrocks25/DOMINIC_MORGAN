# Public Static Files Directory

This directory contains static files that are served at the root path.

## Images Directory

Place your static images in the `images/` subdirectory.

### Usage

In your React components, reference images like this:

```tsx
// For images in public/images/
<img src="/images/your-image.jpg" alt="Description" />

// Or in CSS
background-image: url('/images/your-image.jpg');
```

### Notes

- Files in the `public` directory are copied as-is to the build output
- No need to import these files - use them directly with paths starting with `/`
- The `public` directory is served at the root URL path

