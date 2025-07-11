/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Nexus Core Backend
 * The news viewer service, Nexus API Description
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query";
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
} from "@tanstack/react-query";

import type { CompanyResponseDto, CreateCompanyDto } from "../../const";

import { customInstance } from "../../../shared/axios/lib/customInstance";
import type {
  ErrorType,
  BodyType,
} from "../../../shared/axios/lib/customInstance";

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

/**
 * @summary 언론사 생성
 */
export const companyControllerCreateCompany = (
  createCompanyDto: BodyType<CreateCompanyDto>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<CreateCompanyDto>(
    {
      url: `/company`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createCompanyDto,
      signal,
    },
    options,
  );
};

export const getCompanyControllerCreateCompanyMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof companyControllerCreateCompany>>,
    TError,
    { data: BodyType<CreateCompanyDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof companyControllerCreateCompany>>,
  TError,
  { data: BodyType<CreateCompanyDto> },
  TContext
> => {
  const mutationKey = ["companyControllerCreateCompany"];
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof companyControllerCreateCompany>>,
    { data: BodyType<CreateCompanyDto> }
  > = (props) => {
    const { data } = props ?? {};

    return companyControllerCreateCompany(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CompanyControllerCreateCompanyMutationResult = NonNullable<
  Awaited<ReturnType<typeof companyControllerCreateCompany>>
>;
export type CompanyControllerCreateCompanyMutationBody =
  BodyType<CreateCompanyDto>;
export type CompanyControllerCreateCompanyMutationError = ErrorType<unknown>;

/**
 * @summary 언론사 생성
 */
export const useCompanyControllerCreateCompany = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof companyControllerCreateCompany>>,
      TError,
      { data: BodyType<CreateCompanyDto> },
      TContext
    >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof companyControllerCreateCompany>>,
  TError,
  { data: BodyType<CreateCompanyDto> },
  TContext
> => {
  const mutationOptions =
    getCompanyControllerCreateCompanyMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary 언론사 정보 조회
 */
export const companyControllerGetCompany = (
  name: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<CompanyResponseDto>(
    { url: `/company/info/${name}`, method: "GET", signal },
    options,
  );
};

export const getCompanyControllerGetCompanyQueryKey = (name: string) => {
  return [`/company/info/${name}`] as const;
};

export const getCompanyControllerGetCompanyQueryOptions = <
  TData = Awaited<ReturnType<typeof companyControllerGetCompany>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompany>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCompanyControllerGetCompanyQueryKey(name);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof companyControllerGetCompany>>
  > = ({ signal }) => companyControllerGetCompany(name, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!name,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof companyControllerGetCompany>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CompanyControllerGetCompanyQueryResult = NonNullable<
  Awaited<ReturnType<typeof companyControllerGetCompany>>
>;
export type CompanyControllerGetCompanyQueryError = ErrorType<unknown>;

export function useCompanyControllerGetCompany<
  TData = Awaited<ReturnType<typeof companyControllerGetCompany>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompany>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof companyControllerGetCompany>>,
          TError,
          Awaited<ReturnType<typeof companyControllerGetCompany>>
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompanyControllerGetCompany<
  TData = Awaited<ReturnType<typeof companyControllerGetCompany>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompany>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof companyControllerGetCompany>>,
          TError,
          Awaited<ReturnType<typeof companyControllerGetCompany>>
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompanyControllerGetCompany<
  TData = Awaited<ReturnType<typeof companyControllerGetCompany>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompany>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary 언론사 정보 조회
 */

export function useCompanyControllerGetCompany<
  TData = Awaited<ReturnType<typeof companyControllerGetCompany>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompany>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getCompanyControllerGetCompanyQueryOptions(
    name,
    options,
  );

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary 언론사 카테고리 조회
 */
export const companyControllerGetCompanyCategories = (
  name: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<string[]>(
    { url: `/company/categories/${name}`, method: "GET", signal },
    options,
  );
};

export const getCompanyControllerGetCompanyCategoriesQueryKey = (
  name: string,
) => {
  return [`/company/categories/${name}`] as const;
};

export const getCompanyControllerGetCompanyCategoriesQueryOptions = <
  TData = Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getCompanyControllerGetCompanyCategoriesQueryKey(name);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>
  > = ({ signal }) =>
    companyControllerGetCompanyCategories(name, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!name,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CompanyControllerGetCompanyCategoriesQueryResult = NonNullable<
  Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>
>;
export type CompanyControllerGetCompanyCategoriesQueryError =
  ErrorType<unknown>;

export function useCompanyControllerGetCompanyCategories<
  TData = Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
          TError,
          Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompanyControllerGetCompanyCategories<
  TData = Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
          TError,
          Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>
        >,
        "initialData"
      >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompanyControllerGetCompanyCategories<
  TData = Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary 언론사 카테고리 조회
 */

export function useCompanyControllerGetCompanyCategories<
  TData = Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
  TError = ErrorType<unknown>,
>(
  name: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof companyControllerGetCompanyCategories>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getCompanyControllerGetCompanyCategoriesQueryOptions(
    name,
    options,
  );

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}
