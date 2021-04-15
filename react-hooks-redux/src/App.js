import React from 'react';
import {  Provider } from 'react-redux';
import store from './store';
import CourseList from './componentes/CourseList'

function App() {
  return (
     <Provider store={store}>
       <CourseList />
     </Provider>
  );
}

export default App;
