import React, {useState, useEffect} from 'react';
import Card from './Card';
import Modal from './Modal';
import EditModal from './EditModal';

const CardsLists = () => {

  const [editComment, setEditComment] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({name: "", email: "", body:""});
  const [modalStatus, setModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [size, setSize] = useState(0);  
  const [idCard, setIdCard] = useState(null);

  const handleStatus = (e) => {
    setModalStatus(!modalStatus);
  }

  const handleEditStatus = (id=null) => {    
    setEditModalStatus(!editModalStatus);
    if(id) setIdCard(id);
  }

  const handleDelete = (id) => {
    const index = comments.findIndex( comment => comment.id === id );         
    comments.splice(index,1);       
    setComments([...comments]);
  }

  const handleSubmit = async (e) => {    
    e.preventDefault();
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      data.id = size +1;    
      setSize(size+1);
      console.log(data.id)
      setComments([...comments, data]);
      setNewComment({name:"", email:"", body:""})
      setModalStatus(!modalStatus);
    }catch (e) {
      console.log("error POST");
    }
  }

  const handleEditSubmit = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,
      {
        method: 'PUT',
        id: '5',
        body: JSON.stringify(editComment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      const index = comments.findIndex( comment => comment.id === id );   
      comments[index].body = data.body;
      setComments([...comments]);
      setEditComment("");
      handleEditStatus();
    }catch (e) {
      console.log('error PUT');
    }
  }

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    })    
  }

  const handleEditChange = (e) => {
    setEditComment({
      ...editComment,
      [e.target.name]: e.target.value,
    })    
  }

  useEffect( async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
      const data = await response.json();
      setComments(data);  
      setSize(comments.length);    
    }catch(e) {
      console.log('ERROR GET');
    }
  }, []);

  return (
    <div className="container p-5">
      <div className="text-right mb-4">
        <button onClick={handleStatus} className="btn btn-success">Add comment</button>
        <Modal 
          isOpen={modalStatus} 
          onChangeStatus={handleStatus}
          onSubmit={handleSubmit}  
          onChange={handleChange}
          formValues={newComment}
        />        
      </div>
      {comments.map(comment => (
        <Card key={comment.id} name={comment.name} email={comment.email} body={comment.body} onDelete={handleDelete} id={comment.id} onEdit={handleEditStatus}/>
      ))}
      <EditModal 
          isOpen={editModalStatus} 
          onChangeStatus={handleEditStatus}
          onSubmit={handleEditSubmit}  
          onChange={handleEditChange}
          formValues={editComment}
          idCard = {idCard}
        />
    </div>
  );
}

export default CardsLists;
