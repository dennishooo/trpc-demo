import { initTRPC } from "@trpc/server";
const t = initTRPC.create();

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
];
const router = t.router;
const publicProcedure = t.procedure;
const appRouter = router({});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
