import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Лечение зубов',
      description: 'Современное безболезненное лечение кариеса и других заболеваний',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Smile',
      title: 'Имплантация',
      description: 'Установка качественных имплантов с пожизненной гарантией',
      price: 'от 35 000 ₽'
    },
    {
      icon: 'Star',
      title: 'Отбеливание',
      description: 'Профессиональное отбеливание зубов до 8 тонов',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'ShieldCheck',
      title: 'Протезирование',
      description: 'Изготовление и установка всех видов протезов',
      price: 'от 15 000 ₽'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опытные врачи',
      description: 'Стаж специалистов от 10 лет'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Гарантия на все виды работ'
    },
    {
      icon: 'Clock',
      title: 'Без очередей',
      description: 'Удобная запись онлайн'
    },
    {
      icon: 'Wallet',
      title: 'Рассрочка 0%',
      description: 'Беспроцентная рассрочка'
    },
    {
      icon: 'Microscope',
      title: 'Современное оборудование',
      description: 'Цифровая диагностика'
    },
    {
      icon: 'Heart',
      title: 'Без боли',
      description: 'Качественная анестезия'
    }
  ];

  const doctors = [
    {
      name: 'Иванова Анна Сергеевна',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/adfe7840-d66f-4d69-bed2-1400cf775b6c.jpg'
    },
    {
      name: 'Петров Дмитрий Иванович',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/adfe7840-d66f-4d69-bed2-1400cf775b6c.jpg'
    },
    {
      name: 'Смирнова Елена Павловна',
      specialty: 'Стоматолог-ортопед',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/adfe7840-d66f-4d69-bed2-1400cf775b6c.jpg'
    }
  ];

  const gallery = [
    {
      title: 'Отбеливание',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/8fde100b-3d8b-44fe-9ddd-6f4a3b3cb292.jpg'
    },
    {
      title: 'Имплантация',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/8fde100b-3d8b-44fe-9ddd-6f4a3b3cb292.jpg'
    },
    {
      title: 'Протезирование',
      image: 'https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/8fde100b-3d8b-44fe-9ddd-6f4a3b3cb292.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold font-heading">Стоматология</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="hover:text-primary transition-colors">Врачи</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
            Записаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Современная стоматология<br />
                <span className="text-primary">без боли</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное лечение и забота о вашей улыбке. Бесплатная консультация и гарантия на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/de7d8682-1c9b-4f93-956c-45cdb46d8f27/files/f71c4ee7-636a-478f-8d64-972f19dc2705.jpg" 
                alt="Стоматологическая клиника" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр стоматологических услуг</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Ваш комфорт и здоровье — наш приоритет</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Наши врачи</h2>
            <p className="text-xl text-muted-foreground">Опытные специалисты с профильным образованием</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-primary">
                    <Icon name="GraduationCap" size={20} />
                    <span className="font-semibold">Стаж: {doctor.experience}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className="font-semibold text-lg">Консультация</div>
                      <div className="text-sm text-muted-foreground">Первичный осмотр и план лечения</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">Бесплатно</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className="font-semibold text-lg">Лечение кариеса</div>
                      <div className="text-sm text-muted-foreground">С установкой пломбы</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 3 500 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className="font-semibold text-lg">Профессиональная чистка</div>
                      <div className="text-sm text-muted-foreground">Удаление зубного камня</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 4 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className="font-semibold text-lg">Отбеливание зубов</div>
                      <div className="text-sm text-muted-foreground">Профессиональное отбеливание</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 12 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className="font-semibold text-lg">Имплантация</div>
                      <div className="text-sm text-muted-foreground">Установка импланта под ключ</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 35 000 ₽</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-lg">Коронка</div>
                      <div className="text-sm text-muted-foreground">Керамическая коронка</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">от 18 000 ₽</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Доступна рассрочка 0% на все виды услуг</p>
              <Button size="lg">Узнать подробнее о рассрочке</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Результаты наших пациентов говорят сами за себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold font-heading">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Запишитесь на приём</h2>
            <p className="text-xl text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Оставьте заявку</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним вам для уточнения деталей</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Ваш телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение (необязательно)" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес клиники</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Ленина, д. 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Звоните с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@stomatology.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold font-heading">Стоматология</h3>
              </div>
              <p className="text-gray-400">
                Современная стоматология — без боли, с гарантией и заботой о пациентах
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Врачи</a></li>
                <li><a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a></li>
                <li><a href="#prices" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Ленина, д. 1</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@stomatology.ru</li>
                <li>Пн-Пт: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Стоматология. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
