import React, { useState } from 'react';

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60,
};

export default function ResourceForm({ onFormSubmit, initalData }) {
  const [form, setForm] = useState(initalData || DEFAULT_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

  return (
    <div className='resource-form'>
      <h1 className='title'>Add New Resource</h1>
      <form>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input
              value={form.title}
              name='title'
              onChange={handleChange}
              className='input'
              type='text'
              placeholder='Learn something'
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Description</label>
          <div className='control'>
            <textarea
              value={form.description}
              onChange={handleChange}
              name='description'
              className='textarea'
              placeholder='Learn these technologies because...'
            ></textarea>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Link</label>
          <div className='control'>
            <input
              value={form.link}
              onChange={handleChange}
              name='link'
              className='input'
              type='text'
              placeholder='link to docs'
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Priority</label>
          <div className='control'>
            <div className='select'>
              <select
                value={form.priority}
                onChange={handleChange}
                name='priority'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Time to finish</label>
          <div className='control'>
            <input
              value={form.timeToFinish}
              onChange={handleChange}
              name='timeToFinish'
              className='input'
              type='number'
              placeholder='60'
            />
          </div>
          <p className='help'>Time is in minutes</p>
        </div>
        <div className='field is-grouped'>
          <div className='control'>
            <button
              type='button'
              onClick={submitForm}
              className='button is-link'
            >
              Submit
            </button>
          </div>
          <div className='control'>
            <button
              type='button'
              onClick={() => setForm(DEFAULT_DATA)}
              className='button is-link is-light'
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
