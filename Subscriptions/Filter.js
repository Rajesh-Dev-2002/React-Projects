import './Filter.css'
const Filter =(props)=>{
    const onSelectHandler=(event)=>{
        console.log("1st call of select handler",event.target.value)
        props.onFilterChange(event.target.value)
    

    }   
    return(
    <div className="filter">
        <div className="filter_Control">
            <label>Filter by Year</label>
            <select value={props.selectedFilter} onChange={onSelectHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>

    )
}
export default Filter