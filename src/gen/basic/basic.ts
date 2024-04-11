/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * OAS 3.1.0 Playground
 */
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { httpClient } from "../../httpClient";

/**
 * @summary basic endpoint
 */
export const get = (signal?: AbortSignal) => {
  return httpClient<void>({ url: `/`, method: "GET", signal });
};

export const getGetQueryKey = () => {
  return [`/`] as const;
};

export const getGetQueryOptions = <
  TData = Awaited<ReturnType<typeof get>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof get>>> = ({
    signal,
  }) => get(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof get>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetQueryResult = NonNullable<Awaited<ReturnType<typeof get>>>;
export type GetQueryError = unknown;

/**
 * @summary basic endpoint
 */
export const useGet = <
  TData = Awaited<ReturnType<typeof get>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getGetSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof get>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof get>>> = ({
    signal,
  }) => get(signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof get>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof get>>
>;
export type GetSuspenseQueryError = unknown;

/**
 * @summary basic endpoint
 */
export const useGetSuspense = <
  TData = Awaited<ReturnType<typeof get>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>
  >;
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetSuspenseQueryOptions(options);

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
