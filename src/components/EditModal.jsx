import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css';

const EditModal = (props) => {
  if(!props.isOpen){
    return null;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(props.idCard);
  }

  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div className="modalContent">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h5>Edit your comment</h5>
          </div>
          <div class="form-group">
            <label for="comment">New comment</label>
            <textarea onChange={props.onChange} class="form-control" id="body" name="body" rows="3" value={props.formValues.body}></textarea>
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-primary mr-3">Edit comment</button>
            <button onClick={props.onChangeStatus} type="button" className="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
      
    </div>, document.getElementById('modal')
  )
}

export default EditModal;

