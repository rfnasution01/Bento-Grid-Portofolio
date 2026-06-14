export const bentoPortfolio = {
	brand: {
		name: "Alex Carter",
		role: "Product Designer & Front-End Developer",
		tagline: "Interactive Portfolio Experience",
	},
	hero: {
		title: "Hi, I'm Alex. I build products that feel magical.",
		subtitle:
			"Product Designer & Front-End Developer. Crafting clean interfaces for fast-growing tech companies.",
		profileImage:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
		primaryAction: { label: "View Projects", href: "#projects" },
		secondaryAction: {
			label: "Read Resume",
			href: "https://www.linkedin.com/in/alex-carter-product-designer/",
		},
	},
	about: {
		title: "About",
		body: "Driven by curiosity, I bridge the gap between complex code and intuitive design. When I'm not pixels-pushing, I build open-source tools.",
		location: "Based in Jakarta, ID — GMT+7",
		status: "Available for freelance work",
	},
	stats: [
		{ value: "12+", label: "Projects Completed" },
		{ value: "4+", label: "Years Experience" },
		{ value: "99%", label: "Client Satisfaction" },
	],
	skills: [
		{ name: "Figma", icon: "figma", color: "#F24E1E" },
		{ name: "React", icon: "react", color: "#61DAFB" },
		{ name: "TS", icon: "typescript", color: "#3178C6" },
		{ name: "Tailwind", icon: "tailwind", color: "#38BDF8" },
		{ name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
		{ name: "Node", icon: "node", color: "#10B981" },
		{ name: "Framer", icon: "framer", color: "#8B5CF6" },
		{ name: "Git", icon: "git", color: "#F05032" },
		{ name: "GraphQL", icon: "graphql", color: "#E10098" },
	],
	projects: [
		{
			title: "Linear Redesign",
			tags: ["Design", "Product"],
			image:
				"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
			href: "https://dribbble.com/search/linear-dashboard",
		},
		{
			title: "Stripe Analytics Platform",
			tags: ["Development", "API"],
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
			href: "https://github.com/topics/analytics-dashboard",
		},
		{
			title: "Notion AI Assistant",
			tags: ["AI", "UX-Research"],
			image:
				"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
			href: "https://www.figma.com/community/search?query=ai%20assistant",
		},
		{
			title: "SaaS Landing Page",
			tags: ["Webflow", "NoCode"],
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
			href: "https://webflow.com/made-in-webflow/saas",
		},
	],
	socials: [
		{ name: "GitHub", icon: "github", href: "https://github.com", accent: "#FFFFFF" },
		{ name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com", accent: "#0077B5" },
		{ name: "Dribbble", icon: "dribbble", href: "https://dribbble.com", accent: "#EA4C89" },
		{ name: "Email", icon: "mail", href: "mailto:hello@alexcarter.dev", accent: "#3B82F6" },
	],
	contact: {
		title: "Let's create something iconic together.",
		subtitle: "Have an idea or a project in mind? Drop me a message.",
		action: { label: "Let's Talk", href: "mailto:hello@alexcarter.dev" },
	},
} as const;
