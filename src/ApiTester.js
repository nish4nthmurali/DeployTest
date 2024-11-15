import React, { useState } from 'react';
import axios from 'axios';
import RequestForm from './components/RequestForm';
import RequestData from './components/RequestData';
import ResponseBody from './components/ResponseBody';

const ApiTester = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [queryParams, setQueryParams] = useState([{ key: '', value: '' }]);
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [jsonBody, setJsonBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const params = queryParams.reduce((acc, { key, value }) => {
      if (key) acc[key] = value;
      return acc;
    }, {});
    const headersObject = headers.reduce((acc, { key, value }) => {
      if (key) acc[key] = value;
      return acc;
    }, {});
    try {
      const result = await axios({
        method,
        url,
        params,
        headers: headersObject,
        data: jsonBody && JSON.parse(jsonBody),
      });
      setResponse({
        status: result.status,
        data: result.data,
        headers: result.headers,
        time: result.duration, // Note: Axios does not directly provide a duration, this would need to be calculated manually if needed
        size: new Blob([JSON.stringify(result.data)]).size,
      });
    } catch (error) {
      setResponse({
        status: error.response?.status || 500,
        data: error.response?.data || 'An error occurred',
        headers: error.response?.headers,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <RequestForm 
        url={url} 
        setUrl={setUrl} 
        method={method} 
        setMethod={setMethod} 
        onSubmit={handleSubmit} 
      />
      <RequestData
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        jsonBody={jsonBody}
        setJsonBody={setJsonBody}
      />
      <ResponseBody response={response} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ApiTester;
