/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Client = {
  __typename?: 'Client';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  id?: Maybe<Scalars['ID']['output']>;
  startDateTime?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getClient?: Maybe<Client>;
  getClients?: Maybe<Array<Maybe<Client>>>;
  getEvent?: Maybe<Event>;
  getEvents?: Maybe<Array<Maybe<Event>>>;
  getEventsByClient?: Maybe<Array<Maybe<Event>>>;
};


export type QueryGetClientArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetEventsByClientArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};
