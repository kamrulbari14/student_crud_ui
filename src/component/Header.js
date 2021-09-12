import { React, useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { StudentSaveOrUpdate } from './StudentSaveOrUpdate';

export const Header = () => {

    return (
        <div className="StudentProfile">
            <h1>Students Info </h1>
            <button onClick={() => { window.location.href = "/students/saveOrUpdate" }}>Student Create</button>
            <button onClick={() => { window.location.href = "/" }}>Student List</button>
        </div>
    );
}

