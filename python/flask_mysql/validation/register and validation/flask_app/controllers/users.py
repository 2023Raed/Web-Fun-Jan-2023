from flask import render_template,request,redirect,session,flash
from flask_app import app
from flask_app.models.user import User



from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

#register user with validate form
@app.route('/users/register',methods=['POST'])
def register():
    if not User.validate_user(request.form):
        return redirect('/')
    
    data={
        **request.form,
        'password':bcrypt.generate_password_hash(request.form['password'])
    }
    user=User.create_user(data)
    session['user_id']=user

    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:#if he has not an id redirect to the register page
        return redirect('/')
    log_user=User.get_by_id({'id':session['user_id']})

    return render_template('dashboard.html',log=log_user)


#Login user with validate form
@app.route('/users/login',methods=['POST'])
def login():
    user_db = User.get_by_email(request.form)
    if not user_db:
        flash('Invalid email or password',"login")
        return redirect('/')
    if not bcrypt.check_password_hash(user_db.password, request.form['password']):
        flash('Invalid email or password',"login")
        return redirect('/')
    session['user_id']=user_db.id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



