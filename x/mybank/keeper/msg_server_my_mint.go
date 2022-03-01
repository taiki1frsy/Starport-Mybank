package keeper

import (
	"context"
	"encoding/binary"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k msgServer) MyMint(goCtx context.Context, msg *types.MsgMyMint) (*types.MsgMyMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))

	receiver, _ := sdk.AccAddressFromBech32(msg.Receiver)
	receiver.Bytes()

	bz := make([]byte, 8)
	amount, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return nil, err
	}
	binary.BigEndian.PutUint64(bz, amount)
	balanceStore.Set(receiver, bz)

	return &types.MsgMyMintResponse{}, nil
}

func (k msgServer) MyMultiMint(goCtx context.Context, msg *types.MsgMyMultiMint) (*types.MsgMyMultiMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMyMultiMintResponse{}, nil
}
