import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChangeSearch = (event) => {
        dispatch(changeFilter(event.target.value));
    }

    return (
        <div className={css.search}>
            <p>Find contact by name</p>
            <input type="text" name="search" placeholder='Search...' value={filter} onChange={handleChangeSearch} />
        </div>
    );
};

export default SearchBox;