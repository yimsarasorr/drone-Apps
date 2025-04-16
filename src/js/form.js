import { postLog } from './api.js';
import { getCurrentConfig } from './config.js';

export async function setupForm() {
  const container = document.getElementById('page-form');
  const config = getCurrentConfig();

  container.innerHTML = `
    <h3>Submit Temperature Log</h3>
    <form id="logForm">
      <div class="mb-3">
        <label for="celsius" class="form-label">Temperature (°C)</label>
        <input type="number" class="form-control" id="celsius" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;

  document.getElementById('logForm').onsubmit = async (e) => {
    e.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    await postLog({
      drone_id: config.drone_id,
      drone_name: config.drone_name,
      country: config.country,
      celsius
    });
    alert('Log submitted!');
    document.getElementById('celsius').value = '';
  };
}
