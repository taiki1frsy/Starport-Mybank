import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "taikifuru.mybank.mybank";
export interface MsgMyMint {
    creator: string;
    amount: string;
    receiver: string;
}
export interface MsgMyMintResponse {
}
export interface MsgMyMultiMint {
    creator: string;
    amount: string;
    recipients: string[];
}
export interface MsgMyMultiMintResponse {
}
export interface MsgMySend {
    creator: string;
    from: string;
    to: string;
    amount: string;
}
export interface MsgMySendResponse {
}
export declare const MsgMyMint: {
    encode(message: MsgMyMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyMint;
    fromJSON(object: any): MsgMyMint;
    toJSON(message: MsgMyMint): unknown;
    fromPartial(object: DeepPartial<MsgMyMint>): MsgMyMint;
};
export declare const MsgMyMintResponse: {
    encode(_: MsgMyMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyMintResponse;
    fromJSON(_: any): MsgMyMintResponse;
    toJSON(_: MsgMyMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMyMintResponse>): MsgMyMintResponse;
};
export declare const MsgMyMultiMint: {
    encode(message: MsgMyMultiMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyMultiMint;
    fromJSON(object: any): MsgMyMultiMint;
    toJSON(message: MsgMyMultiMint): unknown;
    fromPartial(object: DeepPartial<MsgMyMultiMint>): MsgMyMultiMint;
};
export declare const MsgMyMultiMintResponse: {
    encode(_: MsgMyMultiMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyMultiMintResponse;
    fromJSON(_: any): MsgMyMultiMintResponse;
    toJSON(_: MsgMyMultiMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMyMultiMintResponse>): MsgMyMultiMintResponse;
};
export declare const MsgMySend: {
    encode(message: MsgMySend, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMySend;
    fromJSON(object: any): MsgMySend;
    toJSON(message: MsgMySend): unknown;
    fromPartial(object: DeepPartial<MsgMySend>): MsgMySend;
};
export declare const MsgMySendResponse: {
    encode(_: MsgMySendResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMySendResponse;
    fromJSON(_: any): MsgMySendResponse;
    toJSON(_: MsgMySendResponse): unknown;
    fromPartial(_: DeepPartial<MsgMySendResponse>): MsgMySendResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    MyMint(request: MsgMyMint): Promise<MsgMyMintResponse>;
    MyMultiMint(request: MsgMyMultiMint): Promise<MsgMyMultiMintResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MySend(request: MsgMySend): Promise<MsgMySendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    MyMint(request: MsgMyMint): Promise<MsgMyMintResponse>;
    MyMultiMint(request: MsgMyMultiMint): Promise<MsgMyMultiMintResponse>;
    MySend(request: MsgMySend): Promise<MsgMySendResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
