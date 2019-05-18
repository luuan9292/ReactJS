import React, { Component } from 'react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : ""
        };
    }

    handleInputSearch = (event) => {
        this.setState({
            [ event.target.name ] : event.target.value
        });
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.keyword)
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" name="keyword" value={ this.state.keyword } onChange={ this.handleInputSearch } className="form-control" placeholder="Nhap tu khoa ..." />
                    <span className="input-group-btn">
                        <button type="button" onClick={ this.handleSearch } className="btn btn-primary">
                            <span><i className="fa fa-search mr-2" /></span>Tim
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}
        
export default Search;