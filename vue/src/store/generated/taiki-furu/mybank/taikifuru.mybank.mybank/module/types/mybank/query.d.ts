import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../mybank/params";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { MyBalance } from "../mybank/my_balance";
export declare const protobufPackage = "taikifuru.mybank.mybank";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryMyBalancesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryMyBalancesResponse {
    /** Returning a list of balances */
    MyBalance: MyBalance[];
    /** Adding pagination to response */
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryMyBalancesRequest: {
    encode(message: QueryMyBalancesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryMyBalancesRequest;
    fromJSON(object: any): QueryMyBalancesRequest;
    toJSON(message: QueryMyBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryMyBalancesRequest>): QueryMyBalancesRequest;
};
export declare const QueryMyBalancesResponse: {
    encode(message: QueryMyBalancesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryMyBalancesResponse;
    fromJSON(object: any): QueryMyBalancesResponse;
    toJSON(message: QueryMyBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryMyBalancesResponse>): QueryMyBalancesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of MyBalances items. */
    MyBalances(request: QueryMyBalancesRequest): Promise<QueryMyBalancesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    MyBalances(request: QueryMyBalancesRequest): Promise<QueryMyBalancesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
