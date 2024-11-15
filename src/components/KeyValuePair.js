import React from 'react';

const KeyValuePair = ({ data, setData, title }) => {
  const handleKeyValuePairChange = (index, key, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [key]: value };
    setData(newData);
  };

  const handleAddKeyValuePair = () => {
    setData([...data, { key: '', value: '' }]);
  };

  const handleRemoveKeyValuePair = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <h5>{title}</h5>
      {data.map((pair, index) => (
        <div key={index} className="input-group my-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Key" 
            value={pair.key} 
            onChange={e => handleKeyValuePairChange(index, 'key', e.target.value)}
          />
          <input 
            type="text" 
            className="form-control" 
            placeholder="Value" 
            value={pair.value} 
            onChange={e => handleKeyValuePairChange(index, 'value', e.target.value)}
          />
          <button 
            type="button" 
            className="btn btn-outline-danger"
            onClick={() => handleRemoveKeyValuePair(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button 
        type="button" 
        className="btn btn-outline-success" 
        onClick={handleAddKeyValuePair}
      >
        Add
      </button>
    </div>
  );
};

export default KeyValuePair;
