// Same as hello under api folder but also include a client side compoment

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/hello")({
  // 1. The Server API endpoint
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();
        return Response.json({ message: `Hello, ${body.name}` });
      },
    },
  },
  // 2. The React UI
  component: HelloComponent,
});

function HelloComponent() {
  const [reply, setReply] = useState("");

  return (
    <main className="p-10">
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => {
          fetch("/hello", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "TanStacker" }),
          })
            .then((res) => res.json())
            .then((data) => setReply(data.message));
        }}
      >
        Say Hello {reply && `- ${reply}`}
      </button>
    </main>
  );
}
