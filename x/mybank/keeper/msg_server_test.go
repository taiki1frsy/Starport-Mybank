package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/taiki-furu/mybank/testutil/keeper"
	"github.com/taiki-furu/mybank/x/mybank/keeper"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MybankKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
