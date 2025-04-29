import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@auth': path.resolve(__dirname, 'src/auth'),
      '@firebase': path.resolve(__dirname, 'src/firebase'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@schemas': path.resolve(__dirname, 'src/schemas'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@helper': path.resolve(__dirname, 'src/helper'),
      '@redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    watch: {
      ignored: ['**/db.json']
    }
  }
})
