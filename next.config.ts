import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'figma-alpha-api.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    const components = [
      'accordion',
      'alert',
      'alert-dialog',
      'aspect-ratio',
      'avatar',
      'badge',
      'breadcrumb',
      'button',
      'button-group',
      'calendar',
      'card',
      'carousel',
      'checkbox',
      'collapsible',
      'command',
      'context-menu',
      'dialog',
      'drawer',
      'dropdown-menu',
      'form',
      'hover-card',
      'input',
      'input-otp',
      'label',
      'menubar',
      'navigation-menu',
      'pagination',
      'popover',
      'progress',
      'radio-group',
      'scroll-area',
      'select',
      'separator',
      'sheet',
      'skeleton',
      'slider',
      'sonner',
      'switch',
      'table',
      'tabs',
      'textarea',
      'toggle',
      'toggle-group',
      'tooltip',
    ]
    return [
      {
        source: '/components',
        destination: '/docs/components',
        permanent: true,
      },
      ...components.map((name) => ({
        source: `/${name}`,
        destination: `/docs/components/${name}`,
        permanent: true,
      })),
    ]
  },
};

export default nextConfig;
