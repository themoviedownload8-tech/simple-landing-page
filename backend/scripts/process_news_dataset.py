import pandas as pd
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
DATASETS_DIR = ROOT_DIR / "data" / "datasets"
PROCESSED_DIR = ROOT_DIR / "data" / "processed"

PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

fake = pd.read_csv(DATASETS_DIR / "Fake.csv")
true = pd.read_csv(DATASETS_DIR / "True.csv")

# Combine title + text
fake["text"] = fake["title"] + " " + fake["text"]
true["text"] = true["title"] + " " + true["text"]

fake["label"] = 1
true["label"] = 0

fake = fake[["text", "label"]]
true = true[["text", "label"]]

news = pd.concat([fake, true])

news.to_csv(PROCESSED_DIR / "news_processed.csv", index=False)

print("News dataset processed successfully")