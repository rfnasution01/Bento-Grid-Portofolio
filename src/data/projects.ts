import type { ProjectsData } from "@/types/dashboard";

export const projects: ProjectsData = {
	title: "Selected Projects",
	description:
		"A collection of financial work focused on solving real business needs.",
	items: [
		{
			title: "Financial Reporting System",
			category: "Accounting System",
			description:
				"Monthly financial reports with clear structure and accurate data tracking.",
			technologies: [
				{ name: "Financial Records", icon: "records" },
				{ name: "Data Analysis", icon: "analytics" },
				{ name: "Reporting Workflow", icon: "automation" },
				{ name: "Dashboard Overview", icon: "dashboard" },
			],
		},
		{
			title: "Business Budget Planning",
			category: "Financial Planning",
			description:
				"Structured budgeting system to control expenses and improve cash flow.",
			technologies: [
				{ name: "Budget Tracking", icon: "dashboard" },
				{ name: "Team Collaboration", icon: "collaboration" },
				{ name: "Financial Control", icon: "security" },
			],
		},
		{
			title: "Tax Management System",
			category: "Tax & Compliance",
			description:
				"Organized tax records and reporting to ensure compliance and accuracy.",
			technologies: [
				{ name: "Tax Records", icon: "records" },
				{ name: "Payment Handling", icon: "payment" },
				{ name: "Financial Insights", icon: "analytics" },
			],
		},
	],
};
