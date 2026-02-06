import './styles/global.css';
import * as THREE from 'three';
import type { GameState, FrameInfo } from './types';

// --- Scene setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// --- Lighting ---
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// --- Demo cube ---
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00cc88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// --- Game state ---
// Change this to `let` when you need to switch states at runtime
const state: GameState = 'playing';

// --- Game loop ---
const clock = new THREE.Clock();

function gameLoop(): void {
  requestAnimationFrame(gameLoop);

  const info: FrameInfo = {
    delta: Math.min(clock.getDelta(), 0.05),
    elapsed: clock.getElapsedTime(),
  };

  if (state === 'playing') {
    update(info);
  }

  renderer.render(scene, camera);
}

function update(info: FrameInfo): void {
  cube.rotation.x += info.delta;
  cube.rotation.y += info.delta * 0.5;
}

// --- Resize handler ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// --- Start ---
gameLoop();
