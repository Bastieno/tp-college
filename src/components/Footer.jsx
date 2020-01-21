import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  #main-footer {
    background: #000;
    color: #fff;
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Styles>
      <footer id="main-footer" className="text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Copyright &copy;
                <span id="year"></span> {year} TP</p>
            </div>
          </div>
        </div>
      </footer>
    </Styles>
  );
}

