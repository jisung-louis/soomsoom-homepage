import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FeatureCard } from "./components/FeatureCard";
import { Button } from "./components/ui/button";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// 이미지 import 임시 제거 - 디버깅용
// import bannerImage from "figma:asset/d2f61896b718348005e1d4b3e3243b2a1d6e265d.png";
// import characterCustomImage from "figma:asset/e49538dd5a672738ef341b2f7d8f913aa08802c8.png";
// import emotionDiaryImage from "figma:asset/40b81f2597028801acc02c4333a8a90727be89c6.png";
// import meditationImage from "figma:asset/a5155ec50b3a62089540a1190529543ecbabd2fa.png";
// import morningAlarmImage from "figma:asset/9707f3d77d6fb4e92156fcaa5316a2a3fc882cf9.png";
// import screenshot1 from "figma:asset/256a9d95b55ddc89c91dc3406da9cf22738dc6fb.png";
// import screenshot2 from "figma:asset/3f7ad5e8269443c6fc929828c88aaace0bd4543a.png";
// import screenshot3 from "figma:asset/86ef2af0ad721199a84553ab85e3d9af54246a4d.png";
// import screenshot4 from "figma:asset/d440ec3b8af62bd6329ed4abc664f7c287362c6d.png";
// import screenshot5 from "figma:asset/bb40a1d8a22571e37ba5111b367fb0ded87b241e.png";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl">숨숨</span>
            </div>
          </div>
          
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl">
            오늘 당신의 한숨을,<br />내일의 나를 안아줄 따뜻한 숨결로.
          </h1>
          
          <p className="text-purple-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            마음속 고양이, '야웅이'와 함께 나를 돌보는 시간을 가져보세요.<br />
            '야웅이'와 함께 감정을 다루는 건강한 방법을 배워봐요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 px-8 py-6 transition-none">
              시작하기
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 text-3xl md:text-4xl">주요 기능</h2>
            <p className="text-purple-300 text-lg">
              나를 돌보는 여정에 필요한 모든 것
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a1a2e] border-purple-600/30 p-6 hover:bg-[#252540] transition-all hover:scale-105 rounded-lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl">🐱</span>
                </div>
                <h3 className="text-white">캐릭터 커스터마이징</h3>
                <p className="text-purple-200">야웅이를 꾸미고 성장시키며 재미있게 마음을 돌봐요</p>
              </div>
            </div>
            
            <div className="bg-[#1a1a2e] border-purple-600/30 p-6 hover:bg-[#252540] transition-all hover:scale-105 rounded-lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <h3 className="text-white">매일 감정 일기</h3>
                <p className="text-purple-200">오늘 하루의 감정을 기록하고 나를 이해하는 시간</p>
              </div>
            </div>
            
            <div className="bg-[#1a1a2e] border-purple-600/30 p-6 hover:bg-[#252540] transition-all hover:scale-105 rounded-lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl">🧘</span>
                </div>
                <h3 className="text-white">명상 (불교)</h3>
                <p className="text-purple-200">불교의 명상 수행법으로 마음의 평화를 찾아요</p>
              </div>
            </div>
            
            <div className="bg-[#1a1a2e] border-purple-600/30 p-6 hover:bg-[#252540] transition-all hover:scale-105 rounded-lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h3 className="text-white">모닝 알람</h3>
                <p className="text-purple-200">따뜻한 알람으로 하루를 마음챙김과 함께 시작해요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 text-3xl md:text-4xl">앱 미리보기</h2>
            <p className="text-purple-300 text-lg">
              숨숨과 함께하는 마음 돌봄 여정
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-64 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl">💨</span>
              </div>
              <p className="text-purple-200 text-center text-sm px-2">5분 짧은 호흡운동!<br />스트레스를 줄여요!</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-64 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl">🧘‍♀️</span>
              </div>
              <p className="text-purple-200 text-center text-sm px-2">불교명상을 통해<br />마음에 가벼움을 느껴요!</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-64 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl">🌅</span>
              </div>
              <p className="text-purple-200 text-center text-sm px-2">상쾌한 아침을 위해<br />숨숨이 도와드릴게요!</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-64 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <p className="text-purple-200 text-center text-sm px-2">마음운동 할 수록 하트가 쌓여요!<br />야웅이를 꾸며보아요!</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-64 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <p className="text-purple-200 text-center text-sm px-2">감정을 기록하고! 감정을 다루고!<br />마음운동을 시작해보세요!</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#000016] flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <div className="py-20 px-4">
              <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-white text-4xl mb-4">Routes 테스트</h1>
                <p className="text-white text-xl">이 텍스트가 보이면 Routes가 정상 작동합니다!</p>
                <div className="mt-8">
                  <a href="/terms" className="text-purple-300 hover:text-white mr-4">이용약관</a>
                  <a href="/privacy" className="text-purple-300 hover:text-white">개인정보처리방침</a>
                </div>
              </div>
            </div>
          } />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
