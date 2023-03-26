from enum import Enum


class QuestionAnswer(Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"


class QuestionChoice:
    def __init__(self, description: str | None, answer: QuestionAnswer):
        self.description = description
        self.answer = answer


class SubjectQuestion:
    def __init__(self, number: int, description: str, choices: list[QuestionChoice], correct_answer: QuestionAnswer):
        self.number = number
        self.description = description
        self.choices = choices
        self.correct_answer = correct_answer
