import React from 'react';

const ResponseBody = ({ response }) => {
  const isJsonResponse = response && response.headers && response.headers['content-type'] && response.headers['content-type'].includes('application/json');
  const isXmlResponse = response && response.headers && response.headers['content-type'] && (response.headers['content-type'].includes('application/xml') || response.headers['content-type'].includes('text/xml'));
  const isHtmlResponse = response && response.headers && response.headers['content-type'] && response.headers['content-type'].includes('text/html');

  const formatResponseBody = () => {
    if (isJsonResponse) {
      return <pre>{JSON.stringify(response.data, null, 2)}</pre>;
    } else if (isXmlResponse || isHtmlResponse) {
      return <pre>{response.data}</pre>;
    } else {
      return <pre>{response ? response.data : 'No response data'}</pre>;
    }
  };

  return (
    <div>
      <h3>RESPONSE</h3>
      {response && (
        <>
          <div>Status: <span>{response.status}</span></div>
          <div>Time: <span>{response.time}</span>ms</div>
          <div>Size: <span>{response.size}</span></div>
          <div>
            <h5>Body:</h5>
            {formatResponseBody()}
          </div>
          <div>
            <h5>Headers:</h5>
            <pre>{JSON.stringify(response.headers, null, 2)}</pre>
          </div>
        </>
      )}
      {!response && <p>No response to display</p>}
    </div>
  );
};

export default ResponseBody;
