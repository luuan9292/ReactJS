import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/control';
import TableList from './components/TableList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false,
            taskEditing : null,
            filter : {
                name : "",
                status : -1
            },
            keyword : "",
            sortBy : "",
            sortValue : 1
        }
    }

    // handleGenerate = () => {
    //     let tasks = [
    //         {
    //             id : this.autoGenerateRandomGUID(),
    //             name : 'ReactJS',
    //             status : true
    //         },
    //         {
    //             id : this.autoGenerateRandomGUID(),
    //             name : 'Angular',
    //             status : false
    //         },
    //         {
    //             id : this.autoGenerateRandomGUID(),
    //             name : 'Vue',
    //             status : true
    //         }
    //     ];

    //     this.setState({
    //         tasks : tasks
    //     });
    
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }
    
    autoRandomStringGUID() {
        return Math.floor(( 1 + Math.random()) * 0x1000).toString(16).substring(1);
    }

    autoGenerateRandomGUID() {
        return this.autoRandomStringGUID() + this.autoRandomStringGUID() + '-' +this.autoRandomStringGUID() + this.autoRandomStringGUID()
    } // Tu dong tao id
    

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            this.setState({
                tasks : JSON.parse(localStorage.getItem('tasks'))
            });
        }
    } //Lay du lieu ban dau trong LS khi F5 lai

    handleDisplayForm = () => {
        
        if( this.state.isDisplayForm && this.state.taskEding !== null) {
            this.setState({
                isDisplayForm : true,
                taskEditing : null
            });
        } else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing : null
            });
        }
    } //Hien thi hoac an Form

    handleCloseForm = () => {
        this.setState({
            isDisplayForm : false
        });
    } // Dong Form

    handleShowForm =() => {
        this.setState({
            isDisplayForm: true
        });
    } //Hien thi Form

    handleSubmitTaskForm = (TaskForm) => {
        let { tasks } = this.state;
        if ( TaskForm.id === '') {
            TaskForm.id = this.autoGenerateRandomGUID();
            tasks.push(TaskForm);
        } else {
            let index = this.findIndex(TaskForm.id);
            tasks[index] = TaskForm;
        }
        
        this.setState({
            tasks : tasks,
            taskEditing : null
        })
        localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
    } //Nhan du lieu va xu ly khi submit Form

    handleChangeStatus = (id) => {
        let { tasks } = this.state;
        let index = this.findIndex(id) ;
        if( index !== -1 ) {
            tasks[index].status = !tasks[index].status;
        }          
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } //Nhan vao ID tu con va xu ly chuc nang thay doi status

    findIndex = (id) => {
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach( (task, index) => {
            if( task.id === id ) {
                result = index;
            }
        });
        return result;
    } //Tim vi tri trong mang tasks khi truyen id

    handleDelete = (index) => {
        let { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } // Nhan vao index con va xua ly chuc nang xoa

    handleUpdate = (index) => {
        let { tasks } = this.state;
        let taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.handleShowForm();
    } //Nhan vao index vao tra ve object cho taskEditing sau do show Form

    handleFilter = (filterName, filterStatus) => {
        this.setState({
            filter : {
                name : filterName.toLowerCase(),
                status : +filterStatus
            }

        });
    } // Nhan vao gia tri filter o TableList

    handleSearch = (keyword) => {
        this.setState({
            keyword : keyword.toLowerCase()
        })
    } //Nhan vao keyword va gan cho state

    handleSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        });
    }

    render() {

        let { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue } = this.state;

        if(filter) {
            if(filter.name) {
                tasks = tasks.filter( task => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter( task => {
                if(filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            });          
        }
        if(keyword) {
            tasks = tasks.filter( task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        if(sortBy === 'name') {
            tasks.sort( (a, b) => {
                if( a.name > b.name ) return sortValue;
                else if( a.name < b.name ) return -sortValue;
                else return 0;
            });
        } else {
            tasks.sort( (a, b) => {
                if( a.status > b.status ) return -sortValue;
                else if( a.status < b.status ) return sortValue;
                else return 0;
            });
        }

        let taskForm = isDisplayForm ? <TaskForm handleCloseForm={ this.handleCloseForm }
                                                 handleSubmitTaskForm={this.handleSubmitTaskForm} 
                                                 taskEditing={ taskEditing } /> : '';

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quan Ly Cong Viec</h1>
                </div>
                <div className="row mt-5">
                    {/* Phan Them Cong Viec */}
                    <div className={ isDisplayForm ? "col-md-4" : ''}>

                        { taskForm }

                    </div>
                    {/* Phan Quan Li */}
                    <div className={ isDisplayForm ? "col-md-8" : "col-md-12"}>
                        <button type="button" className="btn btn-primary" onClick={ this.handleDisplayForm }>
                            <span><i className="fa fa-plus mr-2" /></span>Them Cong Viec
                        </button>
                        {/* <button type="button"
                                onClick = { this.handleGenerate }
                                className="btn btn-danger ml-2">
                            Generate Data</button> */}
                        {/* Phan search va sort */}

                        <Control handleSearch={ this.handleSearch }
                                 handleSort={ this.handleSort } />

                        {/* Phan List */}
                        <div className="row mt-3">
                            <div className="col-md-12">

                                <TableList tasks={ tasks }  handleChangeStatus={ this.handleChangeStatus } 
                                                            handleDelete={ this.handleDelete }
                                                            handleUpdate={ this.handleUpdate }
                                                            handleFilter={ this.handleFilter } />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


