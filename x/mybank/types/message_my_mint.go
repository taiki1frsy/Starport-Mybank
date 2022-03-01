package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMyMint = "my_mint"

var _ sdk.Msg = &MsgMyMint{}

func NewMsgMyMint(creator string, amount string, receiver string) *MsgMyMint {
	return &MsgMyMint{
		Creator:  creator,
		Amount:   amount,
		Receiver: receiver,
	}
}

func (msg *MsgMyMint) Route() string {
	return RouterKey
}

func (msg *MsgMyMint) Type() string {
	return TypeMsgMyMint
}

func (msg *MsgMyMint) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMyMint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMyMint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
