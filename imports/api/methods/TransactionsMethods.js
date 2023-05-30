import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
// import { check } from "meteor/check";
import {
  TransactionsCollection,
  TRANSFER_TYPE,
  ADD_TYPE,
} from "../collections/TransactionsCollection";

Meteor.methods({
  "transactions.insert"(props) {
    const schema = new SimpleSchema({
      isTransferring: {
        type: Boolean,
      },
      sourceWalletId: {
        type: String,
      },
      destinationWalletId: {
        type: String,
        optional: !props.isTransferring,
      },
      amount: {
        type: Number,
        min: 1,
      },
    });

    const cleanedProps = schema.clean(props);
    schema.validate(cleanedProps);

    const { isTransferring, sourceWalletId, destinationWalletId, amount } =
      props;

    return TransactionsCollection.insert({
      type: isTransferring ? TRANSFER_TYPE : ADD_TYPE,
      sourceWalletId,
      destinationWalletId: isTransferring ? destinationWalletId : null,
      amount,
      createdAt: new Date(),
    });
  },
});
