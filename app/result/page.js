// results of the test
'use client';
import { useSearchParams } from 'next/navigation';

export default function Result() {
    const searchParams = useSearchParams();
    const planet = searchParams.get('planet') || 'Unknown';
    
    const handleSaveImage = () => {
        alert('Save as Image feature coming soon!');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Your Planet: {planet}</h1>
            <p>Based on your answers, this is your ideal alien home!</p>
            <button className="button" onClick={handleSaveImage}>
                Save as Image
            </button>
        </div>
    );
}