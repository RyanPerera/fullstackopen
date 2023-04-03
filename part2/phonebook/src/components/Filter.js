const Filter = ({handleSearchChange}) => {
    return (
        <div>
            Filter shown with
            <input onChange={handleSearchChange} />
        </div>
    )
}

export default Filter