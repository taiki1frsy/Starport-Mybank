package cli

import (
	"fmt"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

var _ = strconv.Itoa(0)

func CmdMyMint() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "my-mint [amount] [receiver]",
		Short: "Broadcast message myMint",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount := args[0]
			argReceiver := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMyMint(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argReceiver,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}
	fmt.Printf("succeded")

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
