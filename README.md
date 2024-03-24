Тестовый API для создания, редактирования, просмотра, удаления тренировок.

База данных состоих из файла db.json. Состоит из "таблиц":
| workouts: | members:|records|
|--|--|--|
|name|name|id|
|mode|gender|workout|
|equipment;|dateOfBirth|record|
|xercises|email|
|trainerTips|password|
|id|id|
|createdAt|
|updatedAt|





GET "/api/v1/workouts"  
GET "/api/v1/workouts/:workoutId"  
POST "/api/v1/workouts"  
PATCH "/api/v1/workouts/:workoutId"  
DELETE "/api/v1/workouts/:workoutId"  
