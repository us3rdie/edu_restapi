/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 */


const express = require('express');
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

const router = express.Router();

// Группировка маршрутов для '/workouts'
router.route('/')
    .get(workoutController.getAllWorkouts) // Получение всех тренировок
    .post(workoutController.createNewWorkout); // Создание новой тренировки

// Группировка маршрутов для '/workouts/:workoutId'
router.route('/:workoutId')
    .get(workoutController.getOneWorkout) // Получение одной тренировки
    .patch(workoutController.updateOneWorkout) // Обновление тренировки
    .delete(workoutController.deleteOneWorkout); // Удаление тренировки

// Маршрут для получения записей тренировки
router.get('/:workoutId/records', recordController.getRecordForWorkout);

module.exports = router;