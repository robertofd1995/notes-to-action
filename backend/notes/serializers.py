from ninja import ModelSchema, Schema
from notes.models import Note

class NoteIn(Schema):
    title : str
    content : str
    user_id : int

class NoteSchema(ModelSchema):
    class Meta:
        model = Note
        fields = "__all__"