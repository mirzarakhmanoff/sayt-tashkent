export type Language = "ru" | "uz"

export interface Dictionary {
  // Navigation
  nav: {
    services: string
    whyUs: string
    process: string
    portfolio: string
    contact: string
    getStarted: string
  }
  // Hero Section
  hero: {
    title: string
    titleHighlight: string
    subtitle: string
    startProject: string
    watchDemo: string
    projectsDone: string
    happyClients: string
    yearsExperience: string
  }
  // Services Section
  services: {
    title: string
    titleHighlight: string
    subtitle: string
    websiteDev: {
      title: string
      description: string
    }
    telegramBot: {
      title: string
      description: string
    }
    mobileApps: {
      title: string
      description: string
    }
  }
  // Why Choose Us Section
  whyChooseUs: {
    title: string
    titleHighlight: string
    subtitle: string
    clientSatisfaction: string
    projectsCompleted: string
    reliable: {
      title: string
      description: string
    }
    fastDelivery: {
      title: string
      description: string
    }
    expertTeam: {
      title: string
      description: string
    }
    support247: {
      title: string
      description: string
    }
  }
  // Process Section
  process: {
    title: string
    titleHighlight: string
    subtitle: string
    consultation: {
      title: string
      description: string
    }
    design: {
      title: string
      description: string
    }
    development: {
      title: string
      description: string
    }
    testing: {
      title: string
      description: string
    }
    launch: {
      title: string
      description: string
    }
  }
  // Portfolio Section
  portfolio: {
    title: string
    titleHighlight: string
    subtitle: string
    categories: {
      webDevelopment: string
      telegramBot: string
      mobileApp: string
    }
    projects: {
      ecommerce: {
        title: string
        description: string
      }
      supportBot: {
        title: string
        description: string
      }
      fitnessApp: {
        title: string
        description: string
      }
      realEstate: {
        title: string
        description: string
      }
      orderBot: {
        title: string
        description: string
      }
      foodDelivery: {
        title: string
        description: string
      }
    }
  }
  // CTA Section
  cta: {
    title: string
    subtitle: string
    startProject: string
    scheduleCall: string
  }
  // Contact Section
  contact: {
    title: string
    titleHighlight: string
    subtitle: string
    contactInfo: string
    contactDescription: string
    email: string
    phone: string
    location: string
    businessHours: string
    mondayFriday: string
    saturday: string
    sunday: string
    closed: string
    fullName: string
    emailAddress: string
    phoneNumber: string
    yourMessage: string
    sendMessage: string
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    copyright: string
  }
}

