import {
  AccountModel,
  AddAccountModel,
  AddAccountRepository,
  MongoHelper,
} from './imports';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts');
    const result = await accountCollection.insertOne(accountData);
    const account = result.ops[0];
    const { _id, ...accountWithoutId } = account;
    return Object.assign({}, accountWithoutId, { id: _id });
  }
}