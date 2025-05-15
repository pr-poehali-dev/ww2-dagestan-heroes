
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dagestan-dark/90 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-xl font-merriweather font-bold text-white">Герои Дагестана</span>
        </NavLink>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-dagestan-gold font-medium" : "text-white hover:text-dagestan-gold transition-colors"
            }
          >
            Главная
          </NavLink>
          <NavLink 
            to="/test" 
            className={({ isActive }) => 
              isActive ? "text-dagestan-gold font-medium" : "text-white hover:text-dagestan-gold transition-colors"
            }
          >
            Тест
          </NavLink>
          <a href="#heroes" className="text-white hover:text-dagestan-gold transition-colors">
            Герои
          </a>
          <a href="#testimonials" className="text-white hover:text-dagestan-gold transition-colors">
            Отзывы
          </a>
          <a href="#contacts" className="text-white hover:text-dagestan-gold transition-colors">
            Контакты
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dagestan-dark/95 border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-dagestan-gold font-medium py-2" : "text-white hover:text-dagestan-gold transition-colors py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/test" 
              className={({ isActive }) => 
                isActive ? "text-dagestan-gold font-medium py-2" : "text-white hover:text-dagestan-gold transition-colors py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Тест
            </NavLink>
            <a 
              href="#heroes" 
              className="text-white hover:text-dagestan-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Герои
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-dagestan-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contacts" 
              className="text-white hover:text-dagestan-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
