import mongoose from 'mongoose';

const CourseSchema = mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    no_of_hours: {
        type: String,
        required: true
    },
    course_overview: {
        type: String
    },
    course_image: {
        type: String
    },
    course_content: [],
    create_at: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('Course', CourseSchema);