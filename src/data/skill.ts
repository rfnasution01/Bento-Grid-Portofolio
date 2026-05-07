import type { SkillsData } from "@/types/dashboard";

export const skills: SkillsData = {
	title: "What I Do",
	description:
		"I manage and improve financial systems with accuracy and clarity.",
	groups: [
		{
			title: "What I Handle",
			items: [
				{ name: "Financial Statements", icon: "analytics" },
				{ name: "Budget Planning", icon: "dashboard" },
				{ name: "Cash Flow Management", icon: "system" },
			],
		},
		{
			title: "What I Improve",
			items: [
				{ name: "Financial Accuracy", icon: "security" },
				{ name: "Reporting Efficiency", icon: "automation" },
				{ name: "Cost Optimization", icon: "integration" },
			],
		},
		{
			title: "Business Capabilities",
			items: [
				{ name: "Tax Management", icon: "payment" },
				{ name: "Financial Compliance", icon: "security" },
				{ name: "Business Insights", icon: "strategy" },
			],
		},
	],
};
