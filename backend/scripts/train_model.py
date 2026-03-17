import pandas as pd
import re
import joblib
import nltk
from pathlib import Path
from nltk.corpus import stopwords
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

nltk.download("stopwords", quiet=True)

ROOT_DIR = Path(__file__).resolve().parents[2]
PROCESSED_DIR = ROOT_DIR / "data" / "processed"
MODELS_DIR = ROOT_DIR / "backend" / "models"

MODELS_DIR.mkdir(parents=True, exist_ok=True)

stop_words = set(stopwords.words("english"))

def clean_text(text):
    text = text.lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"[^a-zA-Z ]", "", text)
    words = text.split()
    words = [w for w in words if w not in stop_words]
    return " ".join(words)

# Load dataset
df = pd.read_csv(PROCESSED_DIR / "combined_dataset.csv")

df["text"] = df["text"].apply(clean_text)

X = df["text"]
y = df["label"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# TF-IDF vectorization
vectorizer = TfidfVectorizer(max_features=5000)

X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train classifier
model = LogisticRegression()
model.fit(X_train_vec, y_train)

# Evaluate
preds = model.predict(X_test_vec)
print(classification_report(y_test, preds))

# Save model
joblib.dump(model, MODELS_DIR / "misinformation_model.pkl")
joblib.dump(vectorizer, MODELS_DIR / "tfidf_vectorizer.pkl")

print("Model saved successfully")