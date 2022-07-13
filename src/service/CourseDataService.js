import axios from 'axios';

class CourseDataService {
    retrieveAllCourse() {
        return axios.get('http://localhost:3000/course');
    }
    createCourse(data) {
        return axios.post('http://localhost:3000/course', data);
    }
    deleteCourse(id) {
        return axios.delete(`http://localhost:3000/couse/${id}`);
    }
    updateCourse(id, data) {
        return axios.put(`http://localhost:3000/course/${id}`, data);
    }
}

export default new CourseDataService();