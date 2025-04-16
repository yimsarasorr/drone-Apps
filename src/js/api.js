import { API_URL } from '../env.js';

export async function fetchConfig(droneId) {
  const res = await fetch(`${API_URL}/configs/${droneId}`);
  return await res.json();
}

export async function fetchLogs(droneId) {
  const res = await fetch(`${API_URL}/logs/${droneId}`);
  return await res.json();
}

export async function postLog(logData) {
  const res = await fetch(`${API_URL}/logs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logData)
  });
  return await res.json();
}
