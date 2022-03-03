package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k msgServer) MyMint(goCtx context.Context, msg *types.MsgMyMint) (*types.MsgMyMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	/* receiverAddr, err := sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return nil, err
	}
	balance := k.GetMyBalance(ctx, msg.Receiver) */

	err := k.AddValue(ctx, msg.Receiver, msg.Amount)
	if err != nil {
		return nil, err
	}

	return &types.MsgMyMintResponse{}, nil
}

func (k msgServer) MyMultiMint(goCtx context.Context, msg *types.MsgMyMultiMint) (*types.MsgMyMultiMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	recipient := ""
	for _, recipient = range msg.Recipients {
		err := k.AddValue(ctx, recipient, msg.Amount)
		if err != nil {
			return nil, err
		}
	}

	return &types.MsgMyMultiMintResponse{}, nil
}
