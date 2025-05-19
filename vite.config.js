import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Include if you're using React

export default defineConfig({
  plugins: [
    react() // Include if you're using React
  ],
  build: {
    // Increase warning limit if you can't reduce bundle size further
    chunkSizeWarningLimit: 1000, // Set to 1000 kB (1 MB)

    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js and related libraries into their own chunk
          'vendor-three': [
            'three',
            'three/examples/jsm/loaders/GLTFLoader',
            'three/examples/jsm/controls/OrbitControls'
            // Add any other three.js related imports you're using
          ],
          // Separate vendor files from application code
          'vendor-react': ['react', 'react-dom'],
          // Add more chunks as needed for other large dependencies
        }
      }
    }
  },
  // Optimize loading of static assets
  assetsInclude: ['**/*.glb', '**/*.gltf'],

  // Ensure your static files are served correctly
  publicDir: 'public',
})