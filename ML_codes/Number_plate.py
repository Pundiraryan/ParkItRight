from keras.models import load_model
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input
from keras.applications.vgg16 import decode_predictions
from keras.applications.vgg16 import VGG16
import numpy as np
 
from keras.models import load_model


from flask import Flask, request, jsonify

app = Flask(__name__)
model = load_model('C:\\Users\\lenovo\\Documents\\all_docs\\development\\Finalproject\\ParkItRight-Final\\model_saved.h5')
@app.route('/process-request', methods=['POST'])
def process_request():
    try:
        # Get data from the request body
      #image = load_img("C:\\Users\\lenovo\\Downloads\\car3.jpeg", target_size=(224, 224))
      image2 = request.files['image']
      
      img = np.array(image2)
      img = img / 255.0
      img = img.reshape(1,224,224,3)
      label = model.predict(img)
      #print("Predicted Class (0 - Yes , 1- No): ", label[0][0])
      if(label[0][0]<0.5):
          return True
      else:
          return False
        

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
 

 
# image = load_img("C:\\Users\\lenovo\\Downloads\\car3.jpeg", target_size=(224, 224))
# img = np.array(image)
# img = img / 255.0
# img = img.reshape(1,224,224,3)
# label = model.predict(img)
# print("Predicted Class (0 - Yes , 1- No): ", label[0][0])