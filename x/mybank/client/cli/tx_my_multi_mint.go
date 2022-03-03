package cli

import (
	"strconv"

	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/taiki-furu/mybank/x/mybank/types"
)

var _ = strconv.Itoa(0)

func CmdMyMultiMint() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "my-multi-mint [amount] [recipients]",
		Short: "Broadcast message myMultiMint",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount := args[0]
			argrecipients := strings.Split(args[1], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMyMultiMint(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argrecipients,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
