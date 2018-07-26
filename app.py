from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def main():
    return render_template('malik.html')

if __name__ == '__main__':
    app.run()
else:
    print("not run")
