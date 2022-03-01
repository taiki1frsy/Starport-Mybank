package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k msgServer) MyMultiMint(goCtx context.Context, msg *types.MsgMyMultiMint) (*types.MsgMyMultiMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMyMultiMintResponse{}, nil
}
