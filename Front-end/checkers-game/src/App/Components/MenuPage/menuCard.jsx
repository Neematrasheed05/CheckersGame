import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './CardModal.css';

const CardModal = ({ isOpen, onClose }) => {
  return (
    <CSSTransition in={isOpen} timeout={500} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative card">
          <div className="boxshadow"></div>
          <div className="main">
            <div className="top"></div>
            <div className="left side"></div>
            <div className="right side"></div>
            <div className="title"> Mode</div>
            
            <div className="button-container">
              <button className="button">
                <svg
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="red"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <rect ry="5" rx="5" y="2" x="2" height="20" width="20"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line y2="6.5" y1="6.5" x2="17.51" x1="17.5"></line>
                </svg>
              </button>
              <button className="button">
                <svg
                  viewBox="0 0 512 512"
                  fill="red"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg twitter"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </button>
              <button className="button">
                <svg
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CardModal;
