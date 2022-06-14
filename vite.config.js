import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
	build: {
		rollupOptions: {
			plugins: [
				dynamicImportVariables()
			],
		}
	}
})