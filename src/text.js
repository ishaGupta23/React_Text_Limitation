
import './App.css';
import React, { useState } from "react";



    function Text_fill() {
      const [text, setText] = useState("");

      const handleTextChange = (event) => {
        const { value } = event.target;
        if (value.length <= 100) {
          setText(value);
        }
        else {
          alert("You put already 100 massages.")
        }
      };

      return (
        <div className='container'>

          <label class="textarea">Enter text (100 character limit):</label>
          <br />
          <textarea
            id="textarea"
            //rows="4"
            cols="50"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <br />
          <span>{100 - text.length} characters remaining</span>
        </div>
      );
    
    }
 

export default Text_fill;

   
