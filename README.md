# FLask micro-service deployed on Heroku

[![Hex.pm](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/junaidfiaz143/Flask-Jquery-Calculator/blob/master/LICENSE) [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/Django.svg)](https://www.python.org/)


[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Flask%20micro-service%20deployed%20on%20Heroku(flask-calculator-api-heroku.herokuapp.com)%20https://github.com/junaidfiaz143/Flask-Jquery-Calculator&&via=junaidfiaz143&hashtags=Micro-Service,Flask,Heroku,Jquery,developer)

In this project you will discover how to create Flask micro-service in python.
You can see this project as running on [Here](https://flask-calculator-api-heroku.herokuapp.com)

## Getting Started

### Heroku
Create account on [Heroku](https://www.heroku.com)

Follow these steps, specifically:

+	First of all create Flask micro-service.
+	Download Heroku CLI.
+	Open CMD on the Flask micro-service folder.
+	You need a web server called Gunicorn, install it using command ```pip install gunicorn```
+	Then create a file named as Procfile without any extension, and write ```web: gunicorn app:app``` in the Procfile, here web is used to start web server and app:app is module and app name respectively.
+	Then create requirements.txt, this tell the server to install these dependencies, create it using command ```pip freeze > requirements.txt```.
+	Then login to heroku using command ```heroku login```.
+	Then create to heroku app using command ```heroku create app-name-api-heroku```, here app-name is the name of your app.
+	The above step give the app url and it git url.
+	Then clone your app git to remote using command ```heroku git:clone -a app-name-api-heroku```.
+	Then commit these changes using command ```git commit -m "some_comments"```.
+	Then deploy it using using command ```git push heroku master"```.

### Prerequisites

What things you need to install the software and how to install them

```
puthon IDE
Heroku CLI
```
<!-- 
## Deployment

Add additional notes about how to deploy this on a live system -->

## Built With

* [python](https://www.python.org/) - Programming Language
* [flask](http://flask.pocoo.org/) - Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
* [jQuery](https://jquery.com/) - jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

## Authors

* **M.Junaid Fiaz** - [JD](https://github.com/junaidfiaz143)
<!-- 
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the APACHE License - see the [LICENSE.md](LICENSE) file for details
<!-- 
## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->

