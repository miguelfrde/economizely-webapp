import React from 'react';
import Title from 'react-title-component';
// import TopBar from '../components/TopBar.jsx';
// import SideBar from '../components/SideBar.jsx';


const App = (props) => {
  return (
    <div>
      <Title render="Economizely" />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
