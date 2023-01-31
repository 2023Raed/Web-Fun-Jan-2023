
x = [ [5,2,3], [10,8,9] ] 
x[1]=[15,8,9]
print(x)
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0] ['last_name']='Bryant'
print(students)
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0]='Andreas'
print(sports_directory)
z = [ {'x': 10, 'y': 20} ]
z[0]['y']=30
print(z)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def itteratedictionary2(list):
    for i in range (0,len(list)):
        output=""
        for key,val in list[i].items():
           print( f" {key},{val} ")
# itteratedictionary2(students)

def itteratedictionary2(list):
    for i in students:
        print(i['first_name'])
itteratedictionary2(students)


def iterateDictionary2firstname( list):
     for i in range (0,len(list)):
        output=""
        for key,val in list[i].items():
           output+= f"{val} "
        print(output)
# iterateDictionary2firstname (students)
def iterateDictionary2lastname( list):
     for i in range (0,len(list)):
        output=""
        for key,val in list[i].items():
           output+= f"{val} "
        print(output)