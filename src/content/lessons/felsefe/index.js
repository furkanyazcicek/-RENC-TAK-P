import { buildPhilosophyLesson } from './buildLesson.js'
import { PHILOSOPHY_TOPICS } from './topics.js'
const ORDER = ['Felsefenin Konusu','Felsefi Düşüncenin Özellikleri','Bilgi Felsefesi','Varlık Felsefesi','Ahlak Felsefesi','Sanat Felsefesi','Din Felsefesi','Siyaset Felsefesi','Bilim Felsefesi','Felsefi Akımlar','Temel Filozof-Görüş İlişkileri']
export const philosophyLessons = ORDER.map((topic, index) => buildPhilosophyLesson(PHILOSOPHY_TOPICS.find((item) => item.topic === topic), index + 1))
