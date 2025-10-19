import React from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000016] py-8">
      {/* Header */}
      <div className="bg-[#000016] border-b border-purple-700/30 py-4 px-4">
        <div className="container mx-auto max-w-4xl flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-purple-300 hover:text-white hover:bg-purple-800/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            뒤로가기
          </Button>
          <h1 className="text-white text-xl font-semibold">개인정보 처리방침</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="bg-gradient-to-br from-[#0a0a1a] via-[#0f0f1f] to-[#0a0a1a] rounded-3xl border border-purple-700/40 shadow-2xl shadow-purple-900/20 p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-white text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              숨숨 개인정보처리방침
            </h2>
            <p className="text-purple-300 text-lg">개인정보 보호 및 처리에 관한 방침입니다</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-purple-200 space-y-8">
              <section>
                <p className="mb-4">
                  숨숨 운영자(이하"운영자")는 숨숨(SoomSoom) 서비스를 제공함에 있어 정보주체의 자유와 권리 보호를 위해 개인정보 보호법 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
                </p>
                <p className="mb-4">
                  이에 개인정보 보호법 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립, 공개합니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  개인정보 수집 및 이용 목적
                </h3>
                <p className="mb-4">
                  운영자는 회원가입 및 원활한 서비스 제공에 따른 개인정보를 어플리케이션 및 웹페이지를 통해 수집하고 있으며 설문조사나 이벤트 시에 집단적인 통계 분석을 위해서나 경품을 발송을 위한 목적으로도 개인정보 기재를 요청할 수 있습니다.
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-purple-600/30">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-900/40 to-pink-900/40">
                        <th className="border-r border-purple-600/30 p-4 text-left font-semibold text-purple-200">정보</th>
                        <th className="border-r border-purple-600/30 p-4 text-left font-semibold text-purple-200">구분</th>
                        <th className="p-4 text-left font-semibold text-purple-200">수집항목</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-purple-600/20 hover:bg-purple-900/10 transition-colors">
                        <td className="border-r border-purple-600/30 p-4 font-medium text-purple-100">사용자 정보</td>
                        <td className="border-r border-purple-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">필수</span>
                        </td>
                        <td className="p-4 text-purple-200">이름(닉네임),이메일</td>
                      </tr>
                      <tr className="border-b border-purple-600/20 hover:bg-purple-900/10 transition-colors">
                        <td className="border-r border-purple-600/30 p-4 font-medium text-purple-100">기기정보</td>
                        <td className="border-r border-purple-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">필수</span>
                        </td>
                        <td className="p-4 text-purple-200">기기 식별자, 운영체제, 하드웨어 버전, 기기설정, 전화번호<br/>국가 정보, 암호화된 동일인 식별정보(CI), 중복가입확인 정보(DI)</td>
                      </tr>
                      <tr className="border-b border-purple-600/20 hover:bg-purple-900/10 transition-colors">
                        <td className="border-r border-purple-600/30 p-4 font-medium text-purple-100">로그정보</td>
                        <td className="border-r border-purple-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">필수</span>
                        </td>
                        <td className="p-4 text-purple-200">서비스 이용 기록, IP 주소, 접속 로그, 쿠키정보, 모바일 기기정보, 방문/결제 기록, 불량 이용 기록, 광고식별자</td>
                      </tr>
                      <tr className="hover:bg-purple-900/10 transition-colors">
                        <td className="border-r border-purple-600/30 p-4 font-medium text-purple-100">광고 식별자(ADID)</td>
                        <td className="border-r border-purple-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">필수</span>
                        </td>
                        <td className="p-4 text-purple-200">Android 기기 Google Advertising(GAID)<br/>Ios 기기의 광고주 식별자(IDFA)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 mb-2">
                  운영자가 처리하는 개인정보는 다음의 목적 이외에 용도로는 사용되지 않으며, 목적이 변경될 시에는 회원에게 사전 동의를 구할 예정입니다.
                </p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>서비스 이용에 따른 본인 확인, 불량 회원의 부정이용 방지, 비인가 사용 방지, 가입 의사 확인, 연령 확인, 만 14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 가입및 가입제한, 등 회원 관리를 위해 개인정보를 이용합니다.</li>
                  <li>회원이 요구하는 서비스 제공에 관한 계약 이행, 불만/오류사항 처리, 요금 정산 등을 위해 사용합니다.</li>
                  <li>기존 서비스의 개선 혹은 신규 서비스 개발, 맞춤형 콘텐츠 및 친구 천 기능 개발등에 활용합니다.</li>
                  <li>상용자의 개인 정보를 공유하여 운영자의 서비스 사용 모니터링 및 분석하고, 운영사의 서비스를 지원 및 유지하도록 지원하기 우해 사용자에게 광고를 보여주고, 사용자가 운영사의 서비스를 방문한 후 제3자 웹사이트에 광고하고, 결제 처리를 위해 사용자에게 연락할 수 있습니다.</li>
                  <li>운영자는 자산의 판매, 자금 조달 또는 서비스의 전부 또는 일부를 다른 운영자에 인수하는 것과 관련하여 또는 협상중에 사용자의 개인정보를 공유하거나 전송할 수 있습니다.</li>
                  <li>운영자는 사용자의 정보를 운영자의 파트너와 공유하여 사용자에게 특정 제품, 서비스 또는 프로모션을 제공 할 수 있습니다.</li>
                </ol>
              </section>

              <section className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                  개인정보의 보유 및 이용기간
                </h3>
                <p className="mb-4">
                  서비스 사용자가 운영자의 회원으로서 서비스를 계속 이용하는 동안 운영자는 개인정보를 계속 보유하며 서비스 제공 등을 위해 이용합니다.
                </p>
                <p className="mb-4">
                  서비스 사용자의 개인정보는 그 수집 및 이용 목적(설문조사, 이벤트 등 일시적인 목적을 포함)이 달성되거나 사용자가 직접 삭제 또는 회원 탈퇴한 경우 재생할 수 없는 방법으로 파기됩니다.
                </p>
                <p className="mb-4">
                  운영자는 이용자의 권리 남용, 악용 방지, 귄리침해/명예훼손 분쟁 및 수사협조 등의 요청이 있었을 경우에는 이의 재발에 대비하여 사용자의 이용계약 해지 시로부터 1년 동안 회원정보를 보관할 수 있습니다. 상법, 전자상거래 등에서의 소비자보호 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 당사는관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 당사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기관은 아래와 같습니다.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">1. 운영자가 내부 방침에 의한 정보보유 사유</h4>
                    <p className="mb-2">회원탈퇴 시 개인정보 보존기간은 아래와 같습니다.</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>보존근거 : 불량 이용자의 재가입 방지, 명예훼손 등 권리침해 분쟁 및 수사 협조</li>
                      <li>보존기간 : 회원탈퇴 후 1년</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">2. 관련법령에 의한 정보보유 사유</h4>
                    <p className="mb-2">상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 운영자는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 운영자는 보관하는 정보를 그 보관 목적으로만 이용하며 보존기간은 아래와 같습니다.</p>
                    
                    <div className="ml-4 space-y-2">
                      <div>
                        <p className="font-medium">1) 본인확인에 관한 기록</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>보존 이유: 정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                          <li>보존 기간 : 6개월</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium">2) 방문에 관한 기록</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                          <li>보존 기간: 3개월</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                  개인정보의 열람, 갱신, 수정 또는 삭제
                </h3>
                <p>
                  사용자는 본인의 개인정보를 열람하거나 수정하실 수 있으며, 회원탈퇴를 요청하실 수 있습니다. 회원님의 개인정보 열람 및 수정은 사이트 내의 회원정보변경을 통해 직접 열람 또는 수정하거나, 보호책임자 및 운영자에게 전자우편 또는 서면으로 요청하신 경우 지체 없이 조치하겠습니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                  개인정보의 파기절차 및 방법
                </h3>
                <p className="mb-2">
                  이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기 됩니다.
                </p>
                <p>
                  전자저 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-6 border border-indigo-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">5</span>
                  수집한 개인정보의 위탁
                </h3>
                <p className="mb-4">
                  운영자는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며, 관계법령에 따라 위탁 처리되는 개인정보가 안전하게 관리될 수 있도록 필요한 조치를 다하고 있습니다. 위탁 처리하는 정보는 서비스 제공에 필요한 최소한의 범위에 국한되고, 모두 암호화되어 제공됩니다.
                </p>
                <p className="mb-4">
                  운영자에서 위탁 처리되고 있는 업무와 수탁 업체는 아래와 같습니다. 서비스 제공 목적 및 이용자 편의 증진을 위하여 국외 업체에 위탁, 보관하고 있으며 서비스 이용 시점에 네트워크를 통해 전송됩니다.
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-indigo-600/30">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
                        <th className="border-r border-indigo-600/30 p-4 text-left font-semibold text-indigo-200">이전 받는자</th>
                        <th className="border-r border-indigo-600/30 p-4 text-left font-semibold text-indigo-200">이전되는 국가</th>
                        <th className="border-r border-indigo-600/30 p-4 text-left font-semibold text-indigo-200">이용목적</th>
                        <th className="p-4 text-left font-semibold text-indigo-200">이전되는 개인정보 항목</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-indigo-600/20 hover:bg-indigo-900/10 transition-colors">
                        <td className="border-r border-indigo-600/30 p-4 font-medium text-indigo-100">Amazon Web service</td>
                        <td className="border-r border-indigo-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">미국</span>
                        </td>
                        <td className="border-r border-indigo-600/30 p-4 text-indigo-200">테이터 처리 및저장<br/>서비스 이용에 대한 데이터 처리</td>
                        <td className="p-4 text-indigo-200">서비스 이용 기록 또는 수집된 개인정보</td>
                      </tr>
                      <tr className="hover:bg-indigo-900/10 transition-colors">
                        <td className="border-r border-indigo-600/30 p-4 font-medium text-indigo-100">Google Ads,Facebook</td>
                        <td className="border-r border-indigo-600/30 p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">미국</span>
                        </td>
                        <td className="border-r border-indigo-600/30 p-4 text-indigo-200">타겟 고객군 대상 마켓팅</td>
                        <td className="p-4 text-indigo-200">암화화된 UID</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="mt-4">
                  위탁사항이 변경되는 경우, 본 개인정보처리방침을 통하여 해당 사실을 알려드리겠습니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-rose-900/20 to-pink-900/20 rounded-2xl p-6 border border-rose-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">6</span>
                  이용자 및 법정대리인의 권리와 그 행사 방법
                </h3>
                <p className="mb-4">
                  이용자 및 법정대리인은 언제든지 등록되어 있는 회원의 개인정보를 열람하거나 수정할 수 있으며, 회원탈퇴 절차를 통하여 개인정보 이용에 대한 동의를 철회할 수 있습니다. 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 법정대리인의 경우 개인정보보호법 시행규칙 별지 제 11호 서식에 따른 위임장을 제출하여야 권리를 행사 할 수 있습니다.
                </p>
                <p className="mb-4">
                  이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를 제 3자아에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
                </p>
                <p>
                  운영자는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 " 개인정보의 보유 및 이용기간'"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl p-6 border border-teal-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">7</span>
                  개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">1. 쿠기(Cookie)에 대하여</h4>
                    <p className="mb-4">
                      운영자는 이용자별 맞춤서비스 등을 제공하기 위하여 쿠키(cookie)를 설치 및 운영합니다. 쿠키의 사용목적과 거부에 관한 사항은 아래와 같습니다.
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">1-1) 쿠키의 의미:</p>
                        <p>쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 또는 모바일 기기에 저장됩니다.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">1-2) 쿠키의 사용 목적:</p>
                        <p>이용자들의 적속관리, 오류 관리, 이용자 별 사용 환경 제공, 이용자 활동정보 파악, a/b test, 이벤트 및 프로모션 통계 확인 등을 파악하여 최적화된 맞춤형 서비스를 제공하기 위해 사용합니다.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium">1-3) 쿠키의 설치∙운영 및 거부:</p>
                        <p>설비를 이용함에 있어 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자는 웹 브라우저 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 다만 이용자가 쿠키를 거부할 경우, 서비스 제공에 어려움이 있을 수 있습니다.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">2. 온라인 맞춤형 광고 서비스</h4>
                    <p className="mb-4">
                      운영자는 이용자의 온라인 이용 형태, 접속 기록 등을 분석하여 이용자의 특성을 고려한 서비스를 제공하고자 다음과 같이 온라인 맞춤형 광고 사업자가 행태정보를 수집하도록 허용하고 있습니다.
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>행태정보 수집 및 처리하는 광고 사업자 : 구글, 페이스북, 애플</li>
                      <li>행태정보 수집 방법 : 이용자가 운영자의 웹사이트를 방문하거나 앱을 실행할 때 자동 수집</li>
                    </ol>
                    <p className="mt-4">
                      이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 단, 이용자께서 쿠키 설치를 구부하였을 경우 운영자가 제공하는 일부 서비스에 어려움이 있을 수 있습니다.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-2xl p-6 border border-violet-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">8</span>
                  개인정보보호를 위한 기술적, 관리적 대책
                </h3>
                <p className="mb-4">
                  회원님의 개인정보는 암호화되어 보호되고 있습니다.
                </p>
                <p className="mb-4">
                  회원님 계정은 연동된 본인 명의의 SNS 계정(Google,Apple)으로만 접근 할 수 있습니다. 본인 명의의 기기 이외에는 사용 후 반드시 로그아웃하시고 완전 종료하시기 권장합니다. 이용상 부주의로 인한 개인정보 유출에 대해서 운영자는 운영자는 책임을 지지 않습니다.
                </p>
                <p className="mb-4">
                  운영자는 이용자의 개인정보에 대한 보안을 매우 중요하게 생각합니다. 운영자는 이용자 개인정보의 무단 접근, 공개, 사용 및 수정을 막기 위해 다음과 같은 보안 조치를 구축하고 있습니다.
                </p>
                
                <div className="bg-purple-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">[개인정보의 암호화]</p>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>관리적 조치 : 내부관리계획 수립 및 시행, 전담조직 운영, 정기적 운영 인력 교육</li>
                    <li>기술적 조치: 개인정보 처리 시스템 등의 접근 권한 관리, 접근 통제 시스템 설치, 개인정보의 암호화, 보안 프로그램 설치 및 갱신</li>
                  </ol>
                </div>
              </section>

              <section className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 rounded-2xl p-6 border border-amber-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">9</span>
                  아동의 개인정보 보호
                </h3>
                <p className="mb-4">
                  운영자는 원칙적으로 13 세 미만 또는 관할 법률상 이에 상응하는 최소 연령의 어린이로부터 정보를 수집하지 않습니다. 다만 운영자가 부득이 서비스 이용을 위하여 13세 미만 또는 관할 법률상 이에 상응하는 최소 연령의 어린이의 개인정보를 수집할 때에는, 어린이 개인정보 보호를 위해 담음과 같은 절차를 추가적으로 거치게 됩니다.
                </p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>어린이 개인정보 수집 또는 운영자의 제품, 서비스 정보를 어린이에게 직접 발송하기 위한 보호자 동의 절차 진행</li>
                  <li>수집한 개인정보 항목, 목적 공유 여부를 포함한 운영자의 어린이 개인정보보호방침에 대하여 보호자에게 통보</li>
                  <li>법정대리인에게 해당 아동의 개인정보에 대한 액세스, 개인정보의 정정 또는 삭제, 개인정보처리의 일시정지, 기존에 제공한 동의의 철회를 요청할 수 있는 권한 부여</li>
                  <li>서비스 활동 참여에 필수적으로 필요한것 이외의 개인정보수집 범위 제한</li>
                </ol>
              </section>

              <section className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-2xl p-6 border border-emerald-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">10</span>
                  광고성 정보의 전송 제한
                </h3>
                <p className="mb-4">
                  운영자는 고객의 사전 동의 없이 영리목적의 광고성 정보를 전송하지 않습니다.
                </p>
                <p>
                  운영자는 상품정보 안내 등 온라인 마케팅을 위해 광고성 정보를 전자우편 등으로 전송하는 경우에는 광고성 정보 전송에 대한 고객의 사전 동의를 득하고 각 전송수단별로 아래와 같이 고객이 쉽게 알아 볼 수 있도록 조치합니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-sky-900/20 to-blue-900/20 rounded-2xl p-6 border border-sky-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">11</span>
                  개인정보의 추가정인 제공·이용 판단기준
                </h3>
                <p className="mb-2">
                  운영자는 관련 법령에 따라 고객의 동의없이 추가적인 개인정보의 이용 또는 제공을 하기 위한 판단 기준은 다음과 같습니다.
                </p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부</li>
                  <li>개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 떄 추가적인 이용·제공에 대한 예측 가능성이 있는지 여부</li>
                  <li>정보주체의 이익을 부당하게 침해하는지 여부</li>
                  <li>가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부</li>
                </ol>
              </section>

              <section className="bg-gradient-to-r from-fuchsia-900/20 to-pink-900/20 rounded-2xl p-6 border border-fuchsia-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">12</span>
                  개인정보 보호 책임자 개인정보 열람 청구
                </h3>
                <p className="mb-4">
                  1. 운영자는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 기인정보 처리와 관련한 정보 주체의 불만 처리 미치 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
                </p>
                <p className="mb-4">
                  2. 정보 주체는 개인정보 보호법 제 35조에 따른 개인정보 열람 청구를 아래의 연락처로 할 수 있습니다. 운영자는 정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.
                </p>
                
                <div className="bg-gradient-to-r from-fuchsia-900/30 to-pink-900/30 p-6 rounded-xl border border-fuchsia-700/40 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-white text-lg font-bold">개인정보보호 책임자</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-fuchsia-200">
                      <span className="font-medium text-fuchsia-100">이름:</span> 박상훈, 김기성
                    </p>
                    <p className="text-fuchsia-200">
                      <span className="font-medium text-fuchsia-100">이메일:</span> 
                      <span className="ml-2 px-2 py-1 bg-fuchsia-800/50 rounded text-fuchsia-100 font-mono text-sm">sumsumhouse25@gmail.com</span>
                    </p>
                  </div>
                </div>
                
                <p className="mt-4">
                  1. 정보 주체는 운영자의 서비스을 이용하시면 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해 구제 등에 관한 사항을 개인정보 보호 책임자 및 담당 부서로 문의할 수 있습니다. 운영자는 정보 주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것 입니다.
                </p>
              </section>

              <section className="bg-gradient-to-r from-slate-900/20 to-gray-900/20 rounded-2xl p-6 border border-slate-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-slate-500 to-gray-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">13</span>
                  권익침해 구제 방법
                </h3>
                <p className="mb-4">
                  1. 운영자는 정보주체의 개인정보 자기 결정권을 보장하고, 개인정보 침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 담당 부서로 연락해주시기 바랍니다.
                </p>
                <p className="mb-4">
                  2. 정보 주체는 개인정보 침해로 인한 구제를 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보 침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <h5 className="text-slate-200 font-semibold mb-2">개인정보분쟁조정위원회</h5>
                    <p className="text-slate-300 text-sm">(국번없이) 1833-6972</p>
                    <p className="text-slate-400 text-xs">www.kopico.go.kr</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <h5 className="text-slate-200 font-semibold mb-2">개인정보침해신고센터</h5>
                    <p className="text-slate-300 text-sm">(국번없이) 118</p>
                    <p className="text-slate-400 text-xs">privacy.kisa.or.kr</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <h5 className="text-slate-200 font-semibold mb-2">대검찰청</h5>
                    <p className="text-slate-300 text-sm">(국번없이) 1301</p>
                    <p className="text-slate-400 text-xs">www.spo.go.kr</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <h5 className="text-slate-200 font-semibold mb-2">경찰청</h5>
                    <p className="text-slate-300 text-sm">(국번없이) 182</p>
                    <p className="text-slate-400 text-xs">ecrm.cyber.go.kr</p>
                  </div>
                </div>
                <p>
                  3. 개인정보 보호법 제35조 (개인정보의 열람), 제36조 (개인정보의 정정, 삭제), 제37조 (개인정보의 처리 정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                </p>
                <div className="mt-4">
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                    <h5 className="text-slate-200 font-semibold mb-2">중앙행정심판위원회</h5>
                    <p className="text-slate-300 text-sm">(국번없이) 110</p>
                    <p className="text-slate-400 text-xs">www.simpan.go.kr</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
