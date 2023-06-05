import Factory from './components/Factory';
import Assembly from './components/Assembly';
import Config from './components/Config';

import classes from './index.module.css';

function App() {
  const schema = {};

  return (
    <div className={classes.wrapper}>
      <Factory />

      <Assembly />

      <Config />
    </div>
  );
}

export default App;
