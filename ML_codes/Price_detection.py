
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# df=pd.read_csv("project1.csv")

# df.head(20)

# df = df.drop('id', axis=1)

# df.head(10)

# from sklearn.preprocessing import LabelEncoder
# le=LabelEncoder()
# Time=le.fit_transform(df['time'])
# AreaType=le.fit_transform(df['areatype'])

# df['time']=Time
# df['areatype']=AreaType

# df.head(4)

# df.head(18)

# from sklearn import linear_model

# x=df[['time','aqi','areatype','hours']]
# y=df['price']

# from sklearn.model_selection import train_test_split
# x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state = 100)

# regr = linear_model.LinearRegression()
# regr.fit(x, y)

# print(regr.predict([[2,250,0,1]]))


# color={
#     "delhi":2,
#     "mumbai":1,
    

# }

from flask import Flask,jsonify,request

app=Flask(__name__)

# received_arrays=[]

# #@app.route('/api/prd')
# @app.route('/api/prd', methods=['POST'])
# def process_array():
#     try:
#         # Get the JSON data from the request body
#         request_data = request.get_json()

        

#         base_url = "https://api.waqi.info"
#         token = "ee0c40c8c70b6b75820180c6f60d1571c76ee0c5"

#         city = request_data.city
#         color_code=color[request_data.city]
#         r = requests.get(base_url + f"/feed/{city}/?token={token}")

#         ans="City: {}, Air quality index: {}".format(r.json()['data']['city']['name'], r.json()['data']['aqi'])
#         parts = ans.split(':')

# # Extract the AQI part and remove leading/trailing spaces
#         aqi_part = parts[-1].strip()

# # Convert the AQI to an integer
#         aqi = int(aqi_part)
#         arr=[request_data.price,aqi_part,color_code,4]
#         # Check if the request data is a list (array)
#         if isinstance(arr, list):
#             #python_list = request_data.tolist()
#             #json_data = json.dumps(python_list)
#             # Process the array data as needed
#             result = regr.predict([arr])
#             ans={
#                 "ans":result[0]
#             }
#             return ans
#         else:
#             return jsonify({'error': 'Input must be a JSON array'}), 400
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500



#!pip install easyocr
#!pip install imutils
import cv2


@app.route('/process-image', methods=['POST'])
def process_image():
    try:
        # Get the image from the request
        image2 = request.files['image']
        image_data = image2.read()  # Read the image binary data
        image_array = np.frombuffer(image_data, np.uint8)  # Convert to NumPy array
        img = cv2.imdecode(image_array, cv2.IMREAD_COLOR) 
        #img=cv2.imread(image2)

        # Check if an image was uploaded
        if img.any():
           
            func(img)


            result = {
                "variable1": 42,
                "variable2": "Hello, World!",
            }

            return jsonify(result)

        else:
            return jsonify({"error": "No image uploaded."}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500


#import cv2
from matplotlib import pyplot as plt
import numpy as np
import imutils
import easyocr

def func(img):
    #img = cv2.imread(image)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    plt.imshow(cv2.cvtColor(gray, cv2.COLOR_BGR2RGB))

    bfilter = cv2.bilateralFilter(gray, 11, 17, 17)
    edged = cv2.Canny(bfilter, 30, 200)
    plt.imshow(cv2.cvtColor(edged, cv2.COLOR_BGR2RGB))
    keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = imutils.grab_contours(keypoints)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]
    location = None
    for contour in contours:
        approx = cv2.approxPolyDP(contour, 10, True)
        if len(approx) == 4:
            location = approx
            break
    location
    mask = np.zeros(gray.shape, np.uint8)
    new_image = cv2.drawContours(mask, [location], 0,255, -1)
    new_image = cv2.bitwise_and(img, img, mask=mask)
    plt.imshow(cv2.cvtColor(new_image, cv2.COLOR_BGR2RGB))
    (x,y) = np.where(mask==255)
    (x1, y1) = (np.min(x), np.min(y))
    (x2, y2) = (np.max(x), np.max(y))
    cropped_image = gray[x1:x2+1, y1:y2+1]
    plt.imshow(cv2.cvtColor(cropped_image, cv2.COLOR_BGR2RGB))

    reader = easyocr.Reader(['en'])
    result = reader.readtext(cropped_image)
    result
    text = result[0][-2]
    font = cv2.FONT_HERSHEY_SIMPLEX
    res = cv2.putText(img, text=text, org=(approx[0][0][0], approx[1][0][1]+60), fontFace=font, fontScale=1, color=(0,255,0), thickness=2, lineType=cv2.LINE_AA)
    res = cv2.rectangle(img, tuple(approx[0][0]), tuple(approx[2][0]), (0,255,0),3)
    plt.imshow(cv2.cvtColor(res, cv2.COLOR_BGR2RGB))

if __name__ == '__main__':
    app.run(debug=True, port=8080)

#print("Intercept: ",regr.intercept_)
#print("Coefficients:")
#list(zip(x, regr.coef_))

#y_pred= regr.predict(x_test)

#mlr_diff = pd.DataFrame({'Actual value': y_test, 'Predicted value': y_pred})
#print(mlr_diff.head())

##from sklearn import metrics
#meanAbErr = metrics.mean_absolute_error(y_test, y_pred)
#meanSqErr = metrics.mean_squared_error(y_test, y_pred)
#rootMeanSqErr = np.sqrt(metrics.mean_squared_error(y_test, y_pred))
#print('R squared: {:.2f}'.format(regr.score(x,y)*100))
#print('Mean Absolute Error:', meanAbErr)
#print('Mean Square Error:', meanSqErr)
#print('Root Mean Square Error:', rootMeanSqErr)

