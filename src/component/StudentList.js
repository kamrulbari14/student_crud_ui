import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { StudentSaveOrUpdate } from './StudentSaveOrUpdate';

export const StudentList = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch('http://localhost:6060/allStudents');
            const data = await response.json();
            console.log(data);
            setStudents(data);
        }
        fetchStudents();
    }, [])

    return (
        <div className="StudentList">
            <Header />
            <table className="table" align="center">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll</th>
                        <th>Class</th>
                        <th>Session</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map((student, index) =>
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.roll}</td>
                                <td>{student.className}</td>
                                <td>{student.session}</td>
                                <td><Link to={`/students/profile/${student.id}`}>Details</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

