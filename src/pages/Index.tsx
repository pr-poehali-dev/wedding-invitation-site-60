import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Confetti = () => {
  const colors = ['#EC4899', '#8B5CF6', '#F59E0B', '#FDE1D3'];
  const confettiCount = 50;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(confettiCount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ! 💕",
      description: `${formData.name}, мы рады что вы сможете присутствовать!`,
    });
    setFormData({ name: '', email: '', guests: '1', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Confetti />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 animate-float">
              <span className="text-8xl">💍</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-primary mb-6 tracking-tight">
              Елизавета & Вадим
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Приглашаем вас разделить с нами самый счастливый день
            </p>
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-secondary font-semibold">
              <Icon name="Calendar" size={32} />
              <span>15 июня 2026</span>
            </div>
          </div>
        </section>

        <section id="couple" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-primary">
              Наша история
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-4xl text-center">💕</CardTitle>
                  <CardTitle className="text-3xl text-center text-primary">Елизавета</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    Творческая душа, любит цветы и мечтает о путешествиях. 
                    Её улыбка освещает самые темные дни.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-4xl text-center">💙</CardTitle>
                  <CardTitle className="text-3xl text-center text-accent">Вадим</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    Надежная опора, любит музыку и готовит невероятные ужины.
                    Его юмор делает каждый день особенным.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-none shadow-xl">
              <CardContent className="pt-8">
                <div className="text-center max-w-3xl mx-auto">
                  <Icon name="Heart" size={48} className="mx-auto mb-6 text-primary" />
                  <p className="text-xl text-foreground leading-relaxed">
                    Мы познакомились в интернете, пошли гулять и даже не думали, что это перерастет в любовь. 
                    Теперь мы готовы сказать "Да!" друг другу навсегда.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="venue" className="py-24 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-secondary">
              Место и время
            </h2>
            <Card className="border-2 border-amber-200 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🏰</div>
                <CardTitle className="text-4xl mb-4">Усадьба "Золотой закат"</CardTitle>
                <CardDescription className="text-xl">
                  г. Москва, ул. Садовая, 25
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 text-lg">
                  <Icon name="Calendar" size={28} className="text-secondary" />
                  <span className="font-semibold">15 июня 2026 года, суббота</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Icon name="Clock" size={28} className="text-secondary" />
                  <span className="font-semibold">Начало церемонии в 16:00</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Icon name="MapPin" size={28} className="text-secondary" />
                  <span className="font-semibold">Парковка и гардероб на территории</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="schedule" className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-accent">
              Программа дня
            </h2>
            <div className="space-y-6">
              {[
                { time: '16:00', icon: 'Church', title: 'Церемония бракосочетания', desc: 'Торжественная регистрация в парковой беседке' },
                { time: '17:00', icon: 'Camera', title: 'Фотосессия', desc: 'Совместные фотографии в живописном саду' },
                { time: '18:00', icon: 'Utensils', title: 'Банкет', desc: 'Праздничный ужин и поздравления' },
                { time: '20:00', icon: 'Music', title: 'Танцы и развлечения', desc: 'Живая музыка, конкурсы и веселье до утра' },
                { time: '22:00', icon: 'Cake', title: 'Торт', desc: 'Разрезание свадебного торта' },
              ].map((item, idx) => (
                <Card key={idx} className="border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="text-3xl font-bold text-secondary min-w-[100px]">
                      {item.time}
                    </div>
                    <Icon name={item.icon as any} size={40} className="text-accent" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-lg">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="rsvp" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-primary">
              Подтверждение
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Пожалуйста, подтвердите ваше присутствие до 1 мая 2026
            </p>
            <Card className="shadow-2xl border-2 border-pink-200">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 text-lg"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 text-lg"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-lg">Количество гостей *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="mt-2 text-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg">Пожелания или комментарии</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 text-lg"
                      rows={4}
                      placeholder="Особые пожелания по питанию, музыке..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-xl py-6 bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={24} className="mr-2" />
                    Подтвердить присутствие
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 bg-primary text-primary-foreground text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-6xl mb-4">💑</div>
            <p className="text-2xl font-light">
              С любовью, Елизавета и Вадим
            </p>
            <p className="text-lg opacity-90">
              По всем вопросам: +7 (999) 123-45-67
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <span className="text-3xl">🎊</span>
              <span className="text-3xl">💐</span>
              <span className="text-3xl">🥂</span>
              <span className="text-3xl">🎉</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;