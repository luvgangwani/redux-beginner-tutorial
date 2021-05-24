import { Provider } from 'react-redux'; // Provider is the glue that holds react and redux together

import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
