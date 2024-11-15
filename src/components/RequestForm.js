import React from 'react';

const RequestForm = ({ url, setUrl, method, setMethod, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="container mt-3">
      <div className="d-flex align-items-end mb-3">
        <div className="me-3">
          <label htmlFor="methodSelect" className="form-label">HTTP Method</label>
          <select 
            id="methodSelect"
            className="form-select" 
            value={method} 
            onChange={e => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            {/* <option value="PATCH">PATCH</option> */}
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="flex-grow-1">
          <label htmlFor="urlInput" className="form-label">URL</label>
          <input 
            id="urlInput"
            className="form-control" 
            type="url" 
            placeholder="https://example.com" 
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
    </form>
  );
};

export default RequestForm;
