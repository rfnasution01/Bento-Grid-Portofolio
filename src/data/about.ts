import type { AboutMe } from "@/types/dashboard";

export const aboutMe: AboutMe = {
	title: "About Me",
	headline: {
		primary: "I Manage Finances,",
		secondary: "Not Just Numbers.",
	},
	introduction: {
		name: "Budi Santoso",
		text: "an accountant focused on building accurate, transparent, and reliable financial reports.",
	},
	description:
		"I specialize in financial reporting and analysis, with strong attention to accuracy and compliance. My approach is simple: reduce errors, deliver clear insights.",
	mission:
		"My mission is to turn financial data into reliable business decisions.",
	experiences: [
		{
			title: "Financial Reporting",
			description: "Accurate and structured financial statements.",
			icon: "ledger",
		},
		{
			title: "Budget Management",
			description: "Planning and controlling business expenses.",
			icon: "dashboard",
		},
		{
			title: "Tax Compliance",
			description: "Ensuring compliance with tax regulations.",
			icon: "payment",
		},
		{
			title: "Financial Analysis",
			description: "Insights to support business decisions.",
			icon: "infrastructure",
		},
	],
};
