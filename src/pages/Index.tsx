import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Просмотры",
    description: "Увеличиваем количество просмотров ваших видео",
    icon: "Play",
    price: "от 100₽",
    features: ["Быстрая доставка", "Высокое качество", "Безопасно"]
  },
  {
    id: 2,
    title: "Лайки",
    description: "Добавляем лайки для повышения вовлеченности",
    icon: "ThumbsUp",
    price: "от 50₽",
    features: ["Живые аккаунты", "Постепенная подача", "Гарантия"]
  },
  {
    id: 3,
    title: "Подписчики",
    description: "Увеличиваем базу подписчиков вашего канала",
    icon: "Users",
    price: "от 200₽",
    features: ["Качественная аудитория", "Долгосрочный эффект", "Поддержка"]
  },
  {
    id: 4,
    title: "Комментарии",
    description: "Генерируем активные комментарии под видео",
    icon: "MessageCircle",
    price: "от 75₽",
    features: ["Уникальные тексты", "Естественность", "Модерация"]
  }
];

const pricingPlans = [
  {
    name: "Старт",
    price: "1 990₽",
    description: "Для начинающих каналов",
    features: [
      "1000 просмотров",
      "100 лайков",
      "50 подписчиков",
      "Поддержка 24/7"
    ],
    popular: false
  },
  {
    name: "Рост",
    price: "4 990₽",
    description: "Для развивающихся каналов",
    features: [
      "5000 просмотров",
      "500 лайков",
      "200 подписчиков",
      "10 комментариев",
      "Аналитика"
    ],
    popular: true
  },
  {
    name: "Профи",
    price: "9 990₽",
    description: "Для серьезного роста",
    features: [
      "15000 просмотров",
      "1500 лайков",
      "500 подписчиков",
      "30 комментариев",
      "Персональный менеджер"
    ],
    popular: false
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Play" className="text-youtube" size={32} />
              <span className="text-2xl font-bold">YouTube Boost</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Как работает</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            
            <Button>Начать</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-youtube/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Раскрути свой <span className="text-youtube">YouTube</span> канал
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная накрутка просмотров, лайков, подписчиков и комментариев. 
            Быстро, безопасно и эффективно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-youtube hover:bg-youtube-600 text-white">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать накрутку
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для роста вашего YouTube канала
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-youtube/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-youtube" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-youtube">{service.price}</span>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Icon name="Check" className="text-green-500 mr-2" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный пакет для роста вашего канала
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-youtube scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-youtube text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-youtube">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Icon name="Check" className="text-green-500 mr-3" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-youtube hover:bg-youtube-600 text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс в 4 шага для быстрого роста вашего канала
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Выберите услугу",
                description: "Определите, что нужно для вашего канала: просмотры, лайки или подписчики",
                icon: "Target"
              },
              {
                step: "2", 
                title: "Укажите ссылку",
                description: "Добавьте ссылку на ваше видео или канал YouTube",
                icon: "Link"
              },
              {
                step: "3",
                title: "Выберите пакет",
                description: "Определите количество и выберите подходящий тарифный план",
                icon: "Package"
              },
              {
                step: "4",
                title: "Получите результат",
                description: "Наблюдайте за ростом метрик в режиме реального времени",
                icon: "TrendingUp"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-youtube text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-youtube text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать рост?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые уже увеличили популярность своих каналов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-youtube">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Play" className="text-youtube" size={24} />
                <span className="text-xl font-bold">YouTube Boost</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональный сервис накрутки для YouTube каналов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Накрутка просмотров</div>
                <div>Накрутка лайков</div>
                <div>Накрутка подписчиков</div>
                <div>Накрутка комментариев</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Часто задаваемые вопросы</div>
                <div>Связаться с нами</div>
                <div>Техническая поддержка</div>
                <div>Отзывы клиентов</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  support@youtubeboost.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2" size={16} />
                  24/7 поддержка
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 YouTube Boost. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}