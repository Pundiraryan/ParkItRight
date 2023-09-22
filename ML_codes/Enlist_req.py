import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB


df=pd.read_csv("C:\\Users\\ASUS\\Documents\\WEB DEVELOPMENT\\PROJECTS\\air\\project\\ML_codes\\enlist_dataset.csv")
df.head(4)



#x=[['Cost','Security','Ccctv','CarWash','Congestion']]
#y=['Yes/No']

x=df.iloc[:, :-1].values
y=df.iloc[:,-1].values



x_train, x_test, y_train, y_test = train_test_split(x, y, train_size=0.8, random_state = 101)





nb_classifier = GaussianNB()


nb_classifier.fit(x_train, y_train)

print(y_test)
print(nb_classifier.predict(x_test))

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app, origins=['http://127.0.0.1:5173'],supports_credentials=True)

CORS(app)
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response


@app.route('/process-request', methods=['POST'])
def process_request():
    try:
        # Get data from the request body
        request_data = request.get_json()

        # Extract parameters from the request data
        cost = request_data.get('cost')
        security = request_data.get('security')
        cctv = request_data.get('cctv')
        carwash = request_data.get('carwash')
        area = request_data.get('area')

        result=nb_classifier.predict([[cost,security,cctv,carwash,area]])
         

        # Perform some processing based on the parameters
         

        # Return the result as JSON response
        if(result[0]==1):
            return jsonify({"message":"Accepted"})
        else:
            return jsonify({"message":"Rejected"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True,port=8080)


# accuracy = accuracy_score(y_test, y_pred)
# print(f"Accuracy: {accuracy * 100:.2f}%")
