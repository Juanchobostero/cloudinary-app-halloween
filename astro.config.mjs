// @ts-check
import { defineConfig } from 'astro/config'
import fulldev from 'fulldev-ui/integration'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    experimental: { 
        contentLayer: true,
    },
    integrations: [
      fulldev({
        colors: {
          theme: 'dark',
          dark: {
            background: '#111110',
            base: '#6F6D66',
            brand: '#F50',
          },
          light: {
            background: '#EEEEEC',
            base: '#6F6D66',
            brand: '#F50',
          },
        },
      }),
    ],
  })
