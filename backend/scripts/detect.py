import sys
import os
from pathlib import Path

# Add project root directory to Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from scripts.predict import predict
from ocr.ocr_module import extract_text


def detect_text(text):

    result = predict(text)

    return {
        "input_type": "text",
        "input": text,
        "prediction": result
    }


def detect_image(image_path):

    text = extract_text(image_path)

    result = predict(text)

    return {
        "input_type": "image",
        "image_path": image_path,
        "extracted_text": text,
        "prediction": result
    }


if __name__ == "__main__":

    print("\nTEXT TEST\n")

    text = "Garlic cures COVID instantly"

    print(detect_text(text))


    print("\nIMAGE TEST\n")

    image = str(Path(__file__).resolve().parents[2] / "data" / "samples" / "sample_image.png")

    print(detect_image(image))