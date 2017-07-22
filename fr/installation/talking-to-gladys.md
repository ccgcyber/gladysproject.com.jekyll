---
title: Parler à Gladys
layout: documentation
lang: fr
---

## Parler à Gladys

Pour parler à Gladys, deux moyens : Par la voix ou par message. Pour parler à Gladys par la voix, j'avais écris un tutoriel [sur le blog](/blog/2016/10/25/voice-recognition-gladys.html), pour parler à Gladys par message, c'est possible sur le dashboard Gladys, ou via [l'application Telegram](https://developer.gladysproject.com/fr/modules/telegram).

### Le fonctionnement interne

Derrière tout ça, Gladys fonctionne grâce au machine learning. Un modèle a été entrainé grâce à une base de donnée de phrases fournie par la communauté, et est capable de classifier les phrases que l'utilisateur soumet à Gladys.

Le fonctionnement est expliqué ici : [Comment Gladys 3.5 répond à vos messages grâce au machine learning](/blog/2017/04/09/gladys-3-5-machine-learning.html)

La base de donnéee de phrases est sur GitHub : 
- [Base de donnée Français](https://github.com/GladysProject/gladys-data/blob/master/sentences/v2/fr.json)
- [Base de donnée Anglais](https://github.com/GladysProject/gladys-data/blob/master/sentences/v2/en.json)
