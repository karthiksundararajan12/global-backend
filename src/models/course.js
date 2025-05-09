import mongoose from 'mongoose';

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    options: [
        { title: { type: String } }
    ],
    topics: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ],
    content: [
        {
            title: {
                type: String,
                required: true
            },
            description: [
                { name: { type: String } }
            ]
        }
    ],
    image: {
        type: String
    }
})
export default mongoose.model('Course', CourseSchema);