import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		fontSize: {
			h2: ['clamp(32px, 3vw, 48px)', {
			  lineHeight: 'clamp(32px, 3vw, 48px)',
			  letterSpacing: '0',
			  fontWeight: '600',
			}],
			h5: ['14px', {
				lineHeight: '20px',
				letterSpacing: '0',
				fontWeight: '600',
			  }],
		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
			background50: 'hsl(var(--background50))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			shadow: {
				box: 'var(--primary-shadow)',
			}
  		},
		boxShadow: {
			main: 'var(--primary-shadow)',
		},
  		keyframes: {
  			slide: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			}
  		},
  		animation: {
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
