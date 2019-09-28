import React, { Component } from 'react';

class CourseItem extends Component {
    render() {

        let {match} = this.props;

        let courseName = match.params.name //name do minh dat tai phan CourseList

        return (
            <div >
               <h3>Course Name: {courseName}</h3>
            </div>
        );
    }
}

export default CourseItem;
