import { React, useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { StudentSaveOrUpdate } from './StudentSaveOrUpdate';

export const StudentProfile = () => {

    let history = useHistory();
    const [student, setStudent] = useState({});
    const { studentId } = useParams();

    useEffect(() => {
        const fetchStudent = async () => {
            const response = await fetch(`http://localhost:6060/getbyId/${studentId}`);
            const data = await response.json();
            console.log(data);
            setStudent(data);
        }
        fetchStudent();
    }, [studentId]);

    const handleDelete = (id) => {
        const fetchStudent = async () => {
            const response = await fetch(`http://localhost:6060/deleteStudent/${id}`, {
                method: 'DELETE'
            })

            if (response) {
                history.goBack()
            }
        }
        fetchStudent();
    }

    return (
        <div className="StudentProfile">
            <StudentSaveOrUpdate />
            <table className="table" align="center">
                <tbody>
                    <tr>
                        <td><h5>Student Name </h5></td>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <td>Roll</td>
                        <td>{student.roll}</td>
                    </tr>
                    <tr>
                        <td>Class </td>
                        <td>{student.className}</td>
                    </tr>
                    <tr>
                        <td>Session </td>
                        <td>{student.session}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={<StudentSaveOrUpdate student={student} />}>Update Student</button>
                <button onClick={() => { handleDelete(student.id) }}>Delete Student</button>
            </div>
        </div>
    );
}

