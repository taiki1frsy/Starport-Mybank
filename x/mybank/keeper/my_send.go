package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) SubValue(ctx sdk.Context, addr string, amount string) error {
	amtInt, ok := sdk.NewIntFromString(amount)
	if !ok {
		panic("can't convert string amount to sdk.Int")
	}
	balance := k.GetMyBalance(ctx, addr)

	res := balance.Value.Sub(amtInt)
	if res.IsNegative() {
		return sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "value is negative")
	}

	balance.Value = &res
	k.SetMyBalance(ctx, balance)

	return nil
}

func (k Keeper) AddValue(ctx sdk.Context, addr string, amount string) error {
	amtInt, ok := sdk.NewIntFromString(amount)
	if !ok {
		panic("can't convert string amount to sdk.Int")
	}
	balance := k.GetMyBalance(ctx, addr)

	res := balance.Value.Add(amtInt)

	balance.Value = &res
	k.SetMyBalance(ctx, balance)
	return nil
}
