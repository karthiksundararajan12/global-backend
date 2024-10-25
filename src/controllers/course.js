import Course from '../models/course.js';

export const createCourse = async (req, res) => {
    try {
        const course = new Course({
            course_name: req.body.course_name,
            rating: req.body.rating,
            no_of_hours: req.body.no_of_hours,
            course_overview: req.body.course_overview,
            course_image: req.body.course_image,
            course_content: req.body.course_content
        });
        const newCourse = await course.save()
        res.status(200).json({ success: true, data: newCourse })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const listCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ data: courses })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const listCourse = async (req, res) => {
    try {
        const course = await Course.findById({ _id: req.params.id }).populate('course_content');
        res.status(200).json({ data: course })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { course_name, rating, no_of_hours, course_overview, course_image, course_content } = req.body
        const course = await Course.findById({ _id: req.params.id });
        const data = {
            course_name,
            rating,
            no_of_hours,
            course_overview,
            course_image,
            course_content
        }
        const updatedCourse = await Course.findByIdAndUpdate({ _id: req.params.id }, data, { new: true });
        res.status(200).json({ data: updatedCourse });
    } catch (error) {
        res.send(error)
    }
}
