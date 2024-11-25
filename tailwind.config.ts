import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
		extend: {
			colors: {
				main: '#A3E636',
				mainAccent: '#88cc19', // not needed for shadcn components
				overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
	
				// light mode
				bg: '#E0E7F1',
				text: '#000',
				border: '#000',
	
				// dark mode
				darkBg: '#2c312b',
				darkText: '#eeefe9',
				darkBorder: '#000',
				secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
			},
			borderRadius: {
				base: '7px'
			},
			boxShadow: {
				light: '4px 4px 0px 0px #000',
				dark: '4px 4px 0px 0px #000',
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '-4px',
			},
			fontWeight: {
				base: '600',
				heading: '900',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
		},
	},
		
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
