import { createRoot } from 'react-dom/client';
import Link from './Link.jsx';
import Button from './Button.jsx';
import Container from './Container.jsx';

function App() {
  return (
    <>
      <Container>
        <Link href="https://artemzhyrnyi.netlify.app/" target="_blank">
          Link text
        </Link>
        <Button type="button" disabled="true">
          Click button
        </Button>
      </Container>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
