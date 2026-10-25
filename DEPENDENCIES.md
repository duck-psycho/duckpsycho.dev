# Заметки по зависимостям

По состоянию на 25 октября 2026 года.

```sh
npm ci
npm run build
npm audit
```

TypeScript обновлён до `6.0.3`: последняя версия `@astrojs/check@0.9.12`
поддерживает TypeScript 5 и 6. Переход на TypeScript 7 требует поддержки
со стороны `@astrojs/check`.

В `package.json` задан `override` для `postcss-selector-parser`: версия
`@tailwindcss/typography@0.5.20` закрепляет уязвимую версию `6.0.10`.
Исправление [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)
доступно начиная с `7.1.6`. Удалять `override` можно после обновления зависимости
в самом плагине и повторной проверки `npm audit`.
