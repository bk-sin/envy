export interface AppRouter {
  health: {
    query: () => Promise<string>;
  };
}
