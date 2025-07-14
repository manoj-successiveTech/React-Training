// (13.) Question 9. Design and implement a reusable Modal component that allows customization of its content. Provide controls to open, close, and toggle the modal’s visibility. Demonstrate how to use this component to display different types of content within a Next.js application.


'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import '@/app/styles/welcome5.css';

export default function ModalDemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (

    <>
    <div>
      <p style={{ textAlign: 'center', margin: '2rem' }}>
        (13) Question 9.Design and implement a reusable Modal component that allows customization of its content. Provide controls to open, close, and toggle the modal’s visibility. Demonstrate how to use this component to display different types of content within a Next.js application.
    </p>
        <p> Create a reusable Modal component that can show different content.
      </p>

      <div className="modal-demo-container">
        <h2>Reusable Modal Demo</h2>
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3>🎉 Welcome to the Modal</h3>
          <p>This is dynamic content inside the modal. You can place anything here!</p>
        </Modal>
      </div>
    </div>
    </>
  );
}
