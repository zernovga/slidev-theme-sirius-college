---
theme: ./
---

# Сириус Колледж

Шаблон Slidev для презентаций

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)
https://siriusuniversity.ru/local/templates/main/img/header_logo.svg

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-left
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pulvinar risus. Nulla sem erat, auctor ac augue id, hendrerit rutrum mauris. Cras accumsan rhoncus ante sit amet vehicula. Praesent feugiat lacus vel odio molestie, ultrices placerat urna sagittis. Maecenas rhoncus lorem et risus iaculis, nec congue risus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec egestas nibh ac nulla laoreet interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

::image::
![alt text](https://siriusuniversity.ru/local/templates/main/img/header_logo.svg)

---
layout: code
---

# Code

Use code snippets and get the highlighting <span v-mark.underline.orange>directly!</span>

````md magic-move
```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}
```

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```
````

---
layout: fact
---

# The End

some

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---

# Charts

<v-plotly :data="[{ x: [1, 3], y: [2, 4] }]" :layout="{}" :options="{displaylogo: False}"/>
