import { fetchLogs } from './api.js';
import { DRONE_ID } from '../env.js';

export async function loadLogs() {
  const container = document.getElementById('page-logs');
  const logs = await fetchLogs(DRONE_ID);

  container.innerHTML = `
    <h3>Logs</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Created</th>
          <th>Country</th>
          <th>Drone ID</th>
          <th>Drone Name</th>
          <th>Celsius</th>
        </tr>
      </thead>
      <tbody>
        ${logs.map(log => `
          <tr>
            <td>${new Date(log.created).toLocaleString()}</td>
            <td>${log.country}</td>
            <td>${log.drone_id}</td>
            <td>${log.drone_name}</td>
            <td>${log.celsius}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
