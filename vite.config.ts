import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/setupTests',
		mockReset: true,
	},
	resolve: {
		alias: {
			'@components': '/src/components/',
			'@ui': '/src/ui/',
			'@styles': '/src/styles/',
			'@app': '/src/app/',
			'@store': '/src/store/',
			'@hooks': '/src/hooks/',
			'@interfaces': '/src/interfaces/',
			'@helpers': '/src/helpers/',
			'@services': '/src/services/',
			'@constants': '/src/constants/',
			'@sagas': '/src/sagas/',
		},
	},
});
