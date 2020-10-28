import React, { useState } from'react';

const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(searchTerm);    
    };

    return (
        <div className=" search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label> Video Search</label>
                    <input type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchBar;