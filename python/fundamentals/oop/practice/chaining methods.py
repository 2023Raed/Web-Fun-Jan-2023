class user:

    def init(self,first_name,last_name,email,age ):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    def display_info(self) :

        print(f"first_name: {self.first_name}")
        print(f"last_name: {self.last_name}")
        print(f"email: {self.email}")
        print(f"age : {self.age}")
        print(f"reward_member : {self.is_rewards_member}")
        print(f"card_points : {self.gold_card_points}")

    def enroll(self):
        self.gold_card_points = 200
        self.is_rewards_member=True
    def spend_points(self, amount) :
        self.gold_card_points -= amount

raed_user=user("raed", "messaoud" , "alexwick@gmail.com" ,32)
rania_user=user("rania", "messaoud" , "rania31@gmail.com" ,29)
raed_user.enroll().spend_points(15).display_info()
rania_user.enroll().spend_points(80).display_info()


