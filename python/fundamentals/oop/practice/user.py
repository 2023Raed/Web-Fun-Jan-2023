class User:

    def __init__(self, first_name, last_name, email, age):

        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("==========================")
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("==========================")

    def enroll(self):

        self.is_rewards_member = True
        self.gold_card_points = 200


    def spend_points(self, amount):

        self.gold_card_points-=amount


my_user = User("raed", "messaoud", "raed.messaoud1993@gmail.com", 29).display_info().enroll().spend_points(100)

my_user2 = User("rania", "messaoud", "rania.messaoud1991@gmail.com", 32).display_info().enroll().spend_points(100)



