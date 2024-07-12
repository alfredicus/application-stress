import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import './style/index.css';
import App from './components/app';
import { signal } from "@preact/signals"

export const count = signal(1)

export const allDataFiles: File[] = []

export default App;
