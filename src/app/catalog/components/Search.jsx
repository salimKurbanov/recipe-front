'use client'

const Search = () => {

    return (
        <div className="search_block">
            <div className="search_field">
                <img src="/search.svg" alt="" />
                <input type="text" placeholder="найти рецепт" />
            </div>
        </div>
    );
};

export default Search;