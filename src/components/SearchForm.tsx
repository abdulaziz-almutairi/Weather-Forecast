import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const SearchForm: React.FC<Props> = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
