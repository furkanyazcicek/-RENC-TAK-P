import assert from 'node:assert/strict'
import {
  GRADE_COLLECTIONS,
  HIGH_SCHOOL_CURRICULUM,
  HIGH_SCHOOL_CURRICULUM_META,
  createGradeLibraryData,
  isGradeCollectionKey,
  topicSourceIds,
} from '../src/data/highSchoolCurriculum.js'
import { libraryPath } from '../src/lib/libraryRoutes.js'

assert.deepEqual(GRADE_COLLECTIONS.map(({ grade }) => grade), [9, 10, 11, 12])
assert.match(HIGH_SCHOOL_CURRICULUM_META.sourceUrl, /^https:\/\/tymm\.meb\.gov\.tr\//)

for (const grade of [9, 10, 11, 12]) {
  const subjects = HIGH_SCHOOL_CURRICULUM[grade]
  assert.ok(subjects.length >= 9, `${grade}. sınıfta en az 9 ders olmalı`)
  assert.equal(new Set(subjects.map(([name]) => name)).size, subjects.length)
  for (const [subject, topics] of subjects) {
    assert.ok(topics.length > 0, `${grade}. sınıf ${subject} konusuz kalmamalı`)
    assert.equal(new Set(topics).size, topics.length, `${grade}. sınıf ${subject} başlıkları tekil olmalı`)
  }
}

const remoteSubjects = [{ id: 'tyt-dkab', exam_type: 'TYT', name: 'Din Kültürü ve Ahlak Bilgisi' }]
const remoteTopics = [{ id: 'tyt-allah-insan', subject_id: 'tyt-dkab', name: 'Allah-İnsan İlişkisi' }]
const gradeData = createGradeLibraryData(remoteSubjects, remoteTopics)
const referencedTopic = gradeData.topics.find((topic) => topic.name === 'Allah-İnsan İlişkisi')

assert.ok(referencedTopic)
assert.deepEqual(topicSourceIds(referencedTopic), ['tyt-allah-insan'])
assert.equal(isGradeCollectionKey('SINIF-9'), true)
assert.equal(isGradeCollectionKey('TYT'), false)
assert.equal(libraryPath('notes', { examType: 'SINIF-9' }), '/kutuphane/notlar/sinif-9')
assert.equal(libraryPath('questions', { examType: 'SINIF-12' }), '/kutuphane/sorular/sinif-12')

console.log('Kütüphane müfredatı: 4 sınıf, rota ve içerik referansları doğrulandı.')
