import sys
import os
from pathlib import Path

# Add project root to path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from ocr.ocr_module import extract_text
from scripts.predict import predict


def detect_image(image_path):

    text = extract_text(image_path)

    result = predict(text)

    return {
        "extracted_text": text,
        "prediction": result
    }


if __name__ == "__main__":

    image = str(Path(__file__).resolve().parents[2] / "data" / "samples" / "sample_image.png")

    output = detect_image(image)

    print("\nImage Analysis Result:\n")

    print(output)