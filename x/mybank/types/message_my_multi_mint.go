package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMyMultiMint = "my_multi_mint"

var _ sdk.Msg = &MsgMyMultiMint{}

func NewMsgMyMultiMint(creator string, amount string, receivers []string) *MsgMyMultiMint {
	return &MsgMyMultiMint{
		Creator:   creator,
		Amount:    amount,
		Receivers: receivers,
	}
}

func (msg *MsgMyMultiMint) Route() string {
	return RouterKey
}

func (msg *MsgMyMultiMint) Type() string {
	return TypeMsgMyMultiMint
}

func (msg *MsgMyMultiMint) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMyMultiMint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMyMultiMint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
