# Deployment Guide - Cloudflare Pages

This guide will help you deploy your Microbiome Reset website to Cloudflare Pages.

## Prerequisites

- GitHub account (you already have this!)
- Cloudflare account (free tier is sufficient)
- Your code pushed to GitHub

## Step 1: Push Your Code to GitHub

Your code is already in the repository. Make sure it's pushed:

```bash
git add .
git commit -m "Initial website build"
git push origin main
```

## Step 2: Set Up Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign up or log in to your account
3. Navigate to **Pages** in the sidebar
4. Click **Create a project**
5. Click **Connect to Git**

## Step 3: Connect Your Repository

1. Authorize Cloudflare to access your GitHub account
2. Select the `Dr.Q-AIHealth-pro` repository
3. Click **Begin setup**

## Step 4: Configure Build Settings

Use these settings:

- **Production branch**: `main` (or your default branch)
- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)

### Environment Variables

Add these if needed:
- `NODE_VERSION`: `20`

## Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 2-5 minutes)
3. Your site will be live at: `https://your-project.pages.dev`

## Step 6: Custom Domain (Optional)

To use a custom domain:

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add your domain
5. Cloudflare will automatically provision an SSL certificate

## Automatic Deployments

Every time you push to your GitHub repository:
- **Main branch** → Automatically deploys to production
- **Other branches** → Create preview deployments

## Build Commands Reference

```bash
# Install dependencies
npm install

# Run development server locally
npm run dev

# Build for production
npm run build

# Preview Cloudflare Pages build locally
npm run preview
```

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure Node version is set to 20
- Review build logs in Cloudflare dashboard

### Images Not Loading

- Make sure `next.config.js` has `images: { unoptimized: true }`
- Check image paths are correct

### Routing Issues

- Verify `output: 'export'` is in `next.config.js`
- Check that all pages are in the `src/app` directory

## Need Help?

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
