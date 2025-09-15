import HeroSection from '@/components/HeroSection';
import QuizSection from '@/components/QuizSection';
import RegisterButton from '@/components/RegisterButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <QuizSection />
      <RegisterButton />
      <Footer />
    </main>
  );
};

export default Index;
