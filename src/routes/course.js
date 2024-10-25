import express from 'express';
import { createCourse, listCourse, listCourses, updateCourse } from '../controllers/course.js';


const router = express.Router();

router.post('/course', createCourse);
router.get('/courses', listCourses);
router.get('/course/:id', listCourse);
router.put('/course/:id', updateCourse);
export default router; 