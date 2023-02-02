from flask import Flask  
app = Flask(__name__)    
@app.route('/')          
def hello_world():
    return 'Hello World!'  


   
@app.route('/dojo')          
def Dojo():
    return 'Dojo'  
@app.route('/say/<string:name>')          
def sayHi(name):
    print(type(name))
    if type(name)==str:
        return f'{name}'
    else: 
        return "You have to put a name" 
@app.route('/repeat/<int:times>/<name>')          
def repeat(name,times):
    return f"{name} <br> " *times



if __name__=="__main__":   
    app.run(debug=True, port =5000)
      
