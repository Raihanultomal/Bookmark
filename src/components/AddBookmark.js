import React from 'react';
import CataA from './CataA';

export default function AddBookmark() {
  const Add = () => {
    // var tit_value = document.getElementById('tit').value;
    <CataA className="cataA" val="python" />;
  };

  return (
    <div>
      <h1>Add Bookmark</h1>
      <form>
        <label>
          <input id="tit" type="text" name="title" placeholder="title" />
        </label>
        <br />
        <br />
        <label>
          <input type="text" name="url" placeholder="url" />
        </label>
        <br />
        <br />
        <label>
          <select>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
        <br />
        <br />
        <div>
          <input type="button" value="Cancel" />
          <input onClick={Add} type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
