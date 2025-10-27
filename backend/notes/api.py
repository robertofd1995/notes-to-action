from ninja import Router
from ninja.errors import HttpError
from notes.models import Note
from notes.serializers import NoteSchema, NoteIn
from django.shortcuts import get_object_or_404


router = Router()


@router.get('/{note_id}', response=NoteSchema)
def get_note(request, note_id: int):
    return get_object_or_404(Note, id=note_id)

@router.get('/', response=list[NoteSchema])
def get_notes(request):
    return Note.objects.all()

@router.post('/', response=NoteSchema)
def create_notes(request, payload: NoteIn):
    note = Note.objects.create(**payload.dict())
    return note

@router.put('/', response=NoteSchema)
def update_note(request, payload: NoteSchema):
    note = get_object_or_404(Note, id=payload.id)
    for attr, value in payload.dict().items():
        setattr(note, attr, value)
    note.save()
    return note

@router.patch('/', response=NoteSchema)
def patch_note(request, payload: NoteSchema):
    note = get_object_or_404(Note, id=payload.id)
    for attr, value in payload.dict(exclude_unset=True).items():
        setattr(note, attr, value)
    note.save()
    return note

@router.delete('/{note_id}')
def delete_note(request, note_id: int):
    try:
        note = Note.objects.get(id=note_id)
        note.delete()
        return {"success": True}
    except Note.DoesNotExist:
        return HttpError(404, "Note not found")
