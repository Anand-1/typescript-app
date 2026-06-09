import { createPortal } from "react-dom";
const MyModal = ({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'transparent',
        padding: '20px',
        borderRadius: '8px', 
        color: 'red',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
    )
};

export default MyModal;