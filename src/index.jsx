import { createRoot } from 'react-dom/client';
import Link from './Link.jsx';
import Button from './Button.jsx';
import Container from './Container.jsx';
import Input from './Input.jsx';

function App() {
  return (
    <>
      <Container className="main">
        <Link href="https://artemzhyrnyi.netlify.app/" target="_blank">
          Link text
        </Link>
        <Button type="button" disabled={true}>
          Click button
        </Button>
        <Input placeholder="Full Name" name="full_name" />
      </Container>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
