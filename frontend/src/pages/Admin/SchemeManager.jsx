import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

const SchemeManager = () => {
  const [schemes, setSchemes] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    src: '',
    name: '',
    description: '',
    eligibility: '',
    link: '',
    icon: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addScheme = (e) => {
    e.preventDefault();
    const newScheme = {
      id: schemes.length + 1,
      ...form,
    };
    setSchemes([...schemes, newScheme]);
    setForm({
      src: '',
      name: '',
      description: '',
      eligibility: '',
      link: '',
      icon: '',
    });
    setOpenModal(false);
  };

  const deleteScheme = (index) => {
    const updated = [...schemes];
    updated.splice(index, 1);
    setSchemes(updated);
  };

  return (
    <div className="mx-auto bg-white p-6 mt-10 rounded-xl shadow-md">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-4">Manage Government Schemes</h2>

        <Button onClick={() => setOpenModal(true)} color="blue" className="mb-4">
          Add New Scheme
        </Button>
       </div>

      <Modal
        className='bg-transparent backdrop-blur-xs'
        show={openModal} size="lg" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-4" onSubmit={addScheme}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Scheme</h3>

            <div>
              <label className="block text-white mb-1 text-sm font-medium">Image URL (src)</label>
              <input type="text" name="src" value={form.src} onChange={handleChange} className="w-full border bg-transparent rounded p-2" />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm font-medium">Scheme Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border bg-transparent  rounded p-2" required />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm font-medium">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} className="w-full border rounded p-2" rows={2}></textarea>
            </div>

            <div>
              <label className="block text-white mb-1 text-sm font-medium">Eligibility</label>
              <input type="text" name="eligibility" value={form.eligibility} onChange={handleChange} className="w-full border bg-transparent  rounded p-2" />
            </div>

            <div className='flex justify-between gap-3'>
              <div>
                <label className="block text-white mb-1 text-sm font-medium">Link</label>
                <input type="text" name="link" value={form.link} onChange={handleChange} className="w-full border bg-transparent  rounded p-2" />
              </div>

              <div>
                <label className="block text-white mb-1 text-sm font-medium">Icon (Emoji)</label>
                <input type="text" name="icon" value={form.icon} onChange={handleChange} className="w-full border bg-transparent  rounded p-2" placeholder="e.g. 🏥" />
              </div>
            </div>

            <Button type="submit" color="blue" className="w-full">Save Scheme</Button>
          </form>
        </Modal.Body>
      </Modal>

      {schemes.length === 0 ? (
        <p className="text-gray-500">No schemes added yet.</p>
      ) : (
        <ul className="space-y-2 mt-4">
          {schemes.map((scheme, idx) => (
            <li key={idx} className="bg-gray-100 p-4 rounded shadow flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">{scheme.icon} {scheme.name}</p>
                <p className="text-sm text-gray-700">{scheme.description}</p>
                <p className="text-sm"><strong>Eligibility:</strong> {scheme.eligibility}</p>
                <a href={scheme.link} className="text-blue-600 text-sm" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
              <button onClick={() => deleteScheme(idx)} className="text-red-600 hover:text-red-800">❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>    
  );
};

export default SchemeManager;
