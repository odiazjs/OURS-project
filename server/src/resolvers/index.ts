import { GraphQLScalarType, Kind } from "graphql";
import DataAccessService from "../services/data-access.service";

const dataAccessInstance = DataAccessService.getInstance();

export type ResolverFn = (_: any, args: any, context: any) => Promise<any>;

export type DataAccessResolvers = {
  queryClientList: ResolverFn;
  findClientById: ResolverFn;
  queryEventList: ResolverFn;
  findEventById: ResolverFn;
  findEventByClientId: ResolverFn;
  getDateTime: GraphQLScalarType;
};

const resolvers: DataAccessResolvers = {
  queryClientList: async (_, args, context) => {
    return await dataAccessInstance.getClients();
  },
  findClientById: async (_, args, context) => {
    const id = args.id;
    return await dataAccessInstance.getClientById(id);
  },
  queryEventList: async (_, args, context) => {
    return await dataAccessInstance.getEvents();
  },
  findEventById: async (_, args, context) => {
    const id = args.id;
    return await dataAccessInstance.getEventById(id);
  },
  findEventByClientId: async (_, args, context) => {
    const clientId = args.clientId;
    return await dataAccessInstance.getEventsByClientId(clientId);
  },
  getDateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "Date time represented as an ISO string",

    serialize(value: any) {
      const asDate = new Date(value);
      return asDate.toISOString();
    },

    parseValue(value: any) {
      const asString = String(value);
      return new Date(asString);
    },

    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

export const gqlResolvers = resolvers;
