package keeper_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/suite"

	"github.com/cosmos/cosmos-sdk/simapp"
	sdk "github.com/cosmos/cosmos-sdk/types"

	//"github.com/taiki-furu/mybank/testutil/keeper"

	"github.com/taiki-furu/mybank/x/mybank/keeper"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

var (
	zeroValue  = sdk.ZeroInt()
	genesisAcc = types.MyBalance{
		Address: "cosmos17sntfnytl7g69pcdzeydty6t2ndztwh6nxtyeg",
		Value:   &zeroValue,
	}
	testAddress = "cosmos17sntfnytl7g69pcdzeydty6t2ndztwh6nxtyez"
	//ctx = sdk.Contex
)

type IntegrationTestSuite struct {
	suite.Suite

	app         *simapp.SimApp
	ctx         sdk.Context
	queryClient types.QueryClient
}

func (suite *IntegrationTestSuite) SetupSuite() {
	suite.T().Logf("===== SetupSuite =====")
}

// Don't get how to use suite package to test in this sdk  ffffuuuuuuu**********k
func (suite *IntegrationTestSuite) TestGetMyBalance() {
	k := keeper.Keeper{}
	fmt.Println("heeeeeeeeeeeeeeeeeellllllllllllllllllloooooooooooooooooooo")
	fmt.Printf("balance: %v\n", genesisAcc)
	address, _ := sdk.AccAddressFromBech32(genesisAcc.Address)
	fmt.Printf("address: %v\n", address)
	//fmt.Printf("addrss byte: %v\n", address.Bytes())

	mybalance := k.GetMyBalance(suite.ctx, testAddress)

	suite.T().Logf("%v", mybalance)
	//fmt.Printf("mybalance : %v", mybalance)
}

func TestKeeperTestSuite(t *testing.T) {
	suite.Run(t, new(IntegrationTestSuite))
}
