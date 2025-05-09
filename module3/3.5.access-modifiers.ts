{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    // if we need to create another class from this class, we will use 'protect'.
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr.Gorib", 234);
  //   goribManusherAccount.balance = 444;//error
  goribManusherAccount.addDeposit(10);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
}
