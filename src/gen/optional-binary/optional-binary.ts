/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * OAS 3.1.0 Playground
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import type { OptionalBinary } from "../oAS310Playground.schemas";
import { httpClient } from "../../httpClient";

export const postBinaryOptional = (optionalBinary: OptionalBinary) => {
  return httpClient<OptionalBinary>({
    url: `/binary/optional`,
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
    data: optionalBinary,
  });
};

export const getPostBinaryOptionalMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBinaryOptional>>,
    TError,
    { data: OptionalBinary },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postBinaryOptional>>,
  TError,
  { data: OptionalBinary },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postBinaryOptional>>,
    { data: OptionalBinary }
  > = (props) => {
    const { data } = props ?? {};

    return postBinaryOptional(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostBinaryOptionalMutationResult = NonNullable<
  Awaited<ReturnType<typeof postBinaryOptional>>
>;
export type PostBinaryOptionalMutationBody = OptionalBinary;
export type PostBinaryOptionalMutationError = unknown;

export const usePostBinaryOptional = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBinaryOptional>>,
    TError,
    { data: OptionalBinary },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof postBinaryOptional>>,
  TError,
  { data: OptionalBinary },
  TContext
> => {
  const mutationOptions = getPostBinaryOptionalMutationOptions(options);

  return useMutation(mutationOptions);
};
