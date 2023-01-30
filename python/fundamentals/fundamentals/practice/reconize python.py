num1 = 42  #variable declaration
num2 = 2.3  #variable declaration
boolean = True #variable declaration
string = 'Hello World' #variable declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration
print(type(fruit)) #log statment
print(pizza_toppings[1]) #log statment
pizza_toppings.append('Mushrooms') #add value list
print(person['name'])#log statement dictionnary
person['name'] = 'George' #change  value dictionnary
person['eye_color'] = 'blue'
print(fruit[2]) #access value='banana'

if num1 > 45:#conditionnal
    print("It's greater")
else:
    print("It's lower")#it's lower

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")#just right

for x in range(5):#0,1,2,3,4
    print(x)
for x in range(2,5):
    print(x)#2,3,4
for x in range(2,10,3):
    print(x)#2,5,8
x = 0
while(x < 5):
    print(x)#0,1,2,3,4
    x += 1

pizza_toppings.pop()#pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese']
pizza_toppings.pop(1) #pizza_toppings = ['Pepperoni', 'Jalepenos', 'Cheese', 'Olives']

print(person)
person.pop('eye_color')
print(person)

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)