import { FaStar } from 'react-icons/fa';

const Star = ({ selected = true,onSelect }) => {
    return (
        <span>
            <FaStar 
            color={selected ? "red" : "gray"}
            onClick={onSelect}
            />
        </span>
    )
}
export default Star;