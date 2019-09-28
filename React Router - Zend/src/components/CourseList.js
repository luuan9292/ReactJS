import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'

import CourseItem from './CourseItem';

const menuCourses = [
	{
		to: "/angular",
		name: 'Angular'
	},
	{
		to: "/reactjs",
		name: 'ReactJS'
	},
	{
		to: "/nodejs",
		name: 'NodeJS'
	}
];

class CourseList extends Component {
    render() {

        let {match} = this.props;  

        return (
            <div >
                <h3>CourseList</h3>
                <div className="list-group">
                    {this.showMenus(match.url, menuCourses)}
                </div>
                <Route exact path={match.url} render={() => <h3>Please select a course</h3>} />
                <Route path={`${match.url}/:name`} component={CourseItem} />
            </div>
        );
    }

    showMenus = (url, menus) => {
		let xhtml = null;

		if(menus.length > 0) {
			xhtml = menus.map((menu, index) => {
				return <NavLink exact to={`${url}${menu.to}`} key={index} activeClassName="active" className="list-group-item">
                             {menu.name}
                        </NavLink>

			});
		}

		return xhtml;
	}
}

export default CourseList;
