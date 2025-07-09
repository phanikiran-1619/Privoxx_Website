import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WaterLogoProps {
  size?: number;
  isExpanded?: boolean;
}

export const WaterLogo = ({ size = 48, isExpanded = false }: WaterLogoProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const meshRef = useRef<THREE.Mesh>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Water-like geometry with dynamic vertices
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const positions = geometry.attributes.position;
    const originalPositions = positions.array.slice();

    // Water shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        waterColor1: { value: new THREE.Color(0x00bcd4) }, // Cyan
        waterColor2: { value: new THREE.Color(0x0288d1) }, // Blue
        waterColor3: { value: new THREE.Color(0x4fc3f7) }, // Light Blue
        amplitude: { value: 0.15 },
        frequency: { value: 2.0 },
        opacity: { value: 0.9 }
      },
      vertexShader: `
        uniform float time;
        uniform float amplitude;
        uniform float frequency;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normal;
          
          vec3 pos = position;
          
          // Create water wave effect
          float wave1 = sin(pos.x * frequency + time * 2.0) * amplitude;
          float wave2 = sin(pos.y * frequency + time * 1.5) * amplitude;
          float wave3 = sin(pos.z * frequency + time * 2.5) * amplitude;
          
          pos += normal * (wave1 + wave2 + wave3) * 0.3;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 waterColor1;
        uniform vec3 waterColor2;
        uniform vec3 waterColor3;
        uniform float opacity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;

        void main() {
          // Create flowing water color effect
          float noise1 = sin(vPosition.x * 10.0 + time * 3.0) * 0.5 + 0.5;
          float noise2 = sin(vPosition.y * 8.0 + time * 2.0) * 0.5 + 0.5;
          float noise3 = sin(vPosition.z * 12.0 + time * 4.0) * 0.5 + 0.5;
          
          vec3 color = mix(waterColor1, waterColor2, noise1);
          color = mix(color, waterColor3, noise2 * noise3);
          
          // Add fresnel effect for water-like appearance
          float fresnel = 1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0));
          color = mix(color, waterColor3, fresnel * 0.5);
          
          // Add shimmer effect
          float shimmer = sin(time * 6.0 + vPosition.x * 20.0) * 0.1 + 0.9;
          color *= shimmer;
          
          gl_FragColor = vec4(color, opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0x87ceeb, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 2.5;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    meshRef.current = mesh;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [size]);

  useEffect(() => {
    if (!meshRef.current || !rendererRef.current || !sceneRef.current) return;

    const animate = (time: number) => {
      const mesh = meshRef.current!;
      const renderer = rendererRef.current!;
      const scene = sceneRef.current!;

      // Update water animation
      const material = mesh.material as THREE.ShaderMaterial;
      material.uniforms.time.value = time * 0.001;

      // Dynamic animation based on expansion state
      if (isExpanded) {
        // More active water movement when expanded
        material.uniforms.amplitude.value = 0.2;
        material.uniforms.frequency.value = 3.0;
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
      } else {
        // Calmer water movement when collapsed
        material.uniforms.amplitude.value = 0.1;
        material.uniforms.frequency.value = 2.0;
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
      }

      // Add floating motion
      mesh.position.y = Math.sin(time * 0.002) * 0.1;

      renderer.render(scene, new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isExpanded]);

  return (
    <div 
      ref={mountRef}
      className="relative transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{ 
        width: size, 
        height: size,
        filter: 'drop-shadow(0 0 20px rgba(79, 195, 247, 0.6))'
      }}
    />
  );
};