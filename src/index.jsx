import { createRoot } from 'react-dom/client';
import Link from './Link.jsx';

function App() {
  return (
    <>
      <Link href="https://artemzhyrnyi.netlify.app/" target="_blank">
        Link text
      </Link>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
