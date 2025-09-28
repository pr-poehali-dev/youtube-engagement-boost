import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Просмотры",
    description: "Бесплатная накрутка просмотров ваших видео",
    icon: "Play",
    amount: "100-1000",
    time: "5-15 минут"
  },
  {
    id: 2,
    title: "Лайки",
    description: "Добавляем лайки для повышения популярности",
    icon: "ThumbsUp",
    amount: "50-500",
    time: "3-10 минут"
  },
  {
    id: 3,
    title: "Подписчики",
    description: "Увеличиваем базу подписчиков канала",
    icon: "Users",
    amount: "10-100",
    time: "10-30 минут"
  },
  {
    id: 4,
    title: "Комментарии",
    description: "Генерируем живые комментарии под видео",
    icon: "MessageCircle",
    amount: "5-25",
    time: "15-45 минут"
  }
];

const recentBoosts = [
  { id: 1, title: "Мой первый влог", views: "+1,247", time: "2 минуты назад" },
  { id: 2, title: "Обзор нового iPhone", views: "+856", time: "5 минут назад" },
  { id: 3, title: "Туториал по React", views: "+2,134", time: "8 минут назад" },
  { id: 4, title: "Готовим дома", views: "+679", time: "12 минут назад" }
];



export default function Index() {
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedService, setSelectedService] = useState("views");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;

    setIsProcessing(true);
    setProgress(0);

    // Симуляция процесса накрутки
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Play" className="text-youtube" size={32} />
              <span className="text-2xl font-bold">Free YouTube Boost</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#boost" className="text-foreground hover:text-primary transition-colors">Накрутить</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#recent" className="text-foreground hover:text-primary transition-colors">Последние</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Как работает</a>
            </div>
            
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="Gift" className="mr-1" size={16} />
              100% Бесплатно
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section with Form */}
      <section id="boost" className="py-20 bg-gradient-to-br from-youtube/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Бесплатная накрутка <span className="text-youtube">YouTube</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Вставьте ссылку на ваше YouTube видео и получите бесплатные просмотры, лайки и подписчиков прямо сейчас!
            </p>
          </div>

          {/* Main Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Начать накрутку</CardTitle>
                <CardDescription className="text-center">
                  Вставьте ссылку на YouTube видео и выберите тип накрутки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="video-url">Ссылка на YouTube видео</Label>
                    <Input
                      id="video-url"
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="text-lg py-3"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Выберите тип накрутки</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            selectedService === service.id.toString() 
                              ? 'border-youtube bg-youtube/5' 
                              : 'border-border hover:border-youtube/50'
                          }`}
                          onClick={() => setSelectedService(service.id.toString())}
                        >
                          <div className="text-center">
                            <Icon name={service.icon as any} className="text-youtube mx-auto mb-2" size={24} />
                            <div className="font-medium text-sm">{service.title}</div>
                            <div className="text-xs text-muted-foreground">{service.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Накручиваем...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-youtube hover:bg-youtube-600 text-white text-lg py-3"
                    disabled={!videoUrl || isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Обрабатываем...
                      </>
                    ) : (
                      <>
                        <Icon name="Rocket" className="mr-2" size={20} />
                        Начать бесплатную накрутку
                      </>
                    )}
                  </Button>
                </form>

                {progress === 100 && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center text-green-800">
                      <Icon name="CheckCircle" className="mr-2" size={20} />
                      <span className="font-medium">Накрутка завершена успешно!</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Ваше видео получило дополнительные просмотры. Результат будет виден через 5-10 минут.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все услуги абсолютно бесплатны. Просто вставьте ссылку и получите результат!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-youtube/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-youtube" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Количество:</span>
                      <span className="font-medium">{service.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Время:</span>
                      <span className="font-medium">{service.time}</span>
                    </div>
                    <Badge className="w-full bg-green-100 text-green-800 hover:bg-green-100">
                      <Icon name="Gift" className="mr-1" size={14} />
                      Бесплатно
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section id="recent" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Последние накрутки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Смотрите, как другие пользователи получают бесплатные просмотры прямо сейчас
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Activity" className="mr-2 text-youtube" size={24} />
                  Активность в реальном времени
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBoosts.map((boost) => (
                    <div key={boost.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <div className="font-medium">{boost.title}</div>
                          <div className="text-sm text-muted-foreground">{boost.time}</div>
                        </div>
                      </div>
                      <Badge className="bg-youtube text-white">
                        {boost.views}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс в 3 шага для бесплатной накрутки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Вставьте ссылку",
                description: "Скопируйте ссылку на ваше YouTube видео и вставьте её в форму выше",
                icon: "Link"
              },
              {
                step: "2", 
                title: "Выберите тип",
                description: "Выберите что накрутить: просмотры, лайки, подписчиков или комментарии",
                icon: "MousePointer"
              },
              {
                step: "3",
                title: "Получите результат",
                description: "Ждите 5-15 минут и наслаждайтесь ростом популярности вашего видео",
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

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Gift",
                title: "100% Бесплатно",
                description: "Никаких скрытых платежей и подписок"
              },
              {
                icon: "Zap",
                title: "Быстрый результат",
                description: "Получите накрутку за 5-15 минут"
              },
              {
                icon: "Shield",
                title: "Полная безопасность",
                description: "Ваш канал останется в безопасности"
              },
              {
                icon: "RefreshCw",
                title: "Без ограничений",
                description: "Накручивайте столько видео, сколько хотите"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-youtube/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-youtube" size={32} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
          <h2 className="text-4xl font-bold mb-4">Готовы увеличить популярность?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Вставьте ссылку на ваше YouTube видео и получите бесплатную накрутку прямо сейчас!
          </p>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('boost')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="ArrowUp" className="mr-2" size={20} />
            Накрутить видео бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Play" className="text-youtube" size={24} />
                <span className="text-xl font-bold">Free YouTube Boost</span>
              </div>
              <p className="text-muted-foreground">
                Бесплатный сервис накрутки для YouTube. Быстро, безопасно, эффективно.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Бесплатная накрутка просмотров</div>
                <div>Бесплатная накрутка лайков</div>
                <div>Бесплатная накрутка подписчиков</div>
                <div>Бесплатная накрутка комментариев</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Как это работает</div>
                <div>Безопасность</div>
                <div>Часто задаваемые вопросы</div>
                <div>Поддержка пользователей</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Free YouTube Boost. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}