from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Prompt(BaseModel):
    prompt: str


def generate_answer(prompt):
    return "No idea"


@app.get("/api")
def generate_text():
    return {"initialText": "Ask anything..."}


@app.post("/api")
def process_prompt(payload: Prompt):
    answer = generate_answer(payload.prompt)
    return {
        "prompt": payload.prompt,
        "answer": answer
    }
