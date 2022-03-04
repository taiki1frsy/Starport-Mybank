package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func (k Keeper) GetMyBalance(ctx sdk.Context, addr string) types.MyBalance {
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceStoreKey))

	accAddr, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		panic(err)
	}

	myBalanceByte := balanceStore.Get(accAddr.Bytes())
	if myBalanceByte == nil {
<<<<<<< HEAD

=======
		value := sdk.ZeroInt()
>>>>>>> fifth
		var newMyBalance = types.MyBalance{
			Address: addr,
			Value:   &value,
		}
		return newMyBalance
	}

	var myBalance types.MyBalance
	err = k.cdc.Unmarshal(myBalanceByte, &myBalance)
	if err != nil {
		panic(err)
	}

	return myBalance
}

func (k Keeper) SetMyBalance(ctx sdk.Context, balance types.MyBalance) error {
	store := ctx.KVStore(k.storeKey)
	balanceStore := prefix.NewStore(store, []byte(types.BalanceStoreKey))

	accAddr, err := sdk.AccAddressFromBech32(balance.Address)
	if err != nil {
		return err
	}

	bz := k.cdc.MustMarshal(&balance)

	balanceStore.Set(accAddr.Bytes(), bz)

	return nil
}
