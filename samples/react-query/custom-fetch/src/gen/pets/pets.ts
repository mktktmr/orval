/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import type {
  CreatePetsBodyItem,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '.././models';

import { customFetch } from '../../custom-fetch';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>]
  ? {
      [P in keyof Writable<T>]: T[P] extends object
        ? NonReadonly<NonNullable<T[P]>>
        : T[P];
    }
  : DistributeReadOnlyOverUnions<T>;

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

export type HTTPStatusCode1xx = 100 | 101 | 102 | 103;
export type HTTPStatusCode2xx = 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207;
export type HTTPStatusCode3xx = 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308;
export type HTTPStatusCode4xx =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451;
export type HTTPStatusCode5xx = 500 | 501 | 502 | 503 | 504 | 505 | 507 | 511;
export type HTTPStatusCodes =
  | HTTPStatusCode1xx
  | HTTPStatusCode2xx
  | HTTPStatusCode3xx
  | HTTPStatusCode4xx
  | HTTPStatusCode5xx;

/**
 * @summary List all pets
 */
export type listPetsResponse200 = {
  data: Pets;
  status: 200;
};

export type listPetsResponseComposite = listPetsResponse200;

export type listPetsResponse = listPetsResponseComposite & {
  headers: Headers;
};

export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    const explodeParameters = ['limit'];

    if (Array.isArray(value) && explodeParameters.includes(key)) {
      value.forEach((v) =>
        normalizedParams.append(key, v === null ? 'null' : v.toString()),
      );
      return;
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0
    ? `http://localhost:8000/pets?${stringifiedParams}`
    : `http://localhost:8000/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<listPetsResponse> => {
  return customFetch<listPetsResponse>(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });
};

export const getListPetsQueryKey = (params?: ListPetsParams) => {
  return [`http://localhost:8000/pets`, ...(params ? [params] : [])] as const;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, { signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = unknown;

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params: undefined | ListPetsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          Awaited<ReturnType<typeof listPets>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof listPets>>,
          TError,
          Awaited<ReturnType<typeof listPets>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: ListPetsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getListPetsQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export type createPetsResponse200 = {
  data: Pet;
  status: 200;
};

export type createPetsResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type createPetsResponseComposite =
  | createPetsResponse200
  | createPetsResponseDefault;

export type createPetsResponse = createPetsResponseComposite & {
  headers: Headers;
};

export const getCreatePetsUrl = () => {
  return `http://localhost:8000/pets`;
};

export const createPets = async (
  createPetsBodyItem: CreatePetsBodyItem[],
  options?: RequestInit,
): Promise<createPetsResponse> => {
  return customFetch<createPetsResponse>(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBodyItem),
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBodyItem[] },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBodyItem[] },
  TContext
> => {
  const mutationKey = ['createPets'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBodyItem[] }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBodyItem[];
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createPets>>,
      TError,
      { data: CreatePetsBodyItem[] },
      TContext
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBodyItem[] },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Update a pet
 */
export type updatePetsResponse200 = {
  data: Pet;
  status: 200;
};

export type updatePetsResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type updatePetsResponseComposite =
  | updatePetsResponse200
  | updatePetsResponseDefault;

export type updatePetsResponse = updatePetsResponseComposite & {
  headers: Headers;
};

export const getUpdatePetsUrl = () => {
  return `http://localhost:8000/pets`;
};

export const updatePets = async (
  pet: NonReadonly<Pet>,
  options?: RequestInit,
): Promise<updatePetsResponse> => {
  return customFetch<updatePetsResponse>(getUpdatePetsUrl(), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(pet),
  });
};

export const getUpdatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePets>>,
    TError,
    { data: NonReadonly<Pet> },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePets>>,
  TError,
  { data: NonReadonly<Pet> },
  TContext
> => {
  const mutationKey = ['updatePets'];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePets>>,
    { data: NonReadonly<Pet> }
  > = (props) => {
    const { data } = props ?? {};

    return updatePets(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePets>>
>;
export type UpdatePetsMutationBody = NonReadonly<Pet>;
export type UpdatePetsMutationError = Error;

/**
 * @summary Update a pet
 */
export const useUpdatePets = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof updatePets>>,
      TError,
      { data: NonReadonly<Pet> },
      TContext
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof updatePets>>,
  TError,
  { data: NonReadonly<Pet> },
  TContext
> => {
  const mutationOptions = getUpdatePetsMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Info for a specific pet
 */
export type showPetByIdResponse200 = {
  data: Pet;
  status: 200;
};

export type showPetByIdResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type showPetByIdResponseComposite =
  | showPetByIdResponse200
  | showPetByIdResponseDefault;

export type showPetByIdResponse = showPetByIdResponseComposite & {
  headers: Headers;
};

export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:8000/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<showPetByIdResponse> => {
  return customFetch<showPetByIdResponse>(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });
};

export const getShowPetByIdQueryKey = (petId?: string) => {
  return [`http://localhost:8000/pets/${petId}`] as const;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, { signal, ...requestOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!petId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          Awaited<ReturnType<typeof showPetById>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof showPetById>>,
          TError,
          Awaited<ReturnType<typeof showPetById>>
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getShowPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey;

  return query;
}
