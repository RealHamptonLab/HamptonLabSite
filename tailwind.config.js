/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica'],
			},
			colors: {
				"gray": 'rgba(244, 244, 244, 0.8)',
				// "blue-gradient-1": "rgb(60, 120, 235)",
				// "blue-gradient-2": "rgb(90, 190, 245)"
				"hampton-blue-1": "#3B7EF2",
				"hampton-blue-2": "#409CEB",
				"hampton-blue-3": "#46BEE2",
				"hampton-white-1": "rgba(255, 255, 255, 0.8)"
			},
		},
	},
	plugins: [],
}