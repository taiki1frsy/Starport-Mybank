import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "taikifuru.mybank.mybank";
export interface Balance {
    index: string;
    address: string;
    balance: string;
}
export declare const Balance: {
    encode(message: Balance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial(object: DeepPartial<Balance>): Balance;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
