
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-dagestan-dark mt-16 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">О проекте</h3>
            <p className="text-gray-300 mb-4">
              Этот сайт посвящен героям Дагестана, проявившим мужество и отвагу в годы 
              Великой Отечественной войны. Их подвиги навсегда останутся в нашей памяти.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  Пройти тест
                </Link>
              </li>
              <li>
                <a href="#heroes" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  Герои Дагестана
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          
          <div id="contacts">
            <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
            <address className="not-italic">
              <div className="flex items-center mb-2">
                <Icon name="Mail" className="mr-2 text-dagestan-gold" size={18} />
                <a href="mailto:dagestan-heroes@example.com" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  dagestan-heroes@example.com
                </a>
              </div>
              <div className="flex items-center mb-2">
                <Icon name="Phone" className="mr-2 text-dagestan-gold" size={18} />
                <a href="tel:+7999123456" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="mr-2 text-dagestan-gold" size={18} />
                <span className="text-gray-300">
                  г. Махачкала, ул. Примерная, 123
                </span>
              </div>
            </address>
            
            <div className="mt-6 flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                <Icon name="Facebook" size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                <Icon name="Instagram" size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-dagestan-gold transition-colors">
                <Icon name="Twitter" size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Герои Дагестана. Все права защищены.</p>
          <p className="mt-1 text-sm">Сайт создан в рамках студенческого проекта</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
