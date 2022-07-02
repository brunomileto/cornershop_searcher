import { MagnifyingGlassPlus } from "phosphor-react";
import { useForm } from "react-hook-form";

interface InputProps {
  searchTerm: string;
  handleSearchTerm: (searchString: string) => void;
}

interface FormData {
  searchString: string;
}

export const Input = ({ handleSearchTerm }: InputProps) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => handleSearchTerm(data.searchString));

  return (
    <div className="flex gap-6 h-7 justify-center items-center">
      <div>
        <span className="text-xl">Informe um produto:</span>
      </div>
      <div>
        <form
          className="flex justify-center items-center gap-4"
          onSubmit={onSubmit}
        >
          <input
            {...register("searchString")}
            type="text"
            className=" rounded-lg w-72 h-10 pl-4 text-slate-500"
          />
          <button type="submit">
            <MagnifyingGlassPlus size={34} />
          </button>
        </form>
      </div>
    </div>
  );
};
