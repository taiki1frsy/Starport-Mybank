// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMySend } from "./types/mybank/tx";
import { MsgMyMultiMint } from "./types/mybank/tx";
import { MsgMyMint } from "./types/mybank/tx";


const types = [
  ["/taikifuru.mybank.mybank.MsgMySend", MsgMySend],
  ["/taikifuru.mybank.mybank.MsgMyMultiMint", MsgMyMultiMint],
  ["/taikifuru.mybank.mybank.MsgMyMint", MsgMyMint],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgMySend: (data: MsgMySend): EncodeObject => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMySend", value: MsgMySend.fromPartial( data ) }),
    msgMyMultiMint: (data: MsgMyMultiMint): EncodeObject => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMyMultiMint", value: MsgMyMultiMint.fromPartial( data ) }),
    msgMyMint: (data: MsgMyMint): EncodeObject => ({ typeUrl: "/taikifuru.mybank.mybank.MsgMyMint", value: MsgMyMint.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
