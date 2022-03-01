package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k msgServer) MyMint(goCtx context.Context, msg *types.MsgMyMint) (*types.MsgMyMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	receiver, _ := sdk.AccAddressFromBech32(msg.Receiver)
	// In real case, should GetAccount account keeper method be applied
	// and if it doesn't exit, use SetAccount.
	amt, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return nil, err
	}
	amount := sdk.NewIntFromUint64(amt)
	err = k.AddBalance(ctx, receiver, amount)
	if err != nil {
		return nil, err
	}
	//k.SetBalance(ctx, receiver, amount)
	return &types.MsgMyMintResponse{}, nil
}

func (k msgServer) MyMultiMint(goCtx context.Context, msg *types.MsgMyMultiMint) (*types.MsgMyMultiMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMyMultiMintResponse{}, nil
}
