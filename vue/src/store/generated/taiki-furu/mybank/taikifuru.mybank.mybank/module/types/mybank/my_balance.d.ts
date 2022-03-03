import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "taikifuru.mybank.mybank";
export interface MyBalance {
    address: string;
    value: string;
}
export declare const MyBalance: {
    encode(message: MyBalance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MyBalance;
    fromJSON(object: any): MyBalance;
    toJSON(message: MyBalance): unknown;
    fromPartial(object: DeepPartial<MyBalance>): MyBalance;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
