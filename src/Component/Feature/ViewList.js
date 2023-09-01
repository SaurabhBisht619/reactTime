import React, { useState } from "react";

function ViewList({ data, setData }) {
  let [url, setUrl] = useState("");
  let [key, setKey] = useState("");
  // let [data, setData] = useState([]);

  function addData() {
    if (url === "" || key === "") {
      alert("Please enter both url and key");
      return;
    }
    setData([...data, { url, key }]);
    setUrl("");
    setKey("");
  }

  function removeData(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  function handle(e) {
    if (e.key === "Enter") {
      addData();
    }
  }

  return (
    <div>
      <div className="footer">
        <div className="heading">
          <h1>URL</h1>
          <h1>Unique Key</h1>
          <h1>Remove</h1>
        </div>

        <div className="form">
          <input
            className="inpForm"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="outlined-basic"
            placeholder="Enter URL"
            variant="outlined"
          />
          <br />
          <br />
          <input
            className="inpForm"
            value={key}
            onKeyDown={(e) => handle(e)}
            onChange={(e) => setKey(e.target.value)}
            id="outlined-basic"
            placeholder="Enter Unique Key"
            variant="outlined"
          />
          <br />
          <br />
          <button className="addBtn" onClick={addData}>
            Submit
          </button>
        </div>
      </div>

      {data.map((val, index) => {
        return (
          <div className="field">
            <h3>{val.url}</h3>
            <h3>{val.key}</h3>
            <button className="inpBtn" onClick={() => removeData(index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ViewList;
