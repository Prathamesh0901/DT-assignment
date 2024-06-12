import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './styles/Thread.css'
import { Lightbulb, Comment, LiveHelp } from '@mui/icons-material';
import x from '../assets/x.svg'

export default function Thread() {
  const [subThread, setSubThread] = useState('');
  const [subInterpretation, setSubInterpretation] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState('');
  const [process, setProcess] = useState('');

  return (

    <div className="thread-component">

      <div className="heading">
        <span><KeyboardArrowUpIcon /></span><h2>Thread A</h2>
      </div>

      <div className="thread-inputs">

        <div className='sub-thread'>
          <p>Sub thread 1</p>
          <textarea placeholder="Enter text here" value={subThread} onChange={(e) => setSubThread(e.target.value)} />
        </div>

        <div className='sub-inter'>
          <p>Sub Interpretation 1</p>
          <textarea placeholder="Enter text here" value={subInterpretation} onChange={(e) => setSubInterpretation(e.target.value)} />
        </div>
      
      </div>

      <div className="thread-options">

        <div className="btns">

          <button className="icon-button" title="Idea">
            <Lightbulb></Lightbulb>
          </button>

          <button className="icon-button" title="Discussion">
            <Comment></Comment>
          </button>

          <button className="icon-button" title="Question">
            <LiveHelp></LiveHelp>
          </button>

          <button className="icon-button" title="">
            <img src={x}/>
          </button>

        </div>

        <div className="thread-selects">

          <select value={category} onChange={(e) => setCategory(e.target.value)}>

            <option value="">Select Categ</option>
          
          </select>

          <select  value={process} onChange={(e) => setProcess(e.target.value)}>
            
            <option value="">Select Proces</option>
          
          </select>

        </div>
      </div>

      <button className="sub-thread-button"> + Sub-thread </button>
      
      <div className='summary'>

        <p>Summary for Thread A</p>

        <textarea placeholder="Enter text here" value={summary} onChange={(e) => setSummary(e.target.value)} />
      
      </div>

    </div>

  );
};
