package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/taiki-furu/mybank/testutil/keeper"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MybankKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
