
const Filter = ({filter, handleFilterChange}) => (
  <div>Find countries <input value={filter} onChange={handleFilterChange} placeholder="search..."/></div>
)


export default Filter