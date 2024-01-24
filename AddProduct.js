import React, {useState}from 'react'

 const AddProduct = () => {
    const[name ,setName] = useState('');
    const[price ,setPrice] = useState('');
    const[category ,setCategory] = useState('');
    const[company, setCompany] = useState('');
    const[error, setError] = useState(false);
    const addproduct = async () => {
        
        console.warn(!name);
        if(!name || !price || !category || !company){
          setError(true)
          return false;
        }

        console.warn(name, price, category, company);
        const userId=JSON.parse(localStorage.getItem('user'));
        
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers: {
              'Content-Type' : 'application/json'
            },
         });
         result = await result.json();
         console.warn(result)
    }
   return (
    <div className='product'>
        <h1>Add Product</h1>
        <input className='inputbox' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Product name'/>
        { error && !name && <span className='invalid-input'>invalid name</span>}
        <input className='inputbox' value={price} onChange={(e) => setPrice(e.target.value)} type='text' placeholder='Enter Your Product price'/>
        { error && !price && <span className='invalid-input'>invalid price</span>}
        <input className='inputbox' value={category} onChange={(e) => setCategory(e.target.value)} type='text' placeholder='Enter Your Product category'/>
        { error && !category && <span className='invalid-input'>invalid category</span>}
        <input className='inputbox' value={company} onChange={(e) => setCompany(e.target.value)} type='text' placeholder='Enter Your Product company'/>
        { error && !company && <span className='invalid-input'>invalid company</span>}
        <button className='appbutton' onClick={addproduct}>Add Product</button>
    </div>
  )
}

export default AddProduct;
