package keeper

import (
	"context"

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

	// don't inspect sendable or not

	err := k.SubValue(ctx, msg.From, msg.Amount)
	if err != nil {
		return nil, err
	}

	err = k.AddValue(ctx, msg.To, msg.Amount)
	if err != nil {
		return nil, err
	}

	return &types.MsgMySendResponse{}, nil
}
