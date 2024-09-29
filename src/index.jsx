import { createRoot } from 'react-dom/client';
import Link from './Link.jsx';
import Button from './Button.jsx';

function App() {
  return (
    <>
      <Link href="https://artemzhyrnyi.netlify.app/" target="_blank">
        Link text
      </Link>
      <Button type="button" disabled="true">
        Click button
      </Button>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
