package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

var _ = strconv.Itoa(0)

func CmdMyBalanceValue() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "my-balance-value [address]",
		Short: "Query myBalanceValue",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryMyBalanceValueRequest{

				Address: reqAddress,
			}

			res, err := queryClient.MyBalanceValue(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
