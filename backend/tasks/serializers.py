from ninja import ModelSchema, Schema
from tasks.models import Task
from datetime import datetime
from typing import Optional


class TaskIn(Schema):
    title: Optional[str] = None
    content: str
    user_id: int
    note_id: Optional[int] = None
    completed: bool = False
    deadline: Optional[datetime] = None
    priority: Optional[str] = None
    category: Optional[str] = None


class TaskSchema(ModelSchema):
    class Meta:
        model = Task
        fields = "__all__"
