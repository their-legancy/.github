import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const [route, setRoute] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    router.push("?q=" + form_values.search_text.toLowerCase()+ "#search-result");
  }
  const change = e => {
    const newvalue = e.target.value;
    setSearch(newvalue);
  }


  return (

    <div className="seach-form-wrapper">

      <form className="items-center p-4 flex justify-center" onSubmit={handleSubmit}>
        <input required
          type={"text"}
          name="search_text"
          onChange={change}
          value={search}
          className="block p-2  text-gray-900 bg-gray-50 rounded-lg  focus:pl-3 mr-3 w-80"
          placeholder="Please type legend name"

        />
        <button type="submit"
          className="text-white right-2.5 bottom-2.5 bg-[#60E0D4] hover:bg-[#60E0D4] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#60E0D4] ">Search</button>
      </form>
    </div>
  )
}