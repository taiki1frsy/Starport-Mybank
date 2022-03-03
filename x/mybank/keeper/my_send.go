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
	balanceValue, ok := sdk.NewIntFromString(balance.Value)
	if !ok {
		panic("can't convert string amount to sdk.Int")
	}

	res := balanceValue.Sub(amtInt)
	if res.IsNegative() {
		return sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "value is negative")
	}
	resString := res.String()
	balance.Value = resString
	k.SetMyBalance(ctx, balance)

	return nil
}

func (k Keeper) AddValue(ctx sdk.Context, addr string, amount string) error {
	amtInt, ok := sdk.NewIntFromString(amount)
	if !ok {
		panic("can't convert string amount to sdk.Int")
	}
	balance := k.GetMyBalance(ctx, addr)
	balanceValue, ok := sdk.NewIntFromString(balance.Value)
	if !ok {
		panic("can't convert string amount to sdk.Int")
	}

	res := balanceValue.Add(amtInt)
	resString := res.String()
	balance.Value = resString
	k.SetMyBalance(ctx, balance)
	return nil
}
