import HeroSection from '@/components/HeroSection';
import QuizSection from '@/components/QuizSection';
import RegisterButton from '@/components/RegisterButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      <QuizSection />
      <RegisterButton />
      <Footer />
    </main>
  );
};

export default Index;
