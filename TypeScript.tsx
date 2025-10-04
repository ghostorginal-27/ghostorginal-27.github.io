import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "/components/ui/label";

const PersonalWebsite = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const products = [
    {
      id: 1,
      title: "Profesyonel Web Tasarım",
      description: "Modern ve responsive web siteleri",
      price: "₺2.500"
    },
    {
      id: 2,
      title: "SEO Optimizasyon",
      description: "Arama motorlarında üst sıralara çıkın",
      price: "₺1.200"
    },
    {
      id: 3,
      title: "E-Ticaret Çözümleri",
      description: "Online mağazanızı kuruyoruz",
      price: "₺4.000"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              Ahmet Yılmaz
            </motion.div>
            <div className="flex space-x-6">
              {['about', 'products', 'contact'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab === 'about' && 'Hakkımda'}
                  {tab === 'products' && 'Ürünler'}
                  {tab === 'contact' && 'İletişim'}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Profesyonel Web Geliştirici
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Modern web çözümleri ile işletmenizi bir sonraki seviyeye taşıyorum
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setActiveTab('contact')}
            >
              Hemen İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        {/* About Section */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Ben Kimim?
              </motion.h2>
              <motion.p 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-muted-foreground mb-6"
              >
                5 yılı aşkın süredir web geliştirme alanında profesyonel olarak çalışıyorum. 
                Modern teknolojiler ve en iyi uygulamaları kullanarak müşterilerime 
                en kaliteli çözümleri sunuyorum.
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-3"
              >
                {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.02 }}
                    className="bg-secondary rounded-lg p-4"
                  >
                    <span className="font-semibold">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img 
                src="https://placeholder-image-service.onrender.com/image/400x400?prompt=Professional%20web%20developer%20portrait%20with%20modern%20office%20background&id=c784fe7a-ee1d-41fb-8514-732318e0ec91" 
                alt="Professional web developer portrait with modern office background" 
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Products Section */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Hizmetlerim
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle>{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={`https://placeholder-image-service.onrender.com/image/300x200?prompt=${encodeURIComponent(product.title)}%20service%20visual&id=c784fe7a-ee1d-41fb-8514-732318e0ec91`}
                        alt={`Visual representation of ${product.title} service`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button onClick={() => setActiveTab('contact')}>
                        Satın Al
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12"
            >
              İletişim
            </motion.h2>
            <Card>
              <CardHeader>
                <CardTitle>Bana Ulaşın</CardTitle>
                <CardDescription>
                  Projeleriniz hakkında konuşalım
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full">
                      Gönder
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Doğrudan İletişim</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 info@ahmetyilmaz.com</p>
                <p>📞 +90 555 123 45 67</p>
                <p>📍 İstanbul, Türkiye</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-muted py-12 mt-20"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
          <p className="text-muted-foreground">
            © 2024 Ahmet Yılmaz. Tüm hakları saklıdır.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default PersonalWebsite;
