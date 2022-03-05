package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MyBalanceValue(goCtx context.Context, req *types.QueryMyBalanceValueRequest) (*types.QueryMyBalanceValueResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reqAddr, err := sdk.AccAddressFromBech32(req.Address)
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceStoreKey))

	myBalanceByte := balanceStore.Get(reqAddr.Bytes())
	var myBalance types.MyBalance
	if err := k.cdc.Unmarshal(myBalanceByte, &myBalance); err != nil {
		return nil, err
	}

	return &types.QueryMyBalanceValueResponse{Address: myBalance.Address, Value: myBalance.Value.String()}, nil
}
