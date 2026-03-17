import pandas as pd
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
DATASETS_DIR = ROOT_DIR / "data" / "datasets"
PROCESSED_DIR = ROOT_DIR / "data" / "processed"

PROCESSED_DIR.mkdir(parents=True, exist_ok=True)

# Load all three files
train = pd.read_csv(DATASETS_DIR / "train.tsv", sep="\t", header=None)
valid = pd.read_csv(DATASETS_DIR / "valid.tsv", sep="\t", header=None)
test = pd.read_csv(DATASETS_DIR / "test.tsv", sep="\t", header=None)

# Combine them
df = pd.concat([train, valid, test])

# Extract needed columns
df = df[[1, 2]]
df.columns = ["label", "text"]

# Convert labels to binary
label_map = {
    "true": 0,
    "mostly-true": 0,
    "half-true": 1,
    "barely-true": 1,
    "false": 1,
    "pants-fire": 1
}

df["label"] = df["label"].map(label_map)

# Drop missing rows
df = df.dropna()

# Save processed dataset
df.to_csv(PROCESSED_DIR / "liar_processed.csv", index=False)

print("LIAR dataset processed successfully")