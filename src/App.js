import './App.css';
import { Provider } from 'react-redux';

import ContactAdd from './components/contact-add'
import ContactList from './components/contact-list'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <ContactAdd />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
