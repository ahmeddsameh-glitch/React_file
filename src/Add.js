import { useEffect, useState } from "react";
import './add.css'
const Add = () =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        const url = `http://localhost:8000/blogs`;
         fetch(url, {
           method: 'POST',
          body: JSON.stringify({ title, author, content }),
       })
        .then(()=>{
            setTitle('');
        setAuthor('');
        setContent('');
        })
        .catch((err) =>{
          console.error('Error:', err);
    });
    }
    return (
        <div className="add-form">
        <form onSubmit={handleSubmit} className="add-blog-form">
            <div className="form-components">
            <label for="title">Title:</label>
            <input type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <label for="author">Author:</label>
            <input type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required 
            />
            <textarea
             id="content"
             value={content}
             onChange={(e)=> setContent(e.target.value)}>
             </textarea>
             </div>
             <button type="submit">Add Blog</button>
        </form>
        </div>
    )
}
export default Add;