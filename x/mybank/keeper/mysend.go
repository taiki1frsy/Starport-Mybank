package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
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
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))
	balanceByte := balanceStore.Get(addr.Bytes())
	balance := binary.BigEndian.Uint64(balanceByte)
	balanceInt := sdk.NewIntFromUint64(balance)

	res := balanceInt.Add(amount)
	// If returns well, then it means ok
	k.SetBalance(ctx, addr.Bytes(), res)

	return nil
}

func (k msgServer) SubBalance(ctx sdk.Context, addr sdk.AccAddress, amount sdk.Int) error {
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))
	balanceByte := balanceStore.Get(addr.Bytes())
	balance := binary.BigEndian.Uint64(balanceByte)
	balanceInt := sdk.NewIntFromUint64(balance)

	res := balanceInt.Sub(amount)
	k.SetBalance(ctx, addr, res)

	return nil
}
