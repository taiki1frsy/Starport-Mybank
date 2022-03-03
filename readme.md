# mybank
**mybank** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

The core data structure is like this:
MyBalance{ string address, string value }
address is the bech32 form.
In code, I manage this date in KVStore whose key is byte array of AccAddress and value is byte array of address of MyBalance object.

Firstly it is needed to my-mint message to make value to my-send in this way:     
~~~ zsh
mybankd tx mybank my-mint [amount] [recipient]
~~~
And then, enable to use my-send in this way:   
~~~ zsh
mybankd tx mybank my-send [fromAddr] [toAddr] [amount]
~~~
Mysend prevents from incorrect amount transfer.
Can get all balances object:
~~~ zsh
mybank q mybank my-balances
~~~
