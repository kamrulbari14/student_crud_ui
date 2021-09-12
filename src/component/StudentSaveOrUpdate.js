import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory, Link } from 'react-router-dom';

export const StudentSaveOrUpdate = (student) => {

    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:6060/saveStudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    }
    return (
        <div className="StudentProfile">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Student name</label>
                    <input type="text" ref={register()} name="name" placeholder="Student name" />
                </div>
                <div>
                    <label>Roll</label>
                    <input type="text" ref={register()} name="roll" placeholder="Student Roll" />
                </div>
                <div>
                    <label>Class</label>
                    <input type="text" ref={register()} name="className" placeholder="Student Class" />
                </div>
                <div>
                    <label>Session</label>
                    <input type="text" ref={register()} name="session" placeholder="Session" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

