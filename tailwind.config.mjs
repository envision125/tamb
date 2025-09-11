/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'atkinson': ['Atkinson', 'sans-serif'],
			},
			colors: {
				primary: '#e01b2a',
				secprimary: '#075594',
				secondary: '#f3d814',
				chiva: '#b01c2e',
				accent: '#022241',
				'accent-light': '#00468c',
			},
		},
	},
	plugins: [],
}
