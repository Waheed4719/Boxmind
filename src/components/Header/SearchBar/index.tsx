import SearchIcon from '../.././../../public/icons/search.svg';
import Button from '../../Common/CustomButton';

const SearchBar = () => {
    return (
        <div className='flex items-center gap-x-2'>
            <div className='rounded-full w-[400px] border p-4 border-[#ddd] h-[40px] flex gap-x-2 items-center bg-[#f5f7f9]'>
                <SearchIcon height={20} width={20} style={{ color: '#a0a5b7' }} />
                <input
                    className='bg-transparent outline-none border-none'
                    type='text'
                    placeholder='Search'
                />
            </div>
            <Button type='button'>Write</Button>
        </div>
    );
};

export default SearchBar;
