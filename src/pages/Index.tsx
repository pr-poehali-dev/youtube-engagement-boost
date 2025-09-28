import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [quantity, setQuantity] = useState('');

  const services = [
    {
      id: 'views',
      name: 'Просмотры',
      icon: 'Eye',
      description: 'Увеличьте количество просмотров ваших видео',
      minOrder: 1000,
      price: '0.50 ₽'
    },
    {
      id: 'likes',
      name: 'Лайки',
      icon: 'ThumbsUp',
      description: 'Получите больше лайков под видео',
      minOrder: 100,
      price: '5.00 ₽'
    },
    {
      id: 'subscribers',
      name: 'Подписчики',
      icon: 'Users',
      description: 'Расширьте аудиторию вашего канала',
      minOrder: 50,
      price: '15.00 ₽'
    },
    {
      id: 'comments',
      name: 'Комментарии',
      icon: 'MessageCircle',
      description: 'Добавьте активность в комментарии',
      minOrder: 10,
      price: '25.00 ₽'
    }
  ];

  const pricingPlans = [
    {
      name: 'Стартер',
      price: '1 990 ₽',
      description: 'Для начинающих блогеров',
      features: [
        '10,000 просмотров',
        '500 лайков',
        '100 подписчиков',
        '20 комментариев',
        'Поддержка 24/7'
      ],
      popular: false
    },
    {
      name: 'Профи',
      price: '4 990 ₽',
      description: 'Популярный выбор',
      features: [
        '50,000 просмотров',
        '2,500 лайков',
        '500 подписчиков',
        '100 комментариев',
        'Поддержка 24/7',
        'Приоритетная обработка'
      ],
      popular: true
    },
    {
      name: 'Эксперт',
      price: '9 990 ₽',
      description: 'Для серьезного роста',
      features: [
        '100,000 просмотров',
        '5,000 лайков',
        '1,000 подписчиков',
        '200 комментариев',
        'Поддержка 24/7',
        'Приоритетная обработка',
        'Персональный менеджер'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Play" className="text-youtube" size={24} />
            <span className="text-xl font-bold">YouTube Boost</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
            <Button>Заказать</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-youtube/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-youtube to-youtube-600 bg-clip-text text-transparent">
            Быстрая накрутка для YouTube
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Увеличьте популярность вашего канала с помощью качественной накрутки просмотров, 
            лайков, подписчиков и комментариев. Безопасно и эффективно.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-youtube hover:bg-youtube-600">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать накрутку
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: '50M+', label: 'Просмотров добавлено' },
              { number: '2M+', label: 'Лайков накручено' },
              { number: '500K+', label: 'Подписчиков привлечено' },
              { number: '99.9%', label: 'Довольных клиентов' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-youtube">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите нужную услугу для роста вашего YouTube канала
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-youtube/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-youtube" size={32} />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-youtube mb-2">от {service.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Минимальный заказ: {service.minOrder.toLocaleString()}
                  </div>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Оформить заказ</CardTitle>
                <CardDescription>
                  Заполните форму и мы начнем работу в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="service">Выберите услугу</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип накрутки" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex items-center">
                            <Icon name={service.icon as any} className="mr-2" size={16} />
                            {service.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="url">Ссылка на видео или канал</Label>
                  <Input 
                    id="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Количество</Label>
                  <Input 
                    id="quantity"
                    type="number"
                    placeholder="Введите количество"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  {selectedService && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Минимальный заказ: {services.find(s => s.id === selectedService)?.minOrder.toLocaleString()}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="comments">Дополнительные пожелания</Label>
                  <Textarea 
                    id="comments"
                    placeholder="Укажите особые требования к заказу (необязательно)"
                    className="min-h-20"
                  />
                </div>

                <Button className="w-full bg-youtube hover:bg-youtube-600" size="lg">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Оформить заказ
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <Icon name="Shield" className="inline mr-1" size={16} />
                  Ваши данные защищены. Мы не передаем информацию третьим лицам.
                </div>
              </CardContent>
            </Card>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрый старт",
                description: "Начинаем работу в течение 30 минут после оплаты"
              },
              {
                icon: "Shield",
                title: "100% безопасно",
                description: "Используем только проверенные методы без риска блокировки"
              },
              {
                icon: "Users",
                title: "Живые пользователи",
                description: "Работаем только с реальными аккаунтами, не ботами"
              },
              {
                icon: "Clock",
                title: "Поддержка 24/7",
                description: "Наша команда готова помочь в любое время"
              },
              {
                icon: "DollarSign",
                title: "Доступные цены",
                description: "Лучшие цены на рынке без скрытых комиссий"
              },
              {
                icon: "Star",
                title: "Высокое качество",
                description: "Гарантируем качественную накрутку с удержанием"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-youtube/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-youtube" size={32} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
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