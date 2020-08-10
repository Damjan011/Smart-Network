import React from 'react';
import './style.css';

const NetworksTable = ({ }) => (

  <div className="table-div">
    <table className="ui-multi-row">
      <tr className="ui-network-labels">
        <th>
          <div>
            <p>Name</p>
          </div>
        </th>
        <th>
          <div>
            <p>Last 90 min.</p>
          </div>
        </th>
        <th>
          <div>
            <p>Traffic (absolute)</p>
          </div>
        </th>
        <th>
          <div>
            <p>Health</p>
          </div>
        </th>
        <th>
          <div>
            <p>Device</p>
          </div>
        </th>
      </tr>
      <tr>
        <td>
          <div className="ui-table-label">
            <p>Networks</p>
          </div>
        </td>
      </tr>
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>

      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
    
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
      
      <tr className="ui-content-row">
        <td>
          <div className="ui-network-status-container">
            <div className="ui-network-checkbox ui-display-checkbox ui-icon-checked">
              <img src="../img/pin.png" alt="Check icon" className="ui-check-icon" />
            </div>
            <div className="ui-network-image-container">
              <img className="ui-network-image" src="../../assets/images/Group 72.png" alt="Network logo" />
            </div>
            <div>
              <div className="ui-network-label-container">
                <p>Armstrong</p>
              </div>
              <div className="ui-network-status">
                <div className="ui-active-field">
                  <p>ACTIVE</p>
                </div>
                <div className="ui-vip-clients-field">
                  <p>VIP CLIENTS</p>
                </div>
                <div className="ui-more-field">
                  <p>
                    5 MORE...
                                         </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-flex-center">
            <h2>GRAPH</h2>
          </div>
        </td>
        <td>
          <div className="ui-traffic-speed">
            <div className="ui-speed-inner">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-dl.png" />
                </div>
                <div>
                  <p className=" ui-speed-label-green">21.4 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-green ui-progress-bar-small">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <span className="ui-progress-background"></span>
              </div>
            </div>
            <div className="ui-speed-inner ">
              <div className="ui-flex-center">
                <div>
                  <img src="../img/arrow-up.png" />
                </div>
                <div>
                  <p className="ui-speed-label-blue ">4.8 Mb/s</p>
                </div>
              </div>
              <div className="ui-progress-gradient ui-gradient-blue ui-progress-bar-small ">
                <div className="ui-progress-number">
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>5</p>
                  </div>
                  <div>
                    <p>20</p>
                  </div>
                </div>
                <div className="ui-progress-background"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="ui-smiley-bar">
            <div>
              <img className="ui-smiley-image" src="../../assets/images/smiley.png" alt="Smiley image" />
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
            <div className="ui-bar-green">
            </div>
          </div>
        </td>
        <td>
          <div className="ui-basic-row-item">
            <p>Device</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
)

export default NetworksTable;