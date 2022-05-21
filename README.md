## Стартовый шаблон для генерации статичных страниц

Данный шаблон используется для создания статических страниц - лендингов, блогов и тп

За основу взят фреймворк gatsby - https://www.gatsbyjs.com/

**Поддрежка инструментов:**
- Axios
- Redux
- Reselect
- Typescript
- Eslint
- Husky
- Lint-staged
- Prettier
- Scss
- Stylelint
- Svg2sprite-cli - генерация svg спрайтов
- Gatsby-preload-fonts - оптимизация шрифтов
- @ianvs/prettier-plugin-sort-imports - автоматическая сортировка импортов с помощью prettier

**Поддрежка плагинов:**
- Модальные окна - https://github.com/seungdeng17/react-simple-modal-provider#api

**Файловая система**

```
├── .husky/                             # Папка с файлами для корректной работы Husky
├── public/                             # Папка с билдом проекта (генерируется автоматически)
├── .editorconfig                       # Конфигурационный файл для IDE
├── .eslintignore                       # Конфигурационный файл для исключения проверки кода Eslint
├── .eslintrc.json                      # Конфигурационный файл с набором правил проверки кода Eslint
├── .gitignore                          # Конфигурационный файл для игнорирования файлов добавления их в git
├── .prettierignore                     # Конфигурационный файл для игнорирования форматирования кода с помощью Prettier
├── .prettierrc                         # Конфигурационный файл для правил форматирования кода с помощью Prettier
├── .stylelintrc                        # Конфигурационный файл для правил проверки кода стилей помощью Stylelint
├── font-preload-cache.json             # Конфигурационный файл для правил оптимизации шрифтов (Гененрируется после команды - preload-fonts)
├── gatsby-browser.ts                   # https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
├── gatsby-node.ts                      # https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
├── gatsby-ssr.ts                       # https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
├── package.json                        # Набор команд и фиксация зависимостей проекта
├── package-lock.json                   # Фиксация зависимостей проекта
├── README.md                           # Описание
├── tsconfig.json                       # Конфигурационный файл для Typescript
├── wrap-with-provider.tsx              # Конфигурационный файл для подключения Redux
└── src/                                # Основная папка
    └── assets/                         # Папка для статики
        ├── fonts/                      # Папка со шрифтами
        ├── icons/                      # Папка c svg иконками, с которых будет сгенерирован svg спрайт командой - generate:svg-sprite
        ├── img/                        # Папка со статичными картинками (svg, jpeg, png и тп)
        └── sprites/                    # Папка с сгенерированным svg спрайтом
            └── _sprite.svg             # Файл сгенерированного svg спрайта
        └── styles/                     # Папка с глобальными стилями
            ├── gatsby-normalize.scss   # Файл нормализующий стили для корректного отображения лейаута - PageLayout
            ├── global.scss             # Файл с глобальными стилями задающий правила для корневых тегов и svg иконок являющиеся спрайтами
            ├── index.scss              # Подключение стилей
            ├── mixins.scss             # Миксины для стилей
            ├── typography.scss         # Правила для шрифтов
            └── variables.scss          # Переменные для цветов
    └── components                      # Папка для всех компонентов
        ├── containers/                 # Папка для всех компонентов которые содержат не реиспользуемую логику, либо логически законченую логику
        ├── layouts/                    # Папка для компонентов являющиеся лэйаутами
        └── shared/                     # Папка для компонентов которые используются во многих местах в том числе и на разных страницах
    └── hooks/                          # Папка для хуков
    └── pages/                          # Папка для страниц
    └── services/                       # Папка для работы с api бекенда
        └── api/                        # Папка с конфигурацией axios
    └── store/                          # Папка с работой с состоянием приложения - Redux
    └── types/                          # Папка с глобальными типами Typescript
    └── main.ts                         # Файл с точкой входа для ts файлов (используется для запуска глобальных функций и тп)
```

**Сценарии использования:**

Запуск проекта в режима разработки
```shell
npm run develop
```

Создания билда для доставки на хостинг
```shell
npm run build
```

Оптимизация шрифтов (работает только в связке с запущеным режимом разработки)
```shell
npm run preload-fonts
```

Генерация svg спрайта из папки src/assets/icons/
```shell
npm run generate:svg-sprite
```

Линтинг ts кода
```shell
npm run lint
```

Линтинг scss кода
```shell
npm run lint:style
```

Автоматическое форматирование кода с помощью Prettier
```shell
npm run prettier
```
