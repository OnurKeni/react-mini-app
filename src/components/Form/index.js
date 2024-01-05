import {useState,useEffect} from 'react';
const initialFormValues = {name: '', phoneNumber: ''};
function Form({addContact,contacts}) {
    const [form, setForm] = useState({initialFormValues});
    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.name === '' || form.phoneNumber === '') {
            return false;
        }
        addContact([...contacts,form]);
    }
    return (
        <form onSubmit={onSubmit}  className="w-full md:pr-2 mb-2 md:mb-0">
            <div className="mb-2">
                <input className="w-full h-12 px-2 rounded border border-[#00091B]" type="text" placeholder="Name" name="name" value={form.name} onChange={onChangeInput}/>
            </div>
            <div className="mb-2">
                <input className="w-full h-12 px-2 rounded border border-[#00091B]" type="tel" placeholder="Phone Number" name="phoneNumber"  value={form.phoneNumber} onChange={onChangeInput}/>
            </div>
            <button className="font-semibold py-3 px-8 border border-primary-base text-white bg-primary-base rounded w-full">Add</button>
        </form>
    );
}

export default Form;