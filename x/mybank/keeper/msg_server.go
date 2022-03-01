package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (k msgServer) MySend(goCtx context.Context, msg *types.MsgMySend) (*types.MsgMySendResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Don't inspect sendable cuz it doesn't handle sdk.coin, just int obj

	fromAddr, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}
	toAddr, err := sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return nil, err
	}

	// Don't inspect if toAddr is in the blocked list cuz don't have that.

	amt, _ := strconv.ParseUint(msg.Amount, 10, 64)
	amount := sdk.NewIntFromUint64(amt)
	err = k.SendBalance(ctx, fromAddr, toAddr, amount)
	if err != nil {
		return nil, err
	}

	return &types.MsgMySendResponse{}, nil
}
