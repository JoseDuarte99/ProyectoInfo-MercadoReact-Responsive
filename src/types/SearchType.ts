
// TIPING THE SEARCH
export type SearchProps = {
    placeholder?: string;
    imgSearch?: string;
    onSearch: string;
    setOnSearch: React.Dispatch<React.SetStateAction<string>>;
    setMenuValue: (value:boolean) => void;
};

