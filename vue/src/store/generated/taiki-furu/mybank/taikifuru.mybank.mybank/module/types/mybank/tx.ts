/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "taikifuru.mybank.mybank";

export interface MsgMyMint {
  creator: string;
  amount: string;
  receiver: string;
}

export interface MsgMyMintResponse {}

export interface MsgMyMultiMint {
  creator: string;
  amount: string;
  receivers: string[];
}

export interface MsgMyMultiMintResponse {}

export interface MsgMySend {
  creator: string;
  from: string;
  to: string;
  amount: string;
}

export interface MsgMySendResponse {}

const baseMsgMyMint: object = { creator: "", amount: "", receiver: "" };

export const MsgMyMint = {
  encode(message: MsgMyMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyMint } as MsgMyMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMyMint {
    const message = { ...baseMsgMyMint } as MsgMyMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgMyMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMyMint>): MsgMyMint {
    const message = { ...baseMsgMyMint } as MsgMyMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgMyMintResponse: object = {};

export const MsgMyMintResponse = {
  encode(_: MsgMyMintResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyMintResponse } as MsgMyMintResponse;
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

  fromJSON(_: any): MsgMyMintResponse {
    const message = { ...baseMsgMyMintResponse } as MsgMyMintResponse;
    return message;
  },

  toJSON(_: MsgMyMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMyMintResponse>): MsgMyMintResponse {
    const message = { ...baseMsgMyMintResponse } as MsgMyMintResponse;
    return message;
  },
};

const baseMsgMyMultiMint: object = { creator: "", amount: "", receivers: "" };

export const MsgMyMultiMint = {
  encode(message: MsgMyMultiMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.receivers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyMultiMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyMultiMint } as MsgMyMultiMint;
    message.receivers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receivers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMyMultiMint {
    const message = { ...baseMsgMyMultiMint } as MsgMyMultiMint;
    message.receivers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.receivers !== undefined && object.receivers !== null) {
      for (const e of object.receivers) {
        message.receivers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMyMultiMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.receivers) {
      obj.receivers = message.receivers.map((e) => e);
    } else {
      obj.receivers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMyMultiMint>): MsgMyMultiMint {
    const message = { ...baseMsgMyMultiMint } as MsgMyMultiMint;
    message.receivers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.receivers !== undefined && object.receivers !== null) {
      for (const e of object.receivers) {
        message.receivers.push(e);
      }
    }
    return message;
  },
};

const baseMsgMyMultiMintResponse: object = {};

export const MsgMyMultiMintResponse = {
  encode(_: MsgMyMultiMintResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyMultiMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyMultiMintResponse } as MsgMyMultiMintResponse;
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

  fromJSON(_: any): MsgMyMultiMintResponse {
    const message = { ...baseMsgMyMultiMintResponse } as MsgMyMultiMintResponse;
    return message;
  },

  toJSON(_: MsgMyMultiMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMyMultiMintResponse>): MsgMyMultiMintResponse {
    const message = { ...baseMsgMyMultiMintResponse } as MsgMyMultiMintResponse;
    return message;
  },
};

const baseMsgMySend: object = { creator: "", from: "", to: "", amount: "" };

export const MsgMySend = {
  encode(message: MsgMySend, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMySend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMySend } as MsgMySend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMySend {
    const message = { ...baseMsgMySend } as MsgMySend;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgMySend): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMySend>): MsgMySend {
    const message = { ...baseMsgMySend } as MsgMySend;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgMySendResponse: object = {};

export const MsgMySendResponse = {
  encode(_: MsgMySendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMySendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMySendResponse } as MsgMySendResponse;
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

  fromJSON(_: any): MsgMySendResponse {
    const message = { ...baseMsgMySendResponse } as MsgMySendResponse;
    return message;
  },

  toJSON(_: MsgMySendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMySendResponse>): MsgMySendResponse {
    const message = { ...baseMsgMySendResponse } as MsgMySendResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MyMint(request: MsgMyMint): Promise<MsgMyMintResponse>;
  MyMultiMint(request: MsgMyMultiMint): Promise<MsgMyMultiMintResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MySend(request: MsgMySend): Promise<MsgMySendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MyMint(request: MsgMyMint): Promise<MsgMyMintResponse> {
    const data = MsgMyMint.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Msg",
      "MyMint",
      data
    );
    return promise.then((data) => MsgMyMintResponse.decode(new Reader(data)));
  }

  MyMultiMint(request: MsgMyMultiMint): Promise<MsgMyMultiMintResponse> {
    const data = MsgMyMultiMint.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Msg",
      "MyMultiMint",
      data
    );
    return promise.then((data) =>
      MsgMyMultiMintResponse.decode(new Reader(data))
    );
  }

  MySend(request: MsgMySend): Promise<MsgMySendResponse> {
    const data = MsgMySend.encode(request).finish();
    const promise = this.rpc.request(
      "taikifuru.mybank.mybank.Msg",
      "MySend",
      data
    );
    return promise.then((data) => MsgMySendResponse.decode(new Reader(data)));
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
