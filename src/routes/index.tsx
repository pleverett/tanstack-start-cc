import {
  createFileRoute,
  type ErrorComponentProps,
  // useRouter,
} from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard.tsx";
import { getPokemonFn } from "#/server/pokemon.ts";

export const Route = createFileRoute("/")({
  component: App,
  pendingComponent: () => <div className="p-14 text-center">Loding Pokemon...</div>,
  pendingMs: 300,
  loader: async () => {
    const data = await getPokemonFn();
    return data;
  },
  errorComponent: ({ error }: ErrorComponentProps) => {
    // const router = useRouter();

    return (
      <div className="p-14">
        <p>Oops! {(error as Error).message}</p>
      </div>
    );
  },
  notFoundComponent: () => {
    return <div className="p-14">Nothing found here!</div>;
  },
});

function App() {
  const data = Route.useLoaderData();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>

      <ul className="mt-6 list-none p-0 space-y-5">
        {data.results.map((pokemon: { name: string }) => (
          <li key={pokemon.name}>
            <SkillCard name={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
