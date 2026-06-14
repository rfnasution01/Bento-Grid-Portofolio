import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
	FaDribbble,
	FaFigma,
	FaGithub,
	FaGitAlt,
	FaLinkedinIn,
	FaNodeJs,
	FaReact,
} from "react-icons/fa6";
import {
	SiFramer,
	SiGraphql,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

import { bentoPortfolio } from "@/data/bentoPortfolio";

const skillIcons = {
	figma: FaFigma,
	react: FaReact,
	typescript: SiTypescript,
	tailwind: SiTailwindcss,
	nextjs: SiNextdotjs,
	node: FaNodeJs,
	framer: SiFramer,
	git: FaGitAlt,
	graphql: SiGraphql,
} as const;

const socialIcons = {
	github: FaGithub,
	linkedin: FaLinkedinIn,
	dribbble: FaDribbble,
	mail: FiMail,
} as const;

export default function DashboardPage() {
	const data = bentoPortfolio;

	return (
		<main className="min-h-screen bg-[#0A0A0A] px-4 py-4 text-[#F5F5F5] md:px-8 md:py-8">
			<div className="mx-auto max-w-7xl">
				<header className="mb-4 flex items-center justify-between rounded-[20px] border border-[#262626] bg-[#141414]/80 px-5 py-4">
					<div>
						<p className="text-lg font-extrabold tracking-tight">{data.brand.name}</p>
						<p className="text-xs uppercase tracking-[0.28em] text-[#A3A3A3]">
							{data.brand.tagline}
						</p>
					</div>
					<a
						href={data.contact.action.href}
						className="bento-btn hidden border border-[#262626] text-[#F5F5F5] hover:border-[#3B82F6] md:inline-flex"
					>
						Contact
					</a>
				</header>

				<section className="grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-4 lg:grid-cols-12">
					<article className="bento-card accent-blue col-span-2 lg:col-span-6 lg:row-span-2">
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_42%)]" />
						<div className="relative z-10 flex h-full flex-col justify-between gap-8">
							<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
								<img
									src={data.hero.profileImage}
									alt={`${data.brand.name} profile portrait`}
									className="h-20 w-20 rounded-full border border-[#3B82F6]/40 object-cover"
								/>
								<div className="space-y-4">
									<p className="text-sm font-semibold text-[#3B82F6]">{data.brand.role}</p>
									<h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] md:text-5xl">
										{data.hero.title}
									</h1>
									<p className="max-w-xl text-sm leading-6 text-[#A3A3A3]">{data.hero.subtitle}</p>
								</div>
							</div>
							<div className="flex flex-wrap gap-3">
								<a className="bento-btn bg-[#3B82F6] text-[#0A0A0A] hover:bg-[#60A5FA]" href={data.hero.primaryAction.href}>
									{data.hero.primaryAction.label}
								</a>
								<a className="bento-btn border border-[#262626] text-[#F5F5F5] hover:border-[#3B82F6]" href={data.hero.secondaryAction.href} target="_blank" rel="noreferrer">
									{data.hero.secondaryAction.label}
								</a>
							</div>
						</div>
					</article>

					<article className="bento-card col-span-2 lg:col-span-3 lg:row-span-2">
						<div className="flex h-full flex-col justify-between gap-8">
							<div className="space-y-4">
								<h2 className="text-xl font-bold leading-[1.3]">{data.about.title}</h2>
								<p className="text-sm leading-6 text-[#A3A3A3]">{data.about.body}</p>
							</div>
							<div className="space-y-3 text-sm">
								<p className="flex items-center gap-2 text-[#F5F5F5]"><FiMapPin className="text-[#3B82F6]" /> {data.about.location}</p>
								<p className="flex items-center gap-2 text-[#A3A3A3]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" /></span>{data.about.status}</p>
							</div>
						</div>
					</article>

					<article className="bento-card accent-emerald col-span-2 lg:col-span-3">
						<div className="grid h-full grid-cols-3 items-center gap-3">
							{data.stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-mono text-3xl font-extrabold text-[#10B981] md:text-4xl">{stat.value}</p>
									<p className="mt-2 text-xs leading-4 text-[#A3A3A3]">{stat.label}</p>
								</div>
							))}
						</div>
					</article>

					<article className="bento-card col-span-2 lg:col-span-4 lg:row-span-2">
						<h2 className="mb-5 text-xl font-bold leading-[1.3]">Selected skills</h2>
						<div className="grid flex-1 grid-cols-3 gap-3">
							{data.skills.map((skill) => {
								const Icon = skillIcons[skill.icon];
								return (
									<div key={skill.name} className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl bg-[#0A0A0A]/35 transition hover:bg-[#1E1E1E]" style={{ ["--skill-color" as string]: skill.color }}>
										<Icon className="h-6 w-6 text-[#A3A3A3] transition group-hover:text-[var(--skill-color)]" />
										<span className="text-xs text-[#A3A3A3]">{skill.name}</span>
									</div>
								);
							})}
						</div>
					</article>

					<article id="projects" className="bento-card accent-purple col-span-2 lg:col-span-8 lg:row-span-2">
						<div className="mb-5 flex items-center justify-between gap-4">
							<h2 className="text-xl font-bold leading-[1.3]">Featured projects</h2>
							<span className="text-xs uppercase tracking-[0.24em] text-[#8B5CF6]">Case studies</span>
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							{data.projects.map((project) => (
								<a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-[#262626] bg-[#0A0A0A]/40 p-3 transition hover:border-[#8B5CF6] hover:bg-[#1E1E1E]">
									<img src={project.image} alt={`${project.title} project preview`} className="aspect-video w-full rounded-xl object-cover" />
									<div className="mt-3 flex items-end justify-between gap-3">
										<div>
											<h3 className="font-bold leading-[1.3]">{project.title}</h3>
											<p className="mt-1 text-xs text-[#A3A3A3]">{project.tags.map((tag) => `#${tag}`).join(" ")}</p>
										</div>
										<FiArrowRight className="text-[#8B5CF6] transition group-hover:translate-x-1" />
									</div>
								</a>
							))}
						</div>
					</article>

					<article className="bento-card col-span-2 lg:col-span-4">
						<div className="grid h-full grid-cols-4 gap-3">
							{data.socials.map((social) => {
								const Icon = socialIcons[social.icon];
								return (
									<a key={social.name} href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={social.name} className="flex min-h-24 items-center justify-center rounded-2xl border border-[#262626] bg-[#0A0A0A]/35 transition hover:scale-105 hover:border-[var(--social-color)]" style={{ ["--social-color" as string]: social.accent }}>
										<Icon className="h-6 w-6" />
									</a>
								);
							})}
						</div>
					</article>

					<article className="col-span-2 overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#3B82F6,#8B5CF6)] p-6 text-[#0A0A0A] lg:col-span-12">
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
							<div>
								<h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.03em]">{data.contact.title}</h2>
								<p className="mt-2 text-sm font-medium text-[#0A0A0A]/75">{data.contact.subtitle}</p>
							</div>
							<a href={data.contact.action.href} className="bento-btn inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F5F5F5] hover:scale-105">
								{data.contact.action.label} <FiArrowRight />
							</a>
						</div>
					</article>
				</section>
			</div>
		</main>
	);
}
