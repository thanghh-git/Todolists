import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/reducers';
import BulkAction from './component/Bulkaction';
import NewTask from './component/NewTask';
import Todolists from './component/Todolists';


function App() {
  const { todolists } = useSelector((state: RootState) => state.newtaskReducer);
  let show = false;
  let showBulkAction = false;
  const found = todolists.find(element => element.checked === true);

  if (found?.checked) {
    showBulkAction = found.checked;
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className='col-md-6'>
          <div className="container">
            <NewTask isUpdate={show} idx={""} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className="container">
            <Todolists />
          </div>
          {showBulkAction ? <div className="bulk-position"><BulkAction /></div> : null}
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
