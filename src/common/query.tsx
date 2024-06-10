import {
  QueryClient, QueryClientConfig, QueryClientProvider,
} from '@tanstack/react-query';

export function queryClientConfig(
  config?: QueryClientConfig,
): QueryClientConfig {
  return {
    ...config,
    defaultOptions: {
      ...config?.defaultOptions,
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        ...config?.defaultOptions?.queries,
      },
    },
  };
} // function newQueryClient

export interface QueryClientWrapperProps {
  config?: QueryClientConfig;
  children: JSX.Element;
} // interface ThemeWrapperProps

export function QueryClientWrapper({
  config,
  children,
}: QueryClientWrapperProps) {
  const queryClient = new QueryClient(queryClientConfig(config));
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
} // function QueryClientWrapper

