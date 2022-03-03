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

func (k Keeper) MyBalances(c context.Context, req *types.QueryMyBalancesRequest) (*types.QueryMyBalancesResponse, error) {
	// Throw an error if request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	// Define a variable that will store a list of posts
	var myBalances []*types.MyBalance
	// Get context with the information about the environment
	ctx := sdk.UnwrapSDKContext(c)
	// Get the key-value module store using the store key (in our case store key is "chain")
	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	balanceStore := prefix.NewStore(store, []byte(types.BalanceStoreKey))
	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(balanceStore, req.Pagination, func(key []byte, value []byte) error {
		var myBalance types.MyBalance
		if err := k.cdc.Unmarshal(value, &myBalance); err != nil {
			return err
		}
		myBalances = append(myBalances, &myBalance)
		return nil
	})
	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	// Return a struct containing a list of posts and pagination info
	return &types.QueryMyBalancesResponse{MyBalance: myBalances, Pagination: pageRes}, nil
}
