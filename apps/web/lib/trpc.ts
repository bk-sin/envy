interface TRPCClient {
  health: {
    query: () => Promise<string>;
  };
}

export const trpc: TRPCClient = {
  health: {
    query: async (): Promise<string> => {
      try {
        const apiUrl =
          process.env.NODE_ENV === "development"
            ? "http://localhost:4000"
            : process.env.NEXT_PUBLIC_API_URL || "";

        if (!apiUrl) {
          return "API not configured";
        }

        const response = await fetch(`${apiUrl}/trpc/health`);
        const data = await response.json();
        return data.result?.data || "ok";
      } catch (error) {
        console.error("tRPC health check failed:", error);
        return "API unavailable";
      }
    },
  },
};
