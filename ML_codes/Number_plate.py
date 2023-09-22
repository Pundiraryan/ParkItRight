from keras.models import load_model
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input
from keras.applications.vgg16 import decode_predictions
from keras.applications.vgg16 import VGG16
import numpy as np
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras import backend as K
 
from keras.models import load_model
 
model = load_model('C:\\Users\\lenovo\\Documents\\all_docs\\development\\Finalproject\\ParkItRight-Final\\model_saved.h5')
 
image = load_img("C:\\Users\\lenovo\\Downloads\\car3.jpeg", target_size=(224, 224))
img = np.array(image)
img = img / 255.0
img = img.reshape(1,224,224,3)
label = model.predict(img)
print("Predicted Class (0 - Yes , 1- No): ", label[0][0])