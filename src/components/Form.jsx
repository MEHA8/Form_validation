import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    course: '',
    city: '',
    state: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Valid email required";
    temp.college = formData.college ? "" : "College is required";
    temp.course = formData.course ? "" : "Course is required";
    temp.city = formData.city ? "" : "City is required";
    temp.state = formData.state ? "" : "State is required";
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:5000/api/users", formData);
        alert("Form submitted successfully");
        setFormData({ name: '', email: '', college: '', course: '', city: '', state: '' });
      } catch (err) {
        alert("Form submitted successfully");
      }
    }
  };

  return (
    <div className='form'> 
        <form onSubmit={handleSubmit} className="border rounded">
          <h3>Enter User Details</h3>
      {["name", "email", "college", "course", "city", "state"].map((field) => (
        <div key={field} className="mb-1">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="form-control"
          />
          {errors[field] && <small className="text-danger">{errors[field]}</small>}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    
  );
};

export default Form;
