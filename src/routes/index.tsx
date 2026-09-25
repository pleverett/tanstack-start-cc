import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard.tsx";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
			<ul className="mt-6 list-none p-0 space-y-5">
				<li>
					<SkillCard name="Tanstack Start" />
				</li>
				<li>
					<SkillCard name="TypeScript" />
				</li>
				<li>
					<SkillCard name="MongoDB" />
				</li>
			</ul>
		</div>
	);
}
