/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../mybank/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { MyBalance } from "../mybank/my_balance";

export const protobufPackage = "taikifuru.mybank.mybank";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryMyBalanceValueRequest {
  address: string;
}

export interface QueryMyBalanceValueResponse {
  address: string;
  value: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryMyBalancesRequest: object = {};

export const QueryMyBalancesRequest = {
  encode(
    message: QueryMyBalancesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMyBalancesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMyBalancesRequest } as QueryMyBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMyBalancesRequest {
    const message = { ...baseQueryMyBalancesRequest } as QueryMyBalancesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMyBalancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMyBalancesRequest>
  ): QueryMyBalancesRequest {
    const message = { ...baseQueryMyBalancesRequest } as QueryMyBalancesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMyBalancesResponse: object = {};

export const QueryMyBalancesResponse = {
  encode(
    message: QueryMyBalancesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.MyBalance) {
      MyBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMyBalancesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMyBalancesResponse,
    } as QueryMyBalancesResponse;
    message.MyBalance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MyBalance.push(MyBalance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMyBalancesResponse {
    const message = {
      ...baseQueryMyBalancesResponse,
    } as QueryMyBalancesResponse;
    message.MyBalance = [];
    if (object.MyBalance !== undefined && object.MyBalance !== null) {
      for (const e of object.MyBalance) {
        message.MyBalance.push(MyBalance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMyBalancesResponse): unknown {
    const obj: any = {};
    if (message.MyBalance) {
      obj.MyBalance = message.MyBalance.map((e) =>
        e ? MyBalance.toJSON(e) : undefined
      );
    } else {
      obj.MyBalance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMyBalancesResponse>
  ): QueryMyBalancesResponse {
    const message = {
      ...baseQueryMyBalancesResponse,
    } as QueryMyBalancesResponse;
    message.MyBalance = [];
    if (object.MyBalance !== undefined && object.MyBalance !== null) {
      for (const e of object.MyBalance) {
        message.MyBalance.push(MyBalance.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMyBalanceValueRequest: object = { address: "" };

export const QueryMyBalanceValueRequest = {
  encode(
    message: QueryMyBalanceValueRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryMyBalanceValueRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMyBalanceValueRequest,
    } as QueryMyBalanceValueRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMyBalanceValueRequest {
    const message = {
      ...baseQueryMyBalanceValueRequest,
    } as QueryMyBalanceValueRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryMyBalanceValueRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMyBalanceValueRequest>
  ): QueryMyBalanceValueRequest {
    const message = {
      ...baseQueryMyBalanceValueRequest,
    } as QueryMyBalanceValueRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryMyBalanceValueResponse: object = { address: "", value: "" };

export const QueryMyBalanceValueResponse = {
  encode(
    message: QueryMyBalanceValueResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryMyBalanceValueResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMyBalanceValueResponse,
    } as QueryMyBalanceValueResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMyBalanceValueResponse {
    const message = {
      ...baseQueryMyBalanceValueResponse,
    } as QueryMyBalanceValueResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryMyBalanceValueResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMyBalanceValueResponse>
  ): QueryMyBalanceValueResponse {
    const message = {
      ...baseQueryMyBalanceValueResponse,
    } as QueryMyBalanceValueResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of MyBalances items. */
  MyBalances(request: QueryMyBalancesRequest): Promise<QueryMyBalancesResponse>;
  /** Queries a list of MyBalanceValue items. */
  MyBalanceValue(
    request: QueryMyBalanceValueRequest
  ): Promise<QueryMyBalanceValueResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  MyBalances(
    request: QueryMyBalancesRequest
  ): Promise<QueryMyBalancesResponse> {
    const data = QueryMyBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Query",
      "MyBalances",
      data
    );
    return promise.then((data) =>
      QueryMyBalancesResponse.decode(new Reader(data))
    );
  }

  MyBalanceValue(
    request: QueryMyBalanceValueRequest
  ): Promise<QueryMyBalanceValueResponse> {
    const data = QueryMyBalanceValueRequest.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Query",
      "MyBalanceValue",
      data
    );
    return promise.then((data) =>
      QueryMyBalanceValueResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
