import React, { useState } from 'react';
import KeyValuePair from './KeyValuePair';

const RequestData = ({ queryParams, setQueryParams, headers, setHeaders, jsonBody, setJsonBody }) => {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <button 
            className={`btn ${activeSection === 'queryParams' ? 'btn-primary' : 'btn-secondary'}`} 
            onClick={() => toggleSection('queryParams')}
          >
            Query Params
          </button>
        </div>
        <div className="col text-center">
          <button 
            className={`btn ${activeSection === 'headers' ? 'btn-primary' : 'btn-secondary'}`} 
            onClick={() => toggleSection('headers')}
          >
            Headers
          </button>
        </div>
        <div className="col text-center">
          <button 
            className={`btn ${activeSection === 'jsonBody' ? 'btn-primary' : 'btn-secondary'}`} 
            onClick={() => toggleSection('jsonBody')}
          >
            JSON
          </button>
        </div>
      </div>
      
      <div className={`collapse ${activeSection === 'queryParams' ? 'show' : ''}`}>
        <KeyValuePair data={queryParams} setData={setQueryParams} />
      </div>
      <div className={`collapse ${activeSection === 'headers' ? 'show' : ''}`}>
        <KeyValuePair data={headers} setData={setHeaders} />
      </div>
      <div className={`collapse ${activeSection === 'jsonBody' ? 'show' : ''}`}>
        <label htmlFor="jsonBody" className="form-label">JSON Body</label>
        <textarea 
          id="jsonBody" 
          className="form-control" 
          value={jsonBody} 
          onChange={e => setJsonBody(e.target.value)} 
          rows="4"
        />
      </div>
    </div>
  );
};

export default RequestData;
