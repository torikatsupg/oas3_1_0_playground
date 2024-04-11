/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * OAS 3.1.0 Playground
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  RequiredBinary
} from '../oAS310Playground.schemas'
import { httpClient } from '../../httpClient';



export const postBinaryRequired = (
    requiredBinary: RequiredBinary,
 ) => {
      
      
      return httpClient<RequiredBinary>(
      {url: `/binary/required`, method: 'POST',
      headers: {'Content-Type': 'application/octet-stream', },
      data: requiredBinary
    },
      );
    }
  


export const getPostBinaryRequiredMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postBinaryRequired>>, TError,{data: RequiredBinary}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postBinaryRequired>>, TError,{data: RequiredBinary}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postBinaryRequired>>, {data: RequiredBinary}> = (props) => {
          const {data} = props ?? {};

          return  postBinaryRequired(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostBinaryRequiredMutationResult = NonNullable<Awaited<ReturnType<typeof postBinaryRequired>>>
    export type PostBinaryRequiredMutationBody = RequiredBinary
    export type PostBinaryRequiredMutationError = unknown

    export const usePostBinaryRequired = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postBinaryRequired>>, TError,{data: RequiredBinary}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof postBinaryRequired>>,
        TError,
        {data: RequiredBinary},
        TContext
      > => {

      const mutationOptions = getPostBinaryRequiredMutationOptions(options);

      return useMutation(mutationOptions);
    }
    