import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		fontSize: {
			h2: ['32px', {
			  lineHeight: '48px',
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
  			// secondary: {
  			// 	DEFAULT: 'hsl(var(--secondary))',
  			// 	foreground: 'hsl(var(--secondary-foreground))'
  			// },
  			// destructive: {
  			// 	DEFAULT: 'hsl(var(--destructive))',
  			// 	foreground: 'hsl(var(--destructive-foreground))'
  			// },
  			// muted: {
  			// 	DEFAULT: 'hsl(var(--muted))',
  			// 	foreground: 'hsl(var(--muted-foreground))'
  			// },
  			// accent: {
  			// 	DEFAULT: 'hsl(var(--accent))',
  			// 	foreground: 'hsl(var(--accent-foreground))'
  			// },
  			// popover: {
  			// 	DEFAULT: 'hsl(var(--popover))',
  			// 	foreground: 'hsl(var(--popover-foreground))'
  			// },
  			// card: {
  			// 	DEFAULT: 'hsl(var(--card))',
  			// 	foreground: 'hsl(var(--card-foreground))'
  			// },
  			// sidebar: {
  			// 	DEFAULT: 'hsl(var(--sidebar-background))',
  			// 	primary: 'hsl(var(--sidebar-primary))',
  			// 	accent: 'hsl(var(--sidebar-accent))',
  			// 	border: 'hsl(var(--sidebar-border))',
  			// 	ring: 'hsl(var(--sidebar-ring))'
  			// },
  		},
		boxShadow: {
			main: 'var(--primary-shadow)',
		},
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// },
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
  			slide: 'slide 40s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
