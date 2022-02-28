package mybank_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/taiki-furu/mybank/testutil/keeper"
	"github.com/taiki-furu/mybank/testutil/nullify"
	"github.com/taiki-furu/mybank/x/mybank"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MybankKeeper(t)
	mybank.InitGenesis(ctx, *k, genesisState)
	got := mybank.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
