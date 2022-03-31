# To-do app

## API SPEC

### Get all tasks
Request:
- Method: GET
- Endpoint: `/api/v1/tasks`
- Header:
    - `Accept: application/json`

Response:
```json
{
    "ok": boolean,
    "message": string,
    "data": [
        ... ,
        {
            "id": string,
            "task": string,
            "completed": string,
            "created_at": string,
            "updated_at": string,
        },
        ...
    ]
}
```

### Add new task
Request:
- Method: POST
- Endpoint: `/api/v1/tasks`
- Header:
    - `Content-Type: application/json`
    - `Accept: application/json`
- Body:
    ```json
    {
        "task": string
    }
    ```

Response:
```json
{
    "ok": boolean,
    "message": string,
    "data": {
        "id": string,
        "task": string,
        "completed": string,
        "created_at": string,
        "updated_at": string,
    },
}
```

### Change completed status of a task
Request:
- Method: PUT
- Endpoint: `/api/v1/tasks/{taskId}`
- Header:
    - `Content-Type: application/json`
    - `Accept: application/json`
- Body:
    ```json
    {
        "completed": boolean
    }
    ```

Response:
```json
{
    "ok": boolean,
    "message": string,
    "data": {
        "id": string,
        "task": string,
        "completed": string,
        "created_at": string,
        "updated_at": string,
    },
}
```

### Delete a task
Request:
- Method: DELETE
- Endpoint: `/api/v1/tasks/{taskId}`
- Header:
    - `Accept: application/json`

Response:
```json
{
    "ok": boolean,
    "message": string,
    "data": {
        "id": string,
    },
}
```
