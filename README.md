Тестовый API для создания, редактирования, просмотра, удаления тренировок.

База данных состоих из файла db.json. Состоит из "таблиц":
| workouts| members|records|
|--|--|--|
|name|name|id|
|mode|gender|workout|
|equipment;|dateOfBirth|record|
|xercises|email|
|trainerTips|password|
|id|id|
|createdAt|
|updatedAt|





GET "/api/v1/workouts"  - get all workouts info
GET "/api/v1/workouts/:workoutId"  - get workoutId info
GET "/api/v1/workouts/:workoutId/records"  - get records by workoutId 
POST "/api/v1/workouts"  - add new workout
PATCH "/api/v1/workouts/:workoutId"  - patch workout by workoutId (exmpl: new feauters)
DELETE "/api/v1/workouts/:workoutId"  - remove workout by workoutId
