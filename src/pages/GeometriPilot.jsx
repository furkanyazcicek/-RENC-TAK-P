import React, { useState } from 'react';
import { Card, Button } from '../components/ui';

const questions = [
  {
    id: 1,
    topic: 'Katlama ve İkizkenar Üçgen',
    text: 'Şekildeki ABC üçgeni biçimindeki kâğıt, [AD] boyunca katlandığında B köşesi C köşesinin üzerine gelmektedir. Buna göre aşağıdakilerden hangileri kesinlikle doğrudur?\n\nI. |AB| = |AC|\nII. [AD] açıortaydır.\nIII. Alan(ABD) = Alan(ADC)',
    image: '/geometri-pilot/triangle_fold.jpg',
    options: ['Yalnız I', 'I ve II', 'II ve III', 'I ve III', 'I, II ve III'],
    answer: 4, // 0-indexed, so 4 is E (I, II ve III)
    solution: 'Kâğıt [AD] boyunca katlandığında B köşesi C köşesiyle çakışıyorsa, bu üçgen [AD] doğrusuna göre simetriktir. Dolayısıyla ABC ikizkenar üçgendir (|AB|=|AC|), [AD] hem yükseklik hem kenarortay hem de açıortaydır. Alanları eşittir. Üç öncül de kesinlikle doğrudur.'
  },
  {
    id: 2,
    topic: 'Dik Üçgen ve Pisagor Teoremi',
    text: 'Düz bir zeminde duvara dayalı duran bir merdiven görülmektedir. Merdivenin duvara değdiği noktanın yerden yüksekliği 4 metre, merdivenin ayağının duvara olan yatay uzaklığı ise 3 metredir. Buna göre merdivenin boyu kaç metredir?',
    image: '/geometri-pilot/ladder_triangle.jpg',
    options: ['3', '4', '5', '6', '7'],
    answer: 2, // 5
    solution: 'Duvar ve zemin birbirine dik (90°) kabul edilir. Oluşan dik üçgende kenarlar 3 m ve 4 m dir. Pisagor teoremine göre merdivenin boyu (hipotenüs) 3-4-5 üçgeninden dolayı 5 metre bulunur.'
  },
  {
    id: 3,
    topic: 'Üçgenlerde Benzerlik',
    text: 'Güneşli bir günde, boyu 1.8 metre olan Ali\'nin gölgesinin uzunluğu 2.4 metre olarak ölçülmüştür. Aynı anda, Ali\'nin hemen yanındaki bir ağacın gölge uzunluğu 12 metre olarak ölçüldüğüne göre ağacın boyu kaç metredir?',
    image: '/geometri-pilot/shadow_similarity.jpg',
    options: ['6', '8', '9', '10', '12'],
    answer: 2, // 9
    solution: 'Aynı anda güneş ışınları aynı açıyla geleceği için oluşan dik üçgenler benzerdir. Ali\'nin boyu / Ali\'nin gölgesi = Ağacın boyu / Ağacın gölgesi. (1.8 / 2.4) = (x / 12) => 3/4 = x/12 => 4x = 36 => x = 9 metre.'
  },
  {
    id: 4,
    topic: 'Üçgende Açılar',
    text: 'Bir ikizkenar üçgenin tepe açısı 40° olarak verilmiştir. Buna göre bu üçgenin taban açılarından birinin ölçüsü kaç derecedir?',
    image: null,
    svg: (
      <svg viewBox="0 0 200 150" className="w-full max-w-xs mx-auto mb-4 border border-slate-200 rounded-lg p-2 bg-slate-50">
        <polygon points="100,20 40,130 160,130" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800" />
        <text x="92" y="45" className="text-sm font-medium fill-slate-700">40°</text>
        <path d="M 90 40 Q 100 50 110 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
        <text x="50" y="125" className="text-sm font-medium fill-slate-700">α</text>
        <path d="M 55 130 A 15 15 0 0 0 62 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
        <text x="140" y="125" className="text-sm font-medium fill-slate-700">α</text>
        <path d="M 145 130 A 15 15 0 0 1 138 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
      </svg>
    ),
    options: ['40', '50', '60', '70', '80'],
    answer: 3, // 70
    solution: 'Üçgenin iç açıları toplamı 180°\'dir. İkizkenar üçgende taban açıları eşittir. 180° - 40° = 140°. Taban açılarından her biri 140° / 2 = 70° olur.'
  }
];

