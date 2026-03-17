import pandas as pd
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
PROCESSED_DIR = ROOT_DIR / "data" / "processed"

PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

news = pd.read_csv(PROCESSED_DIR / "news_processed.csv")
liar = pd.read_csv(PROCESSED_DIR / "liar_processed.csv")

combined = pd.concat([news, liar])

combined = combined.dropna()

combined.to_csv(PROCESSED_DIR / "combined_dataset.csv", index=False)

print("Combined dataset created successfully")