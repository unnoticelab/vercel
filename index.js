// pages/index.js
import Head from 'next/head'; // Mengimpor komponen Head dari Next.js untuk mengelola meta tag

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Head>
        <title>Hello Vercel App</title> {/* Menetapkan judul halaman */}
        <link rel="icon" href="/favicon.ico" /> {/* Menetapkan ikon browser */}
      </Head>

      <h1 style={{ color: '#333', fontSize: '3em' }}>Hello from Vercel!</h1>
      <p style={{ color: '#666', fontSize: '1.2em', maxWidth: '600px', lineHeight: '1.5' }}>
        Ini adalah aplikasi Next.js sederhana yang dibuat untuk Anda!
        Anda bisa mengunggah file-file ini langsung ke repositori GitHub, lalu menghubungkannya ke Vercel untuk deployment otomatis.
      </p>
      <p style={{ color: '#999', fontSize: '0.9em', marginTop: '30px' }}>
        Selamat mencoba deployment web!
      </p>
    </div>
  )
}