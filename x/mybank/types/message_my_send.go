package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMySend = "my_send"

var _ sdk.Msg = &MsgMySend{}

func NewMsgMySend(creator string, from string, to string, amount string) *MsgMySend {
	return &MsgMySend{
		Creator: creator,
		From:    from,
		To:      to,
		Amount:  amount,
	}
}

func (msg *MsgMySend) Route() string {
	return RouterKey
}

func (msg *MsgMySend) Type() string {
	return TypeMsgMySend
}

func (msg *MsgMySend) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMySend) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMySend) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
