const envVars = [
  { key: "first", value: process.env.first },
  { key: "second", value: process.env.second },
  { key: "third", value: process.env.third },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <h1
          className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50"
          data-testid="env-heading"
        >
          Environment variables
        </h1>
        <dl className="mt-6 space-y-3" data-testid="env-list">
          {envVars.map(({ key, value }) => (
            <div
              key={key}
              className="flex items-center justify-between rounded-lg bg-zinc-50 px-4 py-3 dark:bg-zinc-900"
              data-testid={`env-row-${key}`}
            >
              <dt
                className="font-mono text-sm text-zinc-500 dark:text-zinc-400"
                data-testid={`env-key-${key}`}
              >
                {key}
              </dt>
              <dd
                className="font-mono text-sm font-medium text-black dark:text-zinc-50"
                data-testid={`env-value-${key}`}
              >
                {value ?? "undefined"}
              </dd>
            </div>
          ))}
        </dl>
      </main>
    </div>
  );
}
