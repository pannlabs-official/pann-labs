import SectionHeading from '@/components/SectionHeading';
import TriviaGame from '@/components/TriviaGame';

export const metadata = {
  title: 'Games Arena | Data Trivia',
  description: 'Test your knowledge on data integrity, analytics, and engineering in the Pann Labs Games Arena.',
};

export default function GamesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading 
            label="Games Arena"
            title="Data Trivia Challenge"
            subtitle="Are you a data novice or a data master? Put your skills to the test with our interactive trivia game."
          />
          
          <TriviaGame />
        </div>
      </section>
    </>
  );
}
