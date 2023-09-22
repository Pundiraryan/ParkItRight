from flask import Flask, request, jsonify
app = Flask(__name__)
@app.route('/image-trial', methods=['POST'])
def process_request():
    try:
        # Get data from the request body
      #image = load_img("C:\\Users\\lenovo\\Downloads\\car3.jpeg", target_size=(224, 224))
      image2 = request.files['image']
      print(image2)
      
      #img = np.array(image2)
      #img = img / 255.0
      #img = img.reshape(1,224,224,3)
      #label = model.predict(img)
      #print("Predicted Class (0 - Yes , 1- No): ", label[0][0])
    #   if(label[0][0]<0.5):
    #       return True
    #   else:
    #       return False
        

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)