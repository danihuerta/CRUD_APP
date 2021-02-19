import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css';

const Modal = (props) => {
  if(!props.isOpen){
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div className="modalContent">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <h5>Add your comment</h5>
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input onChange={props.onChange} type="text" class="form-control" id="name" name="name" placeholder="Daniel Huerta" value={props.formValues.name}/>
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input onChange={props.onChange} type="email" class="form-control" id="email" name="email" placeholder="name@example.com" value={props.formValues.email}/>
          </div>
          <div class="form-group">
            <label for="comment">Comment</label>
            <textarea onChange={props.onChange} class="form-control" id="body" name="body" rows="3" value={props.formValues.body}></textarea>
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-primary mr-3">Add comment</button>
            <button onClick={props.onChangeStatus} type="button" className="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
      
    </div>, document.getElementById('modal')
  )
}

export default Modal;

