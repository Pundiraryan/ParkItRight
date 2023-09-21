from flask import Flask,jsonify

app=Flask(__name__)

@app.route('/api/trial/<int:n>')
def func(n):
    d={
        'number': n,
        'square': n**2

    }
    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True, port=8080)
