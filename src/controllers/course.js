import Course from '../models/course.js';

export const createCourse = async (req, res) => {
    try {
        const { title, about, options, topics, content, image } = req.body;
        const course = new Course({
            title,
            about,
            options,
            topics,
            content,
            image
        })
        await course.save();
        res.status(201).json({ message: 'Course added' })
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const listCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const listCourse = async (req, res) => {
    try {
        const course = await Course.findById({ _id: req.params.id });
        res.status(200).json(course)
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
