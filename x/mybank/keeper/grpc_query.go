package keeper

import (
	"github.com/taiki-furu/mybank/x/mybank/types"
)

var _ types.QueryServer = Keeper{}
