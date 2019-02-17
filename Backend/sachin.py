
import random
import datetime
from flask import Flask
from flask import jsonify
from flask import request,make_response
from functools import wraps
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask_cors import CORS, cross_origin






app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MONGO_DBNAME'] = 'juego' 
app.config['MONGO_URI'] = 'mongodb://localhost:27017/juego' 
app.config['JWT_SECRET_KEY'] = 'juegoStudio' 


jwt = JWTManager(app)
mongo = PyMongo(app)
cors = CORS(app)
###################################################################################################################
#to authenticate users using RIAG api

def auth_required(f):
  @wraps(f)
  def decorated(*args,**kwargs):
   
    auth = request.authorization
    if auth is not None:
      name = auth.username
      name_present = mongo.db.users.find_one({'name': name })
      
      if name_present is not None:
        if name_present['password'] == auth.password :
         print(name_present['name'] ,"-----Used RIAG-----", str(datetime.datetime.now()))
        return f(*args,**kwargs)
    return make_response('could not verify your login!',401,{'WWW-Authenticate':'Basic realm="login Required"'})
  return decorated

###################################################################################################################
#To get all users 

@app.route('/allUser', methods=['GET'])
@auth_required
def get_all_users():
  users = mongo.db.users
  output = []
  for s in users.find():
    output.append({'UserName' : s['name'], 'password' : s['password'],'token':s['token']})
  return jsonify({'result' : output})

###################################################################################################################
#check login only for admin access
@app.route('/login', methods=['POST'])
def login():
  admin = mongo.db.profile
  s = admin.find_one({'UserName' : request.json['UserName']})
  print(s)
  if s:
    if s['password'] == request.json['password']:
      access_token = create_access_token(identity = s['UserName'])
      output ={'token':access_token}
    else:
      output = "invalid password"
    return jsonify(output)
  output="invalid username/password"
  return jsonify(output)

#####################################################################################################################
#To generate loginCreditianls for a user

@app.route('/generate', methods=['POST'])
def generate_loginCreditianls():
  users = mongo.db.users
  print(request.json)
  name = request.json['UserName']
  name_present = users.find_one({'name': name })
  
  if name_present is None:
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678@#$&'
    password = ''
    for c in range(10):
      password+=random.choice(chars)
    access_token = create_access_token(identity = name)
    user_id = users.insert({'name': name, 'password': password,'token':access_token})
    newusers = mongo.db.users
    userData=[]
    for s in newusers.find():
      userData.append({'UserName' : s['name'], 'password' : s['password'],'token':s['token']})
    output={'status':'done', 'message':'successfully added','users':userData}
    return jsonify(output)
  return jsonify('username already taken')

#######################################################################################################################
#To Delete loginCreditianls for a user

@app.route('/delete', methods=['POST'])
def delete_loginCreditianls():
  users = mongo.db.users
  name = request.json['UserName']
  new_star = users.delete_one({'name': name})
  if new_star.deleted_count > 0 :
    newusers = mongo.db.users
    userData=[]
    for s in newusers.find():
      userData.append({'UserName' : s['name'], 'password' : s['password']})
    output={'status':'done', 'message':'successfully deleted','users':userData}
    return jsonify(output)
  return jsonify({'status' :'notDone'})

#######################################################################################################################
#To registe loginCreditianls for a user

@app.route('/register', methods=['POST'])
def register():
  users = mongo.db.profile
  print(request.json)
  emailId = request.json['emailId']
  name_present = users.find_one({'emailId': emailId })
  
  if name_present is None:
    password = request.json['password']
    name = request.json['userName']
    
    user_id = users.insert({'UserName': name, 'password': password,'emailId':emailId})
   
    
    access_token = create_access_token(identity = name)
    output={'token':'access_token', 'message':'successfully added'}
    return jsonify(output)
  return jsonify('emailId already taken')

#######################################################################################################################



if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
