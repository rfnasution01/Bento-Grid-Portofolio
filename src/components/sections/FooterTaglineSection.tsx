import { profile } from "@/data/profile";

export function FooterTaglineSection() {
	return (
		<footer
			id="footer"
			className="relative py-10 bg-[#0f0f1a] border-t border-white/10"
		>
			<div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
				<p className="text-sm text-gray-400">
					Designed & built with precision by{" "}
					<span className="text-white font-medium">{profile?.name}</span>.
				</p>
			</div>
		</footer>
	);
}
