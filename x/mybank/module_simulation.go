package mybank

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/taiki-furu/mybank/testutil/sample"
	mybanksimulation "github.com/taiki-furu/mybank/x/mybank/simulation"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = mybanksimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgMyMint = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMyMint int = 100

	opWeightMsgMyMultiMint = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMyMultiMint int = 100

	opWeightMsgMySend = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMySend int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	mybankGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&mybankGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgMyMint int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMyMint, &weightMsgMyMint, nil,
		func(_ *rand.Rand) {
			weightMsgMyMint = defaultWeightMsgMyMint
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMyMint,
		mybanksimulation.SimulateMsgMyMint(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMyMultiMint int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMyMultiMint, &weightMsgMyMultiMint, nil,
		func(_ *rand.Rand) {
			weightMsgMyMultiMint = defaultWeightMsgMyMultiMint
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMyMultiMint,
		mybanksimulation.SimulateMsgMyMultiMint(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMySend int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMySend, &weightMsgMySend, nil,
		func(_ *rand.Rand) {
			weightMsgMySend = defaultWeightMsgMySend
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMySend,
		mybanksimulation.SimulateMsgMySend(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
