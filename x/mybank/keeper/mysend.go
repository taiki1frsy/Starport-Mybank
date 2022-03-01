package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SendBalance(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amt sdk.Int) error {
	err := k.SubBalance(ctx, from, amt)
	if err != nil {
		return err
	}

	err = k.AddBalance(ctx, to, amt)
	if err != nil {
		return err
	}

	return nil
}
func (k msgServer) AddBalance(ctx sdk.Context, addr sdk.AccAddress, amount sdk.Int) error {
	// balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))
	balanceInt := k.GetBalance(ctx, addr)

	res := balanceInt.Add(amount)
	// If returns well, then it means ok
	k.SetBalance(ctx, addr.Bytes(), res)
	return nil
}

func (k msgServer) SubBalance(ctx sdk.Context, addr sdk.AccAddress, amount sdk.Int) error {
	balanceInt := k.GetBalance(ctx, addr)

	res := balanceInt.Sub(amount)
	k.SetBalance(ctx, addr, res)

	return nil
}
