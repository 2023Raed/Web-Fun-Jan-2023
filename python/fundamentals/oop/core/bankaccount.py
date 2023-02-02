class BankAccount:
#  conditions by default
    int_rate=0.5
    balance=100
    accounts=[]

    # constructor
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)
        
        # deposit in account
    def deposit(self, amount):
       self.balance+=amount
       return self

    #    method withdraw from account
    def withdraw(self, amount):
        if self.balance-amount>0:
          self.balance-=amount
        else:
          print("Insufficient funds: Charging a $5 fee") 
          self.balance -= 5  
        return self

 
    def display_account_info(self):
        print(f"there is in your bankaccount: {self.balance} ")
        return self
    
    def yield_interest(self):
        if self.balance > 0 :
          self.balance += (self.balance * self.int_rate)
        return self
    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()
account1=BankAccount(0.5,100)
account2=BankAccount(0.8,300)
account1.deposit(100).deposit(100).deposit(100).withdraw(10).yield_interest().display_account_info()
account2.deposit(100).deposit(100).withdraw(20).withdraw(20).withdraw(20).withdraw(20).yield_interest().display_account_info()

BankAccount.print_all_accounts()

