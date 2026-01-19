/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				slate: {
					950: '#0f172a',
				},
				neon: '#00ff88',
				amber: '#ffb700',
				muted: '#94a3b8',
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				glow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.8)' },
				},
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' },
				},
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.5 },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				glow: 'glow 2s ease-in-out infinite',
				glitch: 'glitch 0.3s ease-in-out',
				pulse: 'pulse 2s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
