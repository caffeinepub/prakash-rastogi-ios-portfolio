import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useVisitorCount() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["visitorCount"],
    queryFn: async () => {
      if (!actor) return 0n;
      return actor.getVisitorCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(name, email, message);
    },
  });
}
