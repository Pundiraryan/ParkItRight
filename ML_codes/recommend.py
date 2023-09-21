import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB


df=pd.read_csv("Recommendation_NaiveBayes2.csv")
df.head(4)



x=[['Cost','Security','Ccctv','CarWash','Congestion']]
y=['Yes/No']



x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state = 101)





nb_classifier = GaussianNB()


nb_classifier.fit(X_train, y_train)


y_pred = nb_classifier.predict(X_test)


accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy * 100:.2f}%")
