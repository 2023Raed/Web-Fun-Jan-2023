from flask import Flask, render_template,session,redirect,request
app = Flask(__name__)
app.secret_key ='145236789'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login',methods=['POST'])
def login():
    session['name']=request.form['name']
    session ['locations'] = request.form['locations']
    session['favorite language']=request.form['favorite language']
    session['comments'] = request.form['comments']
    return redirect('/change')
@app.route('/change')
def change():
    return render_template('change.html')

if __name__ == "__main__":
    app.run(debug=True, port=5001)