/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: (theme) => ({
				dark: {
				  css: {
					'code::before': {
					  content: '""'
					},
					'code::after': {
					  content: '""'
					},
					color: 'white',
					strong: {
					  color: 'white',
					},
					a: {
					  color: 'white',
					  '&:hover': {
						color: 'white',
					  },
					},
					blockquote: {
					  color: 'white',
					},
					code: {
					  color: 'white',
					},
					h1: {
					  color: 'white',
					},
					h2: {
					  color: 'white',
					},
					h3: {
					  color: 'white',
					},
					h4: {
					  color: 'white',
					},
					h5: {
					  color: 'white',
					},
					h6: {
					  color: 'white',
					},
					th: {
					  color: 'white'
					}
				  },
				},
			  }),
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
