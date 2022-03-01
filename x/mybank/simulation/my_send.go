package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/taiki-furu/mybank/x/mybank/keeper"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func SimulateMsgMySend(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgMySend{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the MySend simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "MySend simulation not implemented"), nil, nil
	}
}
