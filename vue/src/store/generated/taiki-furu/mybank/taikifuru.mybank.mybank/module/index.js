// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
<<<<<<< HEAD
=======
import { MsgMyMultiMint } from "./types/mybank/tx";
import { MsgMySend } from "./types/mybank/tx";
>>>>>>> fifth
import { MsgMyMint } from "./types/mybank/tx";
import { MsgMyMultiMint } from "./types/mybank/tx";
import { MsgMySend } from "./types/mybank/tx";
const types = [
<<<<<<< HEAD
=======
    ["/taikifuru.mybank.mybank.MsgMyMultiMint", MsgMyMultiMint],
    ["/taikifuru.mybank.mybank.MsgMySend", MsgMySend],
>>>>>>> fifth
    ["/taikifuru.mybank.mybank.MsgMyMint", MsgMyMint],
    ["/taikifuru.mybank.mybank.MsgMyMultiMint", MsgMyMultiMint],
    ["/taikifuru.mybank.mybank.MsgMySend", MsgMySend],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
<<<<<<< HEAD
=======
        msgMyMultiMint: (data) => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMyMultiMint", value: MsgMyMultiMint.fromPartial(data) }),
        msgMySend: (data) => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMySend", value: MsgMySend.fromPartial(data) }),
>>>>>>> fifth
        msgMyMint: (data) => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMyMint", value: MsgMyMint.fromPartial(data) }),
        msgMyMultiMint: (data) => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMyMultiMint", value: MsgMyMultiMint.fromPartial(data) }),
        msgMySend: (data) => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMySend", value: MsgMySend.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
