from ninja import Router
from ninja.errors import HttpError
from tasks.models import Task
from tasks.serializers import TaskSchema, TaskIn
from django.shortcuts import get_object_or_404


router = Router()


@router.get('/{task_id}', response=TaskSchema)
def get_task(request, task_id: int):
    return get_object_or_404(Task, id=task_id)


@router.get('/', response=list[TaskSchema])
def get_tasks(request):
    return Task.objects.all()


@router.post('/', response=TaskSchema)
def create_task(request, payload: TaskIn):
    task = Task.objects.create(**payload.dict())
    return task


@router.put('/', response=TaskSchema)
def update_task(request, payload: TaskSchema):
    task = get_object_or_404(Task, id=payload.id)
    for attr, value in payload.dict().items():
        setattr(task, attr, value)
    task.save()
    return task


@router.patch('/', response=TaskSchema)
def patch_task(request, payload: TaskSchema):
    task = get_object_or_404(Task, id=payload.id)
    for attr, value in payload.dict(exclude_unset=True).items():
        setattr(task, attr, value)
    task.save()
    return task


@router.delete('/{task_id}')
def delete_task(request, task_id: int):
    try:
        task = Task.objects.get(id=task_id)
        task.delete()
        return {"success": True}
    except Task.DoesNotExist:
        raise HttpError(404, "Task not found")
