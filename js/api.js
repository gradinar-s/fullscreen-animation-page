const api = {
  _config: [
    {
      id: "01",
      title: "call house",
      description: [
        "Міжнародна телеком-компанія, яка передає вхідні та вихідні дзвінки по всьому світу.",
        "Ми працюємо з оптовим трафіком і надаємо терминацию для колл-центрів з великими обсягами коротких дзвінків.",
      ],
      link: "#",
      animImgPath: "anim-01",
      background: "#95bc00",
    },
    {
      id: "02",
      title: "Smelo",
      description: [
        "Digital-агентство з креативним досвідом понад 11-ти років і унікальним підходом до кожного завдання в різних сферах бізнесу.",
        "Працюємо і розвиваємося відразу в декількох основних напрямках, щоб надати повний пакет послуг",
      ],
      link: "#",
      animImgPath: "anim-02",
      background: "#f34e4e",
    },
    {
      id: "03",
      title: "crm service",
      description: [
        "Допомагаємо впроваджувати CRM систему в компанії клієнтів і налаштовуємо програму під індивідуальні бізнес-процеси - так, щоб ви могли просто зайти в систему і відразу почати заробляти.",
      ],
      link: "#",
      animImgPath: "anim-03",
      background: "#ffd745",
    },
    {
      id: "04",
      title: "pr strategy",
      description: [
        "Компанія «PR-strategy» надає широкий спектр послуг в сфері політтехнологій і політичного консалтингу.",
        "Ми стежимо за останніми трендами в області соціальної інженерії і політичної комунікації.",
      ],
      link: "#",
      animImgPath: "anim-04",
      background: "#008fc0",
    },
  ],

  getConfig() {
    return this._config;
  },
};

export default api;
