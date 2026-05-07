import {
	AboutMeSection,
	ContactPersonSection,
	FooterTaglineSection,
	HeroSection,
	PersonalPhilosophySection,
	ProcessSection,
	ProjectSection,
	SkillSection,
	WhyWorkMeSection,
} from "@/components/sections";

export default function DashboardPage() {
	return (
		<div
			id="app-scroll"
			className="flex h-screen overflow-auto w-full bg-[#f7f7f7] flex-col gap-0"
		>
			<HeroSection />
			<AboutMeSection />
			<SkillSection />
			<ProjectSection />
			<WhyWorkMeSection />
			<ProcessSection />
			<PersonalPhilosophySection />
			<ContactPersonSection />
			<FooterTaglineSection />
		</div>
	);
}
