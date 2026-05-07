import { contact } from "@/data/contact";
import { contactIcons } from "@/components/icons/contactIcons";

export function ContactPersonSection() {
	return (
		<section id="contact" className="relative py-32 md:py-40 bg-gray-50">
			<div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
					{contact.title}
				</h2>

				<p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
					{contact.description}
				</p>

				{/* Contact Items */}
				<div className="mt-12 space-y-4 flex flex-col items-center justify-center text-gray-700">
					{contact.items.map((item, idx) => {
						const Icon = contactIcons[item.icon];

						return (
							<a
								key={idx}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 hover:text-primary transition"
							>
								<Icon className="text-lg" />
								<span className="font-medium">{item.value}</span>
							</a>
						);
					})}
				</div>

				{/* CTA Button */}
				{contact.items.find((i) => i.icon === "email") && (
					<div className="mt-12">
						<a
							href={contact.items.find((i) => i.icon === "email")?.link}
							className="inline-flex items-center justify-center
                px-8 py-4 rounded-xl
                bg-[#4b49ac] text-white font-semibold text-lg
                hover:opacity-90 hover:-translate-y-1
                transition-all duration-300"
						>
							Start a Conversation
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