export default function GeometriPilot() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    if (showResults) return;
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) correct++;
    });
    return correct;
  };

  const q = questions[currentQuestion];
  const hasAnsweredCurrent = selectedOptions[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Geometri Pilot Testi</h1>
          <p className="mt-2 text-slate-600 text-lg">TYT Formatında Üçgenler Kazanım Değerlendirmesi</p>
        </div>

        <Card className="p-6 md:p-8 shadow-lg rounded-2xl bg-white border border-slate-100">
          {!showResults ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Soru {currentQuestion + 1} / {questions.length}</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">{q.topic}</span>
              </div>

              <div className="mb-6 text-slate-800 text-lg font-medium leading-relaxed whitespace-pre-wrap">
                {q.text}
              </div>

              {q.image && (
                <div className="mb-8 flex justify-center">
                  <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img src={q.image} alt={q.topic} className="w-full h-auto object-contain mix-blend-multiply" style={{ maxHeight: '300px' }} />
                  </div>
                </div>
              )}
              
              {q.svg && q.svg}

              <div className="space-y-3 mb-8">
                {q.options.map((opt, idx) => {
                  const isSelected = selectedOptions[currentQuestion] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                          : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="inline-block w-8 font-bold">{String.fromCharCode(65 + idx)})</span> {opt}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <Button 
                  onClick={handlePrev} 
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="px-6"
                >
                  Geri
                </Button>
                
                {currentQuestion === questions.length - 1 ? (
                  <Button 
                    onClick={() => setShowResults(true)} 
                    disabled={Object.keys(selectedOptions).length < questions.length}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                  >
                    Testi Bitir
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNext}
                    disabled={!hasAnsweredCurrent}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8"
                  >
                    İleri
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="py-8">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50 mb-4">
                  <span className="text-4xl font-bold text-indigo-600">{calculateScore()} / {questions.length}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Test Tamamlandı!</h2>
                <p className="text-slate-500 mt-2">İşte sonuçların ve detaylı çözümler.</p>
              </div>

              <div className="space-y-8">
                {questions.map((q, idx) => {
                  const userAnswer = selectedOptions[idx];
                  const isCorrect = userAnswer === q.answer;
                  
                  return (
                    <div key={idx} className={`p-6 rounded-2xl border-2 ${isCorrect ? 'border-emerald-100 bg-emerald-50/30' : 'border-rose-100 bg-rose-50/30'}`}>
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-2">{q.topic}</h3>
                          <p className="text-slate-700 mb-4 whitespace-pre-wrap text-sm">{q.text}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-medium">
                            <div className={`p-3 rounded-lg ${isCorrect ? 'bg-emerald-100/50 text-emerald-800' : 'bg-rose-100/50 text-rose-800'}`}>
                              Senin Cevabın: {String.fromCharCode(65 + userAnswer)}) {q.options[userAnswer]}
                            </div>
                            {!isCorrect && (
                              <div className="p-3 rounded-lg bg-emerald-100/50 text-emerald-800">
                                Doğru Cevap: {String.fromCharCode(65 + q.answer)}) {q.options[q.answer]}
                              </div>
                            )}
                          </div>
                          
                          <div className="p-4 rounded-xl bg-white border border-slate-200 text-sm">
                            <strong className="text-indigo-600 block mb-1">Çözüm:</strong>
                            <span className="text-slate-600 leading-relaxed">{q.solution}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10 text-center">
                <Button 
                  onClick={() => {
                    setSelectedOptions({});
                    setCurrentQuestion(0);
                    setShowResults(false);
                  }}
                  variant="outline"
                  className="px-8"
                >
                  Testi Tekrar Çöz
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
