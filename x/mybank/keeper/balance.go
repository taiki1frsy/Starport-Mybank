package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k Keeper) SetBalance(ctx sdk.Context, addr sdk.AccAddress, balance sdk.Int) {
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))

	addrByte := addr.Bytes()
	bz := make([]byte, 8)

	balanceUint := sdk.NewUintFromBigInt(balance.BigInt())
	balanceValue := balanceUint.Uint64()
	binary.BigEndian.PutUint64(bz, balanceValue)
	balanceStore.Set(addrByte, bz)
}

func (k Keeper) GetBalance(ctx sdk.Context, addr sdk.AccAddress) sdk.Int {
	// Get the store using storeKey and balance store by using it
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceKey))

	// Get balalnce data from account balance store with address key
	addrByte := addr.Bytes()
	balance := balanceStore.Get(addrByte)
	balanceUint := binary.BigEndian.Uint64(balance)
	balanceInt := sdk.NewIntFromUint64(balanceUint)

	return balanceInt
}
