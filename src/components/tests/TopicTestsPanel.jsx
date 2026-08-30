import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Panel } from '../dashboard'
import { FileStack, Play } from 'lucide-react'
import { Badge } from '../ui'
import canlilarinOrtakOzellikleri from '../../content/tests/biyoloji/canlilarin-ortak-ozellikleri'

const MOCK_DB = {
  'canlilarin-ortak-ozellikleri': canlilarinOrtakOzellikleri,
  'Canlıların Ortak Özellikleri': canlilarinOrtakOzellikleri,
}

export default function TopicTestsPanel({ topicName }) {
  const navigate = useNavigate()
  
  // Topic name eşleşiyorsa test listesini alıyoruz
  const testData = MOCK_DB[topicName]
  if (!testData) return null
  
  const { topicSlug, tests } = testData

  return (
    <div className="mt-12">
      <Panel title="Kavrama ve Ustalık Testleri" description="Konuyu pekiştirmek için aşamalı testler" icon={FileStack} padding={false}>
        <div className="divide-y divide-line">
          {tests.map((test) => {
            const isMastery = test.type === 'mastery'
            return (
              <div key={test.id} className="flex items-center justify-between p-4 hover:bg-surface-muted transition-colors">
                <div>
                  <div className="font-semibold text-foreground flex items-center gap-2">
                    {test.title}
                    {isMastery && <Badge tone="warning" size="sm">Zor</Badge>}
                  </div>
                  <div className="text-sm text-muted mt-1">{test.description}</div>
                </div>
                <button
                  onClick={() => navigate(`/kutuphane/sorular/test/${topicSlug}/${test.id}`)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            )
          })}
        </div>
      </Panel>
    </div>
  )
}
