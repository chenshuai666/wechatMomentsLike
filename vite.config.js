import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
console.log(process.env.NODE_ENV)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react']
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@avatars': () => {
        // if (process.env.NODE_ENV === 'development') {
          return path.join(__dirname, 'src/assets/avatars')
        // } else {
        //   return path.join(__dirname, '/assets')
        // }
      }
    }
  }
})
