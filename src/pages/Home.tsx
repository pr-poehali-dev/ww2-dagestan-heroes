
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { heroes, quotes, testimonials } from "@/data/heroes";
import Icon from '@/components/ui/icon';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const [activeHero, setActiveHero] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-dagestan-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Герои Дагестана
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp delay-1">
            Подвиги и судьбы дагестанцев в годы 
            Великой Отечественной войны
          </p>
          <Button 
            size="lg" 
            className="bg-dagestan-red hover:bg-red-700 text-white animate-fadeInUp delay-2"
            asChild
          >
            <a href="#heroes">Узнать о героях</a>
          </Button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-dagestan-dark">
        <div className="container mx-auto px-4">
          <div className="quote-card">
            <blockquote className="text-xl md:text-2xl italic text-center">
              {quotes[0].text}
            </blockquote>
            <p className="text-right mt-4 text-dagestan-gold">— {quotes[0].author}</p>
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section id="heroes" className="py-16 bg-gradient-to-b from-dagestan-dark to-dagestan-dark/90">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Герои Дагестана</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroes.map((hero) => (
              <div 
                key={hero.id} 
                className="hero-card"
                onMouseEnter={() => setActiveHero(hero.id)}
                onMouseLeave={() => setActiveHero(null)}
              >
                <img src={hero.photo} alt={hero.name} />
                <h3 className="text-xl font-bold mb-2">{hero.name}</h3>
                <p className="text-gray-300 mb-2">{hero.dates}</p>
                <p className="text-sm text-dagestan-gold mb-4">{hero.shortDescription}</p>
                
                <div className={`transition-all duration-300 overflow-hidden ${activeHero === hero.id ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="text-gray-300 mb-4">{hero.fullDescription}</p>
                  <h4 className="font-bold mb-2">Достижения:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {hero.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="link" 
                  className="text-dagestan-gold p-0 hover:text-dagestan-gold/80"
                  onClick={() => setActiveHero(activeHero === hero.id ? null : hero.id)}
                >
                  {activeHero === hero.id ? 'Скрыть' : 'Подробнее'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Carousel Section */}
      <section className="py-16 bg-dagestan-dark/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {quotes.slice(1).map((quote) => (
              <div key={quote.id} className="quote-card mb-8">
                <blockquote className="text-xl md:text-2xl italic text-center">
                  {quote.text}
                </blockquote>
                <p className="text-right mt-4 text-dagestan-gold">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-dagestan-dark/60 to-dagestan-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Проверьте свои знания</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Пройдите тест и узнайте, насколько хорошо вы знаете историю героев Дагестана 
            времён Великой Отечественной войны
          </p>
          <Button 
            size="lg" 
            className="bg-dagestan-gold text-dagestan-dark hover:bg-dagestan-gold/80"
            asChild
          >
            <Link to="/test">Пройти тест</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-dagestan-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Отзывы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="feedback-card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
                <div className="mt-4 text-dagestan-gold">
                  <Icon name="Star" className="inline-block mr-1" size={16} />
                  <Icon name="Star" className="inline-block mr-1" size={16} />
                  <Icon name="Star" className="inline-block mr-1" size={16} />
                  <Icon name="Star" className="inline-block mr-1" size={16} />
                  <Icon name="Star" className="inline-block" size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-dagestan-gold text-dagestan-gold hover:bg-dagestan-gold/10"
            >
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
