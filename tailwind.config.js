/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "320px",
			// => @media (min-width: 640px) { ... }

			md: "700px",
			// => @media (min-width: 1024px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				"tech-blue": "#1973E1",
				"tech-purple": "#4F1ECF",
				"ash-grey": "#111111",
			},
		},
	},
	plugins: [],
};
