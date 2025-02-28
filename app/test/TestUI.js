'use client';
import styles from '../styles/test.module.css';

export default function TestUI({ question, answers, handleSelect, nextQuestion, prevQuestion, handleSubmit, error, currentQuestion, totalQuestions }) {
    return (
        <div className={styles.container}>
            <p>Which Planet Would You Live On?</p>
            <h1>{question.text}</h1>
            <div className={styles.options}>
                {question.options.map((option) => (
                    <button 
                        key={option} 
                        className={`${styles.optionButton} ${answers[question.id] === option ? styles.selected : ''}`}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.navigationButtons}>
                <button onClick={prevQuestion} disabled={currentQuestion === 0} className={styles.navButton}>
                    Previous
                </button>
                {currentQuestion < totalQuestions - 1 ? (
                    <button onClick={nextQuestion} className={styles.navButton}>
                        Next
                    </button>
                ) : (
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        See Results
                    </button>
                )}
            </div>
        </div>
    );
}