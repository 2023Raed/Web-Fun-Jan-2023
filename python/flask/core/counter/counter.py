from flask import Flask, render_template,session,redirect
app = Flask(__name__)

app.secret_key="kkkjjjggghhh."

@app.route('/a')
def count():
    if"counter" not in session:
        session['counter']=0
    else:
        session['counter']+=1

    return render_template("index.html")

@app.route('/b')
def direction():
    session.clear()
    return redirect('/')




if __name__ == "__main__":
    app.run(debug=True, port=5001)