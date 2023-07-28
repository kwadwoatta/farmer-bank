/* eslint-disable */
import gql from 'graphql-tag';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:8080/gql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Bank = {
  __typename?: 'Bank';
  contact: Scalars['String']['output'];
  description: Scalars['String']['output'];
  displayImageUrl: Scalars['String']['output'];
  facilities: Array<Scalars['String']['output']>;
  googlePlusCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interestRate: Scalars['String']['output'];
  name: Scalars['String']['output'];
  processingFee: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBank: Array<Bank>;
};


export type MutationCreateBankArgs = {
  input: NewBank;
};

export type NewBank = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  banks: Array<Bank>;
};

export type BankFieldsFragment = { __typename?: 'Bank', id: string, name: string, description: string, interestRate: string, displayImageUrl: string, contact: string, processingFee: string, googlePlusCode: string, facilities: Array<string> };

export type BanksQueryVariables = Exact<{ [key: string]: never; }>;


export type BanksQuery = { __typename?: 'Query', banks: Array<{ __typename?: 'Bank', id: string, name: string, description: string, interestRate: string, displayImageUrl: string, contact: string, processingFee: string, googlePlusCode: string, facilities: Array<string> }> };

export const BankFields = gql`
    fragment BankFields on Bank {
  id
  name
  description
  interestRate
  displayImageUrl
  contact
  processingFee
  googlePlusCode
  facilities
}
    `;
export const Banks = gql`
    query banks {
  banks {
    id
    name
    description
    interestRate
    displayImageUrl
    contact
    processingFee
    googlePlusCode
    facilities
  }
}
    `;
export const BankFieldsFragmentDoc = `
    fragment BankFields on Bank {
  id
  name
  description
  interestRate
  displayImageUrl
  contact
  processingFee
  googlePlusCode
  facilities
}
    `;
export const BanksDocument = `
    query banks {
  banks {
    id
    name
    description
    interestRate
    displayImageUrl
    contact
    processingFee
    googlePlusCode
    facilities
  }
}
    `;
export const useBanksQuery = <
      TData = BanksQuery,
      TError = unknown
    >(
      variables?: BanksQueryVariables,
      options?: UseQueryOptions<BanksQuery, TError, TData>
    ) =>
    useQuery<BanksQuery, TError, TData>(
      variables === undefined ? ['banks'] : ['banks', variables],
      fetcher<BanksQuery, BanksQueryVariables>(BanksDocument, variables),
      options
    );