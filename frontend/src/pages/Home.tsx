import { useState } from "react";
import { Input } from "../components/Input";
import { ResultTable } from "../components/ResultTable";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  function handleSearchTerm(searchString: string) {
    setSearchTerm(searchString);
  }
  return (
    <div className="pt-32 flex flex-col justify-start items-center">
      <Input searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <div className="mt-40">
        <ResultTable searchTerm={searchTerm} />
      </div>
    </div>
  );
};
