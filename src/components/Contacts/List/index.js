import {useState} from "react";

function List({contacts}) {
const [filterText, setFilterText] = useState('');
const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
    });
});
console.log('filtered', filtered);
    return (
       <div className="w-full md:pl-2">
           <input className="w-full h-12 px-2 rounded border border-[#00091B] mb-3" placeholder="Filter contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
           <ul className="text-left">
                {filtered.map((contact,index) => (
                     <li className="bg-[#FFF3E3] mb-2 p-2 rounded" key={index}>- <b>{contact.name}:</b> {contact.phoneNumber}</li>
                ))}
              </ul>
       </div>
    );
}

export default List;