import { fetchConfig } from './api.js';
import { DRONE_ID } from '../env.js';

let currentConfig = {};

export async function loadConfig() {
  const container = document.getElementById('page-config');
  const config = await fetchConfig(DRONE_ID);
  currentConfig = config;

  container.innerHTML = `
    <h3>Drone Configuration</h3>
    <ul class="list-group">
      <li class="list-group-item"><strong>Drone ID:</strong> ${config.drone_id}</li>
      <li class="list-group-item"><strong>Drone Name:</strong> ${config.drone_name}</li>
      <li class="list-group-item"><strong>Light:</strong> ${config.light}</li>
      <li class="list-group-item"><strong>Country:</strong> ${config.country}</li>
    </ul>
  `;
}

export function getCurrentConfig() {
  return currentConfig;
}
