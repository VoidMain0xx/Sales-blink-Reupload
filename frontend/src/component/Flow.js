import React, { useState } from 'react';
import ReactFlow, { Controls, MiniMap, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import Modal from 'react-modal';
import '../CSS/Flow.css'; // Import the custom CSS file

const initialNodes = [];
const initialEdges = [];

Modal.setAppElement('#root'); // Ensure accessibility

export default function Flow() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');
  const [taskOption, setTaskOption] = useState('');
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [positionY, setPositionY] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOptionChange = (e) => setOption(e.target.value);
  const handleTaskOptionChange = (e) => setTaskOption(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email/Number:', email);
    console.log('Option:', option);
    if (option === 'option2') {
      console.log('Task Option:', taskOption);
    }

    const newNode = {
      id: `node-${nodes.length + 1}`,
      data: { label: option === 'option2' ? taskOption : email }, // Set the label to the entered email or task option
      position: { x: 0, y: positionY }, // Set initial position
    };

    const newNodes = [...nodes, newNode];
    setNodes(newNodes);
    setPositionY(positionY + 100);

    if (nodes.length > 0) {
      const newEdge = {
        id: `edge-${nodes.length}-${nodes.length + 1}`,
        source: `node-${nodes.length}`,
        target: `node-${nodes.length + 1}`,
        animated: true,
      };
      setEdges((prevEdges) => [...prevEdges, newEdge]);
    }

    closeModal();
  };

  return (
    <div style={{ height: '85vh', width: '85%', border: '5px solid black', margin: 'auto', position: 'relative' }}>
      <ReactFlow nodes={nodes} edges={edges} onNodeDragStop={() => {}}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <div className="modal-header">
          <h2>Enter Details</h2>
          <button className="modal-close-button" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          {option === 'option3' ? (
            <>
              <label>Number:</label>
              <input type="number" value={email} onChange={handleEmailChange} required />
            </>
          ) : option === 'option2' ? (
            <>
              <label>Task Option:</label>
              <select value={taskOption} onChange={handleTaskOptionChange} required>
                <option value="">Select a task option</option>
                <option value="task1">Reply</option>
                <option value="task2">Follow Up</option>
                <option value="task3">Greetings</option>
              </select>
            </>
          ) : (
            <>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} required disabled={option === 'option2'} />
            </>
          )}
          
          <label>Option:</label>
          <select value={option} onChange={handleOptionChange} required>
            <option value="">Select an option</option>
            <option value="option1">Cold Email</option>
            <option value="option2">Task</option>
            <option value="option3">Wait</option>
          </select>
          
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
