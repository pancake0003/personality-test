// menu page main page
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Personality Test</h1>
            <p>Select a test to begin:</p>
            <button className="button" onClick={() => router.push('/test')}>
                Which planet would you live on if you were an alien?
            </button>
        </div>
    );
}