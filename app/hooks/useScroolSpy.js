"use client";

import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (elementIds, options) => {
  const [activeId, setActiveId] = useState('');
  const observer = useRef(null);

  useEffect(() => {
    // Hentikan observer lama jika ada
    if (observer.current) {
      observer.current.disconnect();
    }

    // Buat observer baru dengan options yang diberikan
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Jika elemen sedang terlihat di layar (isIntersecting)
        if (entry.isIntersecting) {
          // Set ID elemen tersebut sebagai yang aktif
          setActiveId(entry.target.id);
        }
      });
    }, options);

    // Mulai amati setiap elemen berdasarkan ID-nya
    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current.observe(element);
      }
    });

    // Fungsi cleanup: berhenti mengamati saat komponen tidak lagi digunakan
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elementIds, options]); // Jalankan ulang jika daftar ID atau options berubah

  return activeId;
};