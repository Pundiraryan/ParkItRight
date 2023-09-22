import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB


df=pd.read_csv("C:\\Users\\lenovo\\Documents\\all_docs\\development\\Finalproject\\ParkItRight-Final\\ML_codes\\enlist_dataset.csv")
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

app = Flask(__name__)

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
            return jsonify({"message": "Accepted"})
        else:
            return jsonify({"message":"Rejected"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)


# accuracy = accuracy_score(y_test, y_pred)
# print(f"Accuracy: {accuracy * 100:.2f}%")
