import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-primary overflow-hidden w-screen h-screen">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at center, transparent 75%, rgba(0,0,0,0.25) 100%)"
        }}
      />
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
      <AuthView path={path} socialLayout="horizontal" className="" />
      </div>
    </div>
  );
}
