import React from 'react';
import '../styles/Card.css'

const Card = (props) => {

  const handleDelete = async (e) => {
    try{
      await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments?id=${props.id}`);
      props.onDelete(props.id); 
    }
    catch(e){
      console.log("Error DELETE");
    }
  }

  const handleEdit = (e) => {
    props.onEdit(props.id);
  }


  return (    
    <div className="card mb-5 myCard">
      <div className="card-header header-color bgColor">{props.email}</div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.body}
        </p>
        <button onClick={handleEdit} type="button" className="btn btn-primary">
          Edit
        </button>
        <button onClick={handleDelete} type="button" className="btn btn-danger ml-3">
          Delete
        </button>
      </div>
    </div>  
  )
}

export default Card;