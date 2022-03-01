package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/taiki-furu/mybank/x/mybank/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Balances(goCtx context.Context, req *types.QueryBalancesRequest) (*types.QueryBalancesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var balances []*types.Balance

	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))

	pageRes, err := query.Paginate(balanceStore, req.Pagination, func(key []byte, value []byte) error {
		var balance types.Balance
		if err := k.cdc.Unmarshal(value, &balance); err != nil {
			return err
		}
		balances = append(balances, &balance)
		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryBalancesResponse{Balance: balances, Pagination: pageRes}, nil
}
