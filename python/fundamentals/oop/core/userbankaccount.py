from bankaccount import bankaccount
class Usebankaccount(bankaccount) :
    def init(self, name, email):
         super().init(interest_rate=0.02, balance=0)
         self.name = name
         self.email = email
         self.account = bankaccount(interest_rate=0.02, balance=0)
    def make_deposit(self,amount):
        self.account.deposit(amount)
        print(self.account.balance)
        return self
    def make_withdraw(self,amount):
        self.account.withdraw(amount)
        print(self.account.balance)
        return self
    def display(self):
        self.account.display_account_info()

ahmed=Usebankaccount("ahmed","ahmed@gmail.com")
ahmed.make_deposit(100).make_withdraw(10).display()
# @classmethod
# def print_all_accounts(cls):
#         for account in cls.accounts:
#             account.display_account_info()
# BankAccount.print_all_accounts()


# class User:
#     def __init__(self, name):
#         self.name = name
#         self.account = {
#             "account1" : BankAccount(0.5,1000),
#             "account2" : BankAccount(0.2,2000)
#         }
    
#     # other methods
#     def display_user_balance(self):
#        print(f"user: {self.name} balance :${self.account['account1'].display_account_info()}")
#        return(self)

#     # def make_deposit(self, amount):

# raed = User("Read")
# raed.account['account1'].deposit(400)
# raed.display_user_balance()


