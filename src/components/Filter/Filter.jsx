
export const Filter = ({filter, value}) => {
    console.log(filter);
    return (
        <label>
        Filter contact by Name
        <input type="text" onChange={() => filter} />
        </label>
    )
} 