export const dictionary: Record<Language, Dictionary> = {
  ru: {
    nav: {
      services: "Услуги",
      whyUs: "Почему мы",
      process: "Процесс",
      portfolio: "Портфолио",
      contact: "Контакты",
      getStarted: "+998900555511"
    },
    hero: {
      title: "Создаём",
      titleHighlight: "сайты в Ташкенте",
      subtitle:
        "Разрабатываем современные сайты, Telegram-ботов и веб/мобильные приложения — под задачи вашего бизнеса и потребности клиентов.",
      startProject: "Начать проект",
      watchDemo: "Смотреть демо",
      projectsDone: "Проектов выполнено",
      happyClients: "Довольных клиентов",
      yearsExperience: "Лет опыта"
    },
    services: {
      title: "Наши",
      titleHighlight: "Услуги",
      subtitle: "Практичные цифровые решения, которые помогают бизнесу расти и работать проще",
      websiteDev: {
        title: "Разработка веб-сайтов",
        description:
          "Делаем адаптивные сайты, которые быстро загружаются и удобно работают на любых устройствах — от лендингов до сложных веб-сервисов."
      },
      telegramBot: {
        title: "Разработка Telegram-ботов",
        description:
          "Создаём Telegram-ботов для приёма заказов, поддержки клиентов и автоматизации рутинных задач."
      },
      mobileApps: {
        title: "Веб и мобильные приложения",
        description:
          "Разрабатываем кроссплатформенные приложения с понятным интерфейсом и стабильной работой на современных технологиях."
      }
    },
    whyChooseUs: {
      title: "Почему выбирают",
      titleHighlight: "Sayt-Tashkent.uz",
      subtitle:
        "Вникаем в вашу задачу и предлагаем решение, которое действительно подходит бизнесу. Работаем прозрачно, аккуратно и доводим проект до результата.",
      clientSatisfaction: "Удовлетворённость клиентов",
      projectsCompleted: "Проектов завершено",
      reliable: {
        title: "Надёжно и безопасно",
        description: "Стабильная работа, защита данных и аккуратная техническая реализация."
      },
      fastDelivery: {
        title: "Быстрые сроки",
        description: "Держим сроки и не жертвуем качеством ради скорости."
      },
      expertTeam: {
        title: "Команда экспертов",
        description: "Разработчики с опытом, которые следят за современными технологиями и лучшими практиками."
      },
      support247: {
        title: "Поддержка 24/7",
        description: "Остаёмся на связи и помогаем даже после запуска проекта."
      }
    },
    process: {
      title: "Наш",
      titleHighlight: "Процесс",
      subtitle: "Понятный и проверенный подход — чтобы проект шёл ровно и без сюрпризов",
      consultation: {
        title: "Консультация",
        description: "Обсуждаем цели, задачи и детали, чтобы точно понять, что вам нужно."
      },
      design: {
        title: "Дизайн",
        description: "Готовим аккуратный и удобный дизайн, который поддерживает ваш бренд."
      },
      development: {
        title: "Разработка",
        description:
          "Собираем надёжное и масштабируемое решение на современных технологиях."
      },
      testing: {
        title: "Тестирование",
        description: "Проверяем всё по шагам, чтобы продукт работал стабильно и без ошибок."
      },
      launch: {
        title: "Запуск",
        description: "Разворачиваем проект и остаёмся рядом — с поддержкой и дальнейшим развитием."
      }
    },
    portfolio: {
      title: "Наше",
      titleHighlight: "Портфолио",
      subtitle:
        "Посмотрите наши последние работы и оцените, как мы помогали бизнесу решать задачи",
      categories: {
        webDevelopment: "Веб-разработка",
        telegramBot: "Telegram-бот",
        mobileApp: "Мобильное приложение"
      },
      projects: {
        ecommerce: {
          title: "Платформа электронной коммерции",
          description: "Интернет-магазин с удобной фильтрацией и безопасной оплатой"
        },
        supportBot: {
          title: "Бот поддержки клиентов",
          description: "Telegram-бот, который ускоряет ответы на обращения и разгружает поддержку"
        },
        fitnessApp: {
          title: "Фитнес-приложение",
          description: "Мобильное приложение для тренировок и отслеживания прогресса"
        },
        realEstate: {
          title: "Портал недвижимости",
          description: "Платформа объявлений с расширенным поиском и виртуальными турами"
        },
        orderBot: {
          title: "Бот для управления заказами",
          description: "Система обработки заказов с интеграцией учёта и склада"
        },
        foodDelivery: {
          title: "Приложение доставки еды",
          description: "Сервис, который объединяет рестораны и клиентов в одном приложении"
        }
      }
    },
    cta: {
      title: "Готовы усилить своё цифровое присутствие?",
      subtitle:
        "Напишите нам — обсудим задачу, подскажем лучший вариант и приступим к работе. Первая консультация бесплатная.",
      startProject: "Начать проект",
      scheduleCall: "Назначить звонок"
    },
    contact: {
      title: "Связаться с",
      titleHighlight: "Нами",
      subtitle: "Есть проект или вопрос? Напишите нам — ответим как можно быстрее.",
      contactInfo: "Контактная информация",
      contactDescription:
        "Выберите удобный способ связи — поможем разобраться и предложим подходящее решение.",
      email: "Электронная почта",
      phone: "Телефон",
      location: "Адрес",
      businessHours: "Часы работы",
      mondayFriday: "Понедельник — Пятница",
      saturday: "Суббота",
      sunday: "Воскресенье",
      closed: "Выходной",
      fullName: "Имя и фамилия",
      emailAddress: "Электронная почта",
      phoneNumber: "Номер телефона",
      yourMessage: "Сообщение",
      sendMessage: "Отправить"
    },
    footer: {
      description:
        "Веб-разработка в Ташкенте: сайты, Telegram-боты и приложения для бизнеса.",
      quickLinks: "Быстрые ссылки",
      services: "Услуги",
      contact: "Контакты",
      copyright: "Sayt-Tashkent.uz. Все права защищены."
    }
  },

  uz: {
    nav: {
      services: "Xizmatlar",
      whyUs: "Nega biz",
      process: "Jarayon",
      portfolio: "Portfolio",
      contact: "Aloqa",
      getStarted: "+998900555511"
    },
    hero: {
      title: "Biz bilan",
      titleHighlight: "biznesingizni avtomatlashtiring",
      subtitle:
        "Biz biznesingiz va mijozlaringiz ehtiyojiga mos zamonaviy saytlar, Telegram-botlar hamda veb/mobil ilovalar ishlab chiqamiz.",
      startProject: "Loyihani boshlash",
      watchDemo: "Demoni ko‘rish",
      projectsDone: "Bajarilgan loyihalar",
      happyClients: "Mamnun mijozlar",
      yearsExperience: "Yillik tajriba"
    },
    services: {
      title: "Bizning",
      titleHighlight: "Xizmatlar",
      subtitle: "Biznesingizga foyda beradigan sodda, ishonchli va samarali raqamli yechimlar",
      websiteDev: {
        title: "Veb-sayt ishlab chiqish",
        description:
          "Telefon va kompyuterda birdek qulay ishlaydigan, tez va zamonaviy saytlar yaratamiz — lendingdan tortib murakkab servislargacha."
      },
      telegramBot: {
        title: "Telegram-botlar ishlab chiqish",
        description:
          "Buyurtma qabul qilish, mijozlar bilan muloqot va kundalik ishlarni avtomatlashtirish uchun Telegram-botlar yaratamiz."
      },
      mobileApps: {
        title: "Veb va mobil ilovalar",
        description:
          "Kross-platforma ilovalar: qulay interfeys, barqaror ishlash va zamonaviy texnologiyalar asosida."
      }
    },
    whyChooseUs: {
      title: "Nega",
      titleHighlight: "bizni tanlashadi",
      subtitle:
        "Avvalo vazifani chuqur tushunib olamiz, so‘ng aynan sizga mos yechimni taklif qilamiz. Ishni tartibli, shaffof va natijaga yo‘naltirib bajarishga intilamiz.",
      clientSatisfaction: "Mijozlar qoniqishi",
      projectsCompleted: "Tugallangan loyihalar",
      reliable: {
        title: "Ishonchli va xavfsiz",
        description: "Barqaror ishlash, ma’lumotlar xavfsizligi va puxta texnik yechim."
      },
      fastDelivery: {
        title: "Tez va aniq",
        description: "Muddatlarga qat’iy amal qilamiz, sifat esa doimo birinchi o‘rinda."
      },
      expertTeam: {
        title: "Tajribali jamoa",
        description: "Amaliy loyihalarda pishgan, zamonaviy texnologiyalarni yaxshi biladigan dasturchilar."
      },
      support247: {
        title: "Doimiy qo‘llab-quvvatlash",
        description: "Loyiha ishga tushgandan keyin ham aloqada bo‘lamiz va yordam beramiz."
      }
    },
    process: {
      title: "Bizning",
      titleHighlight: "Jarayon",
      subtitle: "Tushunarli va sinovdan o‘tgan jarayon — loyiha muammosiz yurishi uchun",
      consultation: {
        title: "Maslahat",
        description:
          "Maqsad, talab va detallarni muhokama qilib, yo‘nalishni aniq belgilab olamiz."
      },
      design: {
        title: "Dizayn",
        description: "Brendingizga mos, chiroyli va qulay dizayn tayyorlaymiz."
      },
      development: {
        title: "Ishlab chiqish",
        description:
          "Zamonaviy texnologiyalar asosida mustahkam va kengaytiriladigan yechim yaratamiz."
      },
      testing: {
        title: "Sinov",
        description: "Hammasi mukammal ishlashi uchun bosqichma-bosqich tekshirib chiqamiz."
      },
      launch: {
        title: "Ishga tushirish",
        description: "Loyihani joylaymiz va keyingi qo‘llab-quvvatlashda ham yoningizda bo‘lamiz."
      }
    },
    portfolio: {
      title: "Bizning",
      titleHighlight: "Portfolio",
      subtitle:
        "So‘nggi ishlarimizni ko‘ring va bizneslarga qanday yordam berganimiz bilan tanishing",
      categories: {
        webDevelopment: "Veb-ishlab chiqish",
        telegramBot: "Telegram-bot",
        mobileApp: "Mobil ilova"
      },
      projects: {
        ecommerce: {
          title: "Elektron tijorat platformasi",
          description: "Qulay filtrlash va xavfsiz to‘lovga ega zamonaviy internet-do‘kon"
        },
        supportBot: {
          title: "Qo‘llab-quvvatlash boti",
          description: "Mijozlar murojaatlariga tezkor javob berishni yengillashtiradigan Telegram-bot"
        },
        fitnessApp: {
          title: "Fitnes kuzatuv ilovasi",
          description: "Mashg‘ulotlarni kuzatish va natijani tahlil qilish uchun mobil ilova"
        },
        realEstate: {
          title: "Ko‘chmas mulk portali",
          description: "Kuchli qidiruv va virtual turlarga ega e’lonlar platformasi"
        },
        orderBot: {
          title: "Buyurtma boshqaruvi boti",
          description: "Buyurtmalarni tartibli qabul qilish va hisobga olishni soddalashtiradigan tizim"
        },
        foodDelivery: {
          title: "Ovqat yetkazib berish ilovasi",
          description: "Restoran va mijozni bitta tizimda bog‘laydigan qulay servis"
        }
      }
    },
    cta: {
      title: "Biznesingizni kuchaytirishga tayyormisiz?",
      subtitle:
        "Bizga yozing — vazifani muhokama qilamiz, eng to‘g‘ri yechimni tavsiya qilamiz. Birinchi maslahat bepul.",
      startProject: "Loyihani boshlash",
      scheduleCall: "Qo‘ng‘iroqni belgilash"
    },
    contact: {
      title: "Biz bilan",
      titleHighlight: "bog‘laning",
      subtitle:
        "Loyihangiz bormi yoki savolingiz bormi? Bizga yozing — imkon qadar tez javob beramiz.",
      contactInfo: "Aloqa ma’lumotlari",
      contactDescription:
        "Sizga qulay usulni tanlang — biz yordam beramiz va mos yechimni taklif qilamiz.",
      email: "Elektron pochta",
      phone: "Telefon",
      location: "Manzil",
      businessHours: "Ish vaqti",
      mondayFriday: "Dushanba — Juma",
      saturday: "Shanba",
      sunday: "Yakshanba",
      closed: "Dam olish",
      fullName: "To‘liq ism",
      emailAddress: "Elektron pochta",
      phoneNumber: "Telefon raqami",
      yourMessage: "Xabaringiz",
      sendMessage: "Yuborish"
    },
    footer: {
      description:
        "Toshkentda veb-ishlab chiqish: saytlar, Telegram-botlar va biznes uchun ilovalar.",
      quickLinks: "Tezkor havolalar",
      services: "Xizmatlar",
      contact: "Aloqa",
      copyright: "Sayt-Tashkent.uz. Barcha huquqlar himoyalangan."
    }
  }
};

