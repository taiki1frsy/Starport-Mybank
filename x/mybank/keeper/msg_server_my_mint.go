package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k msgServer) MyMint(goCtx context.Context, msg *types.MsgMyMint) (*types.MsgMyMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMyMintResponse{}, nil
}
