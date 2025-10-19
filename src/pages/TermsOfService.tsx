import React from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
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
          <h1 className="text-white text-xl font-semibold">이용약관</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="bg-gradient-to-br from-[#0a0a1a] via-[#0f0f1f] to-[#0a0a1a] rounded-3xl border border-purple-700/40 shadow-2xl shadow-purple-900/20 p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-white text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              숨숨 서비스 이용약관
            </h2>
            <p className="text-purple-300 text-lg">서비스 이용에 관한 약관입니다</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-purple-200 space-y-8">
              <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  제 1장 총칙
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <h4 className="text-white text-lg font-semibold mb-3 flex items-center">
                      <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">1</span>
                      제 1조(목적)
                    </h4>
                    <p className="text-purple-100 leading-relaxed">
                      이 약관은 숨숨 운영자(이하 "운영자"라 합니다)가 제공하는 "숨숨" 및 이에 부수하는 기타 제반 서비스의 이용에 관한 운영자와 서비스 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제2조 (용어의 정의)</h4>
                    <p className="mb-2">① 이 약관에서 사용되는 용어의 정의는 아래와 같습니다.</p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>"회원"이란 회원가입을 통하여 계정을 생성하고 서비스를 이용하는 자를 의미합니다.</li>
                      <li>"비회원 이용자"란 회원가입 및 계정 생성을 하지 않고 서비스의 일부를 이용하는 자를 의미합니다.</li>
                      <li>"회원" 과 "비회원 이용자"를 통칭하여 "이용자"라 합니다.</li>
                      <li>"모바일 기기"란 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는 기기로서, 휴대폰, 스마트폰, 휴대정보 단말기(PDA), 태블릿 등을 의미합니다.</li>
                      <li>"콘텐츠'란 모바일 기기로 이용할 수 있도록 운영자가 서비스 제공과 관련하여 디지털 방식으로 제작하여 유료 또는 무료로 제공하는 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ영상ㆍ도형ㆍ색채ㆍ이미지ㆍ명상 및 힐링, 등(이들의 복합체도 포함)을 의미합니다.</li>
                      <li>"스토어"란 모바일 기기에서 애플리케이션을 설치하고 결제할 수 있도록 구축된 환경을 의미합니다.</li>
                      <li>"애플리케이션"이란 서비스를 이용하기 위해 모바일 기기를 통하요 다운로드 받거나 설치하여 사용하는 프로그램 일체를 의미합니다.</li>
                      <li>"서비스'라 함은 운영자가 제공하는 감정 기록 및 기록, 명상ㆍ힐링 음원 콘텐츠 서비스로, "숨숨"와 관련된 서비스 일체를 의미합니다.</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제3조 (운영자 정보 등의 제공)</h4>
                    <p>운영자는 다음 각 호의 사항을 회원이 알아보기 쉽도록 서비스 내 혹은 운영자의 웹사이트 내에 표시합니다. 다만, 개인정보 처리방침과 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>운영자 성명</li>
                      <li>연락처</li>
                      <li>전자우편 주소</li>
                      <li>사업자 등록번호</li>
                      <li>개인정보 처리방침</li>
                      <li>서비스 이용약관</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제4조 (약관의 효력 및 변경)</h4>
                    <p className="mb-2">① 운영자는 이 약관의 내용을 이용자가 알 수 있도록 서비스 내 또는 그 연결 화면에 게시합니다.</p>
                    <p className="mb-2">② 운영자가 약관을 개정한 경우에는 적용일자 및 개정내용, 개정 사유 등을 명시하여 최소한 그 적용일 7일 이전부터 서비스 내 또는 그 연결화면에 게시하여 이용자에게 공지합니다. 다만, 변경된 내용이 이용자에게 불리하거나 중대한 사항의 변경인 경우에는 그 적용일 30일 이전까지 본문과 같은 방법으로 공지하고 제24조 1항의 방법으로 통지합니다. 이 경우 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.</p>
                    <p className="mb-2">③ 운영자가 약관을 개정할 경우 개정약관 공지 후 개정 약관을 공지하면서, 이용자에게 약관 변경 적용일까지 거부 의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 이용자가 명시적으로 약관 변경에 대한 거부 의사를 표시하지 않았을 때는 변경 약관에 동의한 것으로 간주합니다. 변경 약관에 동의하지 않는 경우 서비스 이용이 불가할 수 있으며, 이용자는 서비스 이용을 중단하거나 이용 계약을 해지할 수 있습니다.</p>
                    <p className="mb-2">④ 운영자는 이용자가 운영자에게 이 약관의 내용에 관하여 질의하고 응답을 받을 수 있도록 조치를 취합니다.</p>
                    <p>⑤ 운영자는 관련 법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제5조 (회원가입)</h4>
                    <p className="mb-2">① 회원가입은 회원이 되고자 하는 자(이하 "가입신청자"라 합니다.)가 이 약관의 내용에 동의를 한 다음 운영자가 정한 양식에 따라 정보를 기입하고 가입신청을 하고, 운영자가 그 신청에 대해 승낙합으로써 이루어집니다.</p>
                    <p className="mb-2">② 운영자는 가입신청자의 신청에 대해 승낙함을 원칙으로 합니다. 다만, 운영자는 다음 각 호의 어느 하나에 해당하는 가입신청자에 대해서는 승낙을 거절할 수 있습니다.</p>
                    <ol className="list-decimal pl-6 space-y-1 mb-2">
                      <li>기재 내용에 허위, 누락, 오기가 있거나 이용신청 요건을 충족하지 못한 경우</li>
                      <li>운영자가 서비스를 제공하지 않은 국가에서 비정상적이거나 우회적인 방법을 통해 서비스를 이용하는 경우</li>
                      <li>관련 법령에서 금지하는 행위 또는 사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한경우</li>
                      <li>부정한 용도 서비스를 이용하고자 하는 경우</li>
                      <li>가입 신청자가 만 14세 미만인 경우</li>
                      <li>그 밖에 각 호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우</li>
                    </ol>
                    <p className="mb-2">③ 운영자는 다음 각 호의 어느 하나에 해당하는 경우 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.</p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>운영자의 설비에 여유가 없거나, 특정 모바일 기기의 지원이 어렵거나, 기술적 장애가 있는 경우</li>
                      <li>서비스 상의 장애가 발생한 경우</li>
                      <li>그 밖에 각 호에 준하는 사유로서 이용신청의 승낙이 어렵다고 판단되는 경우</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제6조 (약관 외 준칙)</h4>
                    <p>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여 [전자상거래 등에서 소비자 보호에 관한 법률], [약관의 규제에 관한 법률], [정보통시망 이용촉진 및 정보보호 등에 관한 법률], [콘텐츠 산업진흥법] 등 관련 법령 또는 일반적인 상관례에 따릅니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제7조 (운영정책)</h4>
                    <p className="mb-2">① 운영자는 약관을 적용하기 위하여 필요한 사항과 약관에서 구체적인 범위를 위임한 사항을 운영정책으로 정할 수 있습니다.</p>
                    <p className="mb-2">② 운영자는 운영정책을 정한 경우, 이 내용을 이용자가 알 수 있도록 서비스 내 또는 그 연결화면에 게시합니다.</p>
                    <p>③ 운영정책을 개정하는 경우에는 제4조와 제2항의 절차에 따릅니다. 다만, 운영정책 개정 내용이 다음 각호의 어느하나에 해당하는 경우에는 본조 제2항의 방법으로 사전에 공지합니다.</p>
                    <ol className="list-decimal pl-6 space-y-1 mt-2">
                      <li>이용자의 권리 및 의무와 관련 없는 사항을 개정하는 경우</li>
                      <li>운영 정책의 내용이 약관에서 정한 내용과 근본적으로 다르지 않고 이용자가 예측할 수 있는 범위 내에서 운영정책을 개정하는 경우</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                  제2장 개인정보 관리
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제8조 (개인정보의 보호 및 사용)</h4>
                    <p className="mb-2">① 운영자는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력하며, 개인정보의 보호 및 사용에 대해서는 관련 법령 및 운영자의 개인정보처리방침에 따릅니다. 다만, 운영자가 제공하는 서비스 이외의 링크된 서비스에서는 운영자의 개인정보처리방침에 적용되지 않습니다.</p>
                    <p>② 운영자는 운영자의 귀책사유 없이 이용자의 귀책사유로 개인정보가 유출되어 발생한 피해에 대해 책임을 지지 않습니다.</p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                  제3장 이용계약 당사자의 의무
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제9조 (운영자의 의무)</h4>
                    <p className="mb-2">① 운영자는 관련 법령, 이 약관에서 정하는 의무를 신의에 따라 성실하게 이행합니다.</p>
                    <p className="mb-2">② 운영자는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위해 보안 시스테을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다. 운영자는 이 약관 및 개인정보 처리방침에서 정한 경우를 제외하고는 이용자의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.</p>
                    <p>③ 운영자는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실 및 훼손된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제10조 (이용자의 의무)</h4>
                    <p className="mb-2">① 이용자는 운영자에서 제공하는 서비스의 이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안됩니다.</p>
                    <ol className="list-decimal pl-6 space-y-1 mb-2">
                      <li>운영자의 직원이나 운영자를 가장하거나 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위, 타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위</li>
                      <li>타인의 신용카드, 유/무선전화, 은행 계좌 등을 도용하여 유료 콘텐츠를 구매하는 행위, 다른 이용자의 ID 및 비밀번호를 부정 사용하는 행위</li>
                      <li>서비스를 무단으로 영리, 영업, 광고, 홍보, 정치활동, 선거운동 등 본래의 용도 이외의 용도로 이용하는 행위</li>
                      <li>운영자의 서비스를 이용하여 얻은 정보를 무단으로 복제, 유통, 조장하거나 상업적으로 이용하는 행위, 알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위</li>
                      <li>타인을 기망하여 이득을 취하는 행위, 운영자의 서비스 이용과 관련하여 타인에게 피해를 입히는 행위</li>
                      <li>운영자나 타인의 지적재산권 또는 초상권을 침해하는 행위, 타인의 명예를 훼손하거나 손해를 가하는 행위</li>
                      <li>운영자로부터 측별한 권리를 부여받지 않고 애플리케이션을 변경하거나, 애플리케이션에 다른 프로그램을 추가 혹은 삽입하거나, 서버를 해킹 혹은 역설계하거나, 소스코드나 애플리케이션 데이터를 유출 혹은 변경하거나, 별도의 서버를 구축하거나, 웹사이트의 일부분을 임의로 변경 혹은 도용하여 운영자를 사칭하거나 서비스를 복제, 분해 또는 모방 기타 변형하는 행위</li>
                      <li>서비스 이용 또는 가입신청시 타인의 정보를 사용하는 행위</li>
                      <li>다른 이용자의 개인정보 또는 계정정보를 무단으로 수집∙저장∙게시∙유포하는 행위</li>
                      <li>자동 접속 프로그램 등을 사용하는 등 정상적인 용법과 다른 방법으로 서비스를 이용하여 운영자의 서버에 부하를 일으켜 운영자의 정상적인 서비스를 방해하는 행위</li>
                      <li>본인 아닌 제3자에게 계정을 대여, 양도하는 등 접속권한을 부여하는 행위</li>
                      <li>운영자 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>운영자 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>알려지지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위</li>
                      <li>타인을 기망하여 이득을 취하거나, 운영자의 서비스의 이용과 관련하여 타인에게 피해를 입히는 행위</li>
                      <li>불법적이거나 부당한 수단과 목적에 의한 행위</li>
                      <li>그 밖에 선량한 풍속 기타 사회통념에 반하는 행위</li>
                    </ol>
                    <p className="mb-2">② 이용자의 계정 및 모바일 기기에 관한 관리 책임은 이용자에게 있으며, 이를 타인이 이용하도록 하게 하여서는 안됩니다. 모바일 기기의 관리 부실이나 타인에게 이용을 승낙함으로 인해 발생하는 손해에 대해서 운영자는 운영자의 귀책사유가 없는 한 책임을 지지 않습니다.</p>
                    <p className="mb-2">③ 이용자는 각 스토어에서 부정한 결제가 이루어지지 아니하도록 결제 비밀번호 기능을 설정하고 관리하여야 합니다. 이용자의 부주의로 인하여 발생하는 손해에 대해 운영자는 운영자의 귀책사유가 없는 한 책임지지 않습니다.</p>
                    <p>④ 이용자는 이 약관 및 운영자가 서비스와 관련하여 고지하는 내용을 준수하여야 하며, 약관 및 고지 내용을 위반하거나이행하지 아니하여 발생하는 모든 손실, 손해에 대하여 책임을 부담합니다.</p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                  제4장 서비스 이용 및 이용 제한
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제11조 (서비스의 제공)</h4>
                    <p className="mb-2">① 운영자는 제5조의 규정에 따라 회원가입이 완료된 이용자에게 그 즉시 서비스를 이용할 수 있도록 합니다. 다만, 일부 서비스의 경우 운영자의 필요에 따라 지정된 일자로부터 서비스를 개시할 수 있습니다.</p>
                    <p className="mb-2">② 운영자는 이용자에게 서비스를 제공할 때 이 약관에 정하고 있는 서비스를 포함하여 기타 부가적인 서비스를 함께 제공 할 수 있습니다.</p>
                    <p className="mb-2">③ 유 서비스의 경우에는 해당 서비스에 명시된 요금을 지급하여야 이용할 수 있습니다. 네트워크 통해 애플리케이션을 다운로드하거나 서비스를 이용하는 경우에는 가입한 이동통신사에서 정한 별도의 요금이 발생할 수 있습니다.</p>
                    <p className="mb-2">④ 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 모바일 기기 또는 이동통신사의 특성에 맞도록 제공됩니다. 모바일 기기의 변경·번호 변경 또는 해외 로밍의 경우에는 콘텐츠의 전부 또는 일부의 이용이 불가능할 수 있으며, 이 경우 운영자는 책임을 지지 않습니다.</p>
                    <p>⑤ 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 백그라운드 작업이 진행 될 수 있습니다. 이 경우 모바일 기기 또는 이동통신사의 특성에 맞도록 추가요금이 발생할 수 있으며 이와 관련하여 운영자는 책임을 지지 않습니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제13조 (서비스의 변경 및 중단)</h4>
                    <p className="mb-2">① 운영자는 원할한 서비스 제공을 위해 운영상 또는 기술상의 필요에 따라 서비스를 변경할 수 있으며, 변경 전에 해당 내용을 서비스 내에 공지합니다. 다만, 버그·오류 등의 수정이나 긴급 업데이트 등 부득이하게 변경할 필요가 있는 경우 또는 중대한 변경에 해당하지 않는 경우에는 사후에 공지할 수 있습니다.</p>
                    <p>②운영자는 영업양도·분할·합병 등에 따른 영업의 폐지, 당해 서비스의 현저한 수익 악화 등 경영상의 중대한 사유로 인해 서비스를 지속하기 어려운 경우에는 서비스 전부를 중단할 수 있습니다. 이 경우 중단일자 30일 이전까지 중단일자·중단사유보상조건 등을 서비스 애플리케이션 초기화면 또는 그 연결화면을 통해 공지하고 제24조 제1항 또는 제2항의 방법으로 이용자에게 통지합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제14조 (정보의 수집 등)</h4>
                    <p className="mb-2">① 운영자는 서비스의 원활하고 안정적인 운영 및 서비스 품질의 개선을 위하여 개인정보를 제외한 이용자의 모바일 기기 정보(설정,사양,운영체제,버전 등)를 수집 ‧ 활용할 수 있습니다.</p>
                    <p>② 운영자는 서비스 개선 및 이용자 대상 서비스 소개 등을 위한 목적으로 이용자에게 추가정보를 요청할 수 있습니다. 이 요청에 대해 이용자는 승낙하거나 거절할 수 있으며, 운영자가 이 요청을 할 경우에는 이용자가 이 요청을 거절할 수 있다는 뜻을 함께 고지합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제15조 (광고의 제공)</h4>
                    <p className="mb-2">① 운영자는 서비스의 운영과 관련하여 서비스 내에 광고를 게재할 수 있습니다. 또한 수신에 동의한 이용자에 한하여 전자우편, 문자서비스(LMS/SMS) , 푸시 메시지(Push Notification) 등의 방법으로 광고성 정보를 전송할 수 있습니다. 이 경우 언제든지 수신을 거절할 수 있으며, 운영자는 이용자의 수신 거절 시 광고성 정보를 발송하지 아니합니다.</p>
                    <p className="mb-2">② 운영자가 제공하는 서비스 중의 배너 또는 링크 등을 통해 타인이 제공하는 광고나 서비스에 연결될 수 있습니다.</p>
                    <p>③ 제2항에 따라 타인이 제공하는 광고나 서비스에 연결될 경우 해당 영역에서 제공하는 서비스는 운영자의 서비스 영역이 아니므로 운영자가 신뢰성, 안정성 등을 보장하지 않으며, 그로 인한 이용자의 손해에 대하여도 운영자는 책임지지 않습니다. 다만, 운영자가 고의 또는 중과실로 손해의 발생을 용이하게 하거나 손해 방지를 위한 조치를 취하지 아니한 경우에는 그러하지 아니합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제16조 (저작권 등의 귀속)</h4>
                    <p className="mb-2">① 운영자가 제작한 서비스 내의 콘텐츠에 대한 저작권과 기타 지적재산권은 운영자에 귀속합니다.</p>
                    <p className="mb-2">② 이용자는 운영자가 제공하는 서비스를 이용하여 얻은 정보 중에서 운영자 또는 제공업체에 지적재산권이 귀속된 정보를 운영자 또는 제공업체의 사전 동의 없이 복제·전송 등의 방법(편집, 공표, 공연, 배포, 방송, 2차적 저작물 작성 등을 포함합니다. 이하 같습니다.)에 의하여 영리목적으로 이용하거나 타인에게 이용하게 하여서는 안 됩니다.</p>
                    <p className="mb-2">③ 이용자가 타인의 초상권, 저작권 등 지식재산권을 침해하여 운영자가 타인으로부터 손해배상 청구 등 이의제기를 받는다면 이용자는 운영자의 면책을 위하여 노력해야 하며, 운영자가 면책되지 못할 때에는 운영자에 발생한 모든 손해를 부담해야 합니다.</p>
                    <p className="mb-2">④ 운영자는 이용자가 게시 또는 작성한 콘텐츠를 서비스 내 노출, 서비스 홍보를 위한 활용, 서비스 운영, 개선 및 새로운 서비스 개발을 위한 영구 목적을 위하여 저장, 복제, 수정, 공중송신, 전시, 배포, 2차 적저작물 작성의 방식으로 이용할 수 있습니다.</p>
                    <p>⑤ 이 조는 운영자가 서비스를 운영하는 동안 유효합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제17조 (유료 콘텐츠의 구매, 사용기간 및 이용)</h4>
                    <p className="mb-2">① 서비스 내에서 이용자가 구매한 유료 콘텐츠는 해당 어플리케이션을 다운로드 받거나 설치한 모바일 기기에서만 용할 수 있습니다.</p>
                    <p className="mb-2">② 이용자가 구매한 유료 콘텐츠의 이용기간은 구매 시 명시된 기간에 따릅니다.</p>
                    <p>③ 별도로 기간이 명시되지 않은 유료 콘텐츠의 기간은 서비스 이용계약 해지시까지로 합니다. 다만, 제13조 제2항에 따라 서비스 중단이 이루어지는 경우 기간의 정함이 없는 유료 콘텐츠의 이용기간은 서비스 중단 공지 시 공지된 서비스의 중단일까지로 합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제18조 (서비스 이용제한)</h4>
                    <p className="mb-2">① 운영자는 이용자가 제10조 제1항을 포함하여 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한경우 이용자의 서비스 이용을 제한할 수 있습니다.</p>
                    <p className="mb-2">② 운영자가 제1항에서 정한 이용제한 조치를 하는 경우에는 다음 각 호의 사항을 이용자에게 통지합니다.</p>
                    <ol className="list-decimal pl-6 space-y-1 mb-2">
                      <li>이용제한 조치의 사유</li>
                      <li>이용제한 조치의 유형 및 기간</li>
                      <li>이용제한 조치에 대한 이의신청 방법</li>
                    </ol>
                    <p className="mb-2">③ 운영자는 다음 각 호의 사유에 대한 조사가 완료될 때까지 이용자의 서비스 이용을 정지할 수 있습니다.</p>
                    <ol className="list-decimal pl-6 space-y-1 mb-2">
                      <li>계정이 해킹 또는 도용당했거나, 범죄에 이용되었다는 정당한 신고가 접수된 경우</li>
                      <li>그 밖에 이에 준하는 사유로 서비스 이용의 잠정조치가 필요한 경우</li>
                    </ol>
                    <p className="mb-2">④ 이용자가 운영자의 이용제한 조치에 불복하고자 할 때에는 제2항의 조치의 통지를 받은 날부터 14일 이내에 불복 이유를 기재한 이의 신청서를 이메일(***@***.***)로 운영자에 제출하여야 합니다.</p>
                    <p className="mb-2">⑤ 운영자는 제4항의 이의신청서를 접수한 날부터 14이 이내에 불복 이유에 대하여 이메일로 답변합니다. 다만, 운영자는 이 기간 내에 답변이 어려운 경우에는 위 기간 내에 그 사유와 처리일정을 통지합니다.</p>
                    <p>⑥ 운영자는 불복 이유가 타당한 경우에는 이에 따른 조치를 취합니다.</p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-6 border border-indigo-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">5</span>
                  제5장 청약철회, 과오납금의 환급 및 이용계약 해지
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제19조 (대금결제) -수정(완성 후)</h4>
                    <p className="mb-2">① 이용자가 애플리케이션 내에서 유료 서비스에 대한 "구매(하기)", "결제(하기)", "(결제)확인" 등의 버튼을 클릭함으로써 본 이용약관 및 게시된 구매조건에 따라 유료서비스 이용계약이 성립하고, 구매대금이 결제됩니다. 구매 대금의 부과와 납부는 원칙적으로 이용자가 애플리케이션을 다운로드받은 스토에서 정하는 인앱구매 방법에 따릅니다.</p>
                    <p>② 콘텐츠의 구매대금을 외화로 결제하는 경우에는 환율·수수료 등으로 인하여 실제 청구금액이 서비스의 상점 등에서 표시된 가격과 달라질 수 있습니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제20조 (청약 철회 등)</h4>
                    <p className="mb-2">① 운영자와 유료 콘텐츠의 구매에 관한 계약을 체결한 이용자는 구매계약일과 콘텐츠 이용 가능일 중 늦은 날부터 7일이내에 별도의 수수료·위약금 등의 부담 없이 청약철회를 할 수 있습니다.</p>
                    <p className="mb-2">② 「전자상거래 등에서의 소비자보호에 관한 법률」등 관련 법령에서 규정하는 청약철회가 불가능한 서비스의 경우 청약철회권이 제한됩니다. 단, 관련 법령에서 운영자에게 청약철회권의 제한을 위한 조치를 취할 것을 요구하는 경우, 운영자는 해당 조치를 취합니다.</p>
                    <p className="mb-2">③ 운영자는 청약철회가 불가능한 콘텐츠의 경우에는 그 사실을 이용자가 쉽게 알 수 있는 곳에 명확하게 표시하고, 해당 콘텐츠의 시험사용 상품을 제공(한시적 이용의 허용, 체험용 제공 등)하거나 이에 대한 제공이 곤란한 경우에는 콘텐츠에 관한 정보 제공함으로써 이용자의 청약철회의 권리행사가 방해받지 아니하도록 조치합니다.</p>
                    <p className="mb-2">④ 이용자는 제1항 및 제2항에도 불구하고 구매한 유료 콘텐츠의 내용이 표시·광고의 내용과 다르거나 구매계약의 내용과 다르게 이행된 경우에 해당 콘텐츠가 이용 가능하게 된 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회를 할 수 있습니다.</p>
                    <p className="mb-2">⑤ 이용자가 청약철회를 할 경우 운영자는 플랫폼사업자 또는 스토어 사업자를 통해 구매내역을 확인합니다. 또한 운영자는 이용자의 정당한 철회 사유를 확인하여야 할 경우 운영자는 이용자에게서 제공받은 정보를 통해 이용자에게 연락할 수 있으며, 추가적인 증비을 요구할 수 있습니다.</p>
                    <p className="mb-2">⑥ 미성년자가 모바일 기기에서 콘텐츠 구매계약을 체결하는 경우, 운영자는 법정대리인의 동의가 없으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 고지하며, 미성년자가 법정대리인의 동의 없이 구매계약을 체결한 때에는 미성년자 본인 또는 법정대리인은 그 계약을 취소할 수 있습니다. 다만, 미성년자가 법정대리인이 범위를 정하여 처분을 허락한 재산으로 콘텐츠를 구매한 경우 또는 미성년자가 속임수로 자기를 성년자로 믿게 하거나 법정대리인의 동의가 있는 것으로 믿게 한 경우에는 취소할 수 없습니다.</p>
                    <p>⑦ 전항의 경우 운영자는 정당한 취소인지를 확인하기 위해 미성년자 및 법정대리인을 증명할 수 있는 서류의 제출을 요청할 수 있습니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제21조 (과오납금의 환급)</h4>
                    <p className="mb-2">① 운영자는 과오납금이 발생하는 경우 과오납금을 이용자에게 환급합니다. 다만, 과오납금이 운영자의 고의 또는 과실 없이 이용자의 과실로 인하여 발생한 경우에는 그 환급에 소요되는 실제 비용은 합리적인 범위 내에서 이용자가 부담합니다.</p>
                    <p className="mb-2">② 인앱결제 과정에서 과오납금이 발생하는 경우, 이용자는 스토어 사업자에게 환급을 요청하여야 합니다.</p>
                    <p className="mb-2">③ 환급은 이용자가 애플리케이션을 다운로드받은 스토어 사업자 또는 운영자의 환급정책에 따라 진행됩니다.</p>
                    <p>④ 운영자는 과오납금의 환급을 처리하기 위해 이용자에게서 제공받은 정보를 통해 이용자에게 연락할 수 있으며, 필요한 정보의 제공을 요청할 수 있습니다.</p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-rose-900/20 to-pink-900/20 rounded-2xl p-6 border border-rose-700/30">
                <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">6</span>
                  제6장 손해배상 및 면책조항 등
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제22조 (손해배상)</h4>
                    <p className="mb-2">① 운영자 또는 이용자는 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해에 대한 배상 책임이 있습니다. 다만, 고의 또는 과실이 없는 경우에는 그러하지 아니 합니다.</p>
                    <p>② 운영자가 개별서비스 제공자와 제휴 계약을 맺고 이용자에게 개별서비스를 제공하는 경우에 이용자가 개별서비스이용약관에 동의를 한 뒤 개별서비스 제공자의 고의 또는 과실로 인해 사용자에게 손해가 발생한 경우에 그 손해에 대해서는 개별서비스 제공자가 책임을 집니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제23조 (운영자의 면책)</h4>
                    <p className="mb-2">① 운영자는 천재지변 또는 이에준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관하여 책임을 지지않습니다.</p>
                    <p className="mb-2">② 운영자는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 기타 이에 준하는 사유로 발생한 손해에 대하여 책임을 지지 않습니다. 다만, 운영자의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.</p>
                    <p className="mb-2">③ 운영자는 이용자의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다. 다만, 이용자에게 부득이하거나 정당한 사유가 있는 경우에는 그러하지 아니합니다.</p>
                    <p className="mb-2">④ 이용자가 서비스와 관련하여 게재한 정보나 자료 등의 신뢰성, 정확성 등에 대하여 운영자는 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.</p>
                    <p className="mb-2">⑤ 운영자는 이용자가 다른 이용자 또는 타인과 서비스를 매개로 발생한 거래나 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해에 대해 책임을 지지 않습니다.</p>
                    <p className="mb-2">⑥ 운영자는 무료로 제공되는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대해서는 책임을 지지 않습니다.</p>
                    <p className="mb-2">⑦ 운영자는 이용자가 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.</p>
                    <p className="mb-2">⑧ 운영자는 이용자가 모바일 기기 비밀번호, 스토어 사업자가 제공하는 비밀번호 등을 관리하지 않아 발생하는 제3자 결제에 대해 책임을 지지 않습니다. 다만, 운영자의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.</p>
                    <p className="mb-2">⑨ 사용자가 모바일 기기의 변경, 모바일 기기의 번호 변경, 운영체제(OS) 버전의 변경, 해외 로밍, 통신사 변경 등으로 인해 콘텐츠 전부나 일부의 기능을 이용할 수 없는 경우 운영자는 이에 대해 책임을 지지 않습니다. 다만, 운영자의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.</p>
                    <p>⑩ 이용자가 운영자가 제공하는 콘텐츠나 계정정보를 삭제한 경우 운영자는 이에 대해 책임을 지지 않습니다. 다만, 운영자의 고의 또는 과실에 의한 경우에는 러하지 아니합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제24조 (이용자에 대한 통지)</h4>
                    <p className="mb-2">① 운영자가 이용자에게 통지를 하는 경우 이용자의 전자우편주소, 서비스 내 공지, 문자메시지(LMS/SMS) 등으로 할 수 있습니다.</p>
                    <p>② 운영자는 이용자 잔체에게 통지를 하는 경우 7일 이상 서비스 내에 게시하거나 팝업화면 등을 제시함으로써 제1항의 통지에 갈음할 수 있습니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제25조 (재판권 및 준거법)</h4>
                    <p>이 약관은 대한민국 법률에 따라 규율되고 해석됩니다. 서비스의 제공 및 이용과 관련하여 운영자와 이용자 간에 발생한 분쟁으로 소송이 제기되는 경우에는 민사소송법에 따라 관할권을 가지는 법원을 관할 법원으로 합니다.</p>
                  </div>

                  <div>
                    <h4 className="text-white text-lg font-semibold mb-3">제26조 (이용자의 고충처리 및 분쟁해결)</h4>
                    <p className="mb-2">① 운영자는 이용자의 편의를 고려하여 이용자의 의견이나 불만을 제시하는 방법을 서비스 내 또는 그 연결화면에 안내합니다. 운영자는 이러한 이용자의 의견이나 불만을 처리하기 위한 전담인력을 운영합니다.</p>
                    <p className="mb-2">② 운영자는 이용자로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우 합리적인 기간 내에 이를 신속하게 처리합니다. 다만, 처리에 장기간이 소요되는 경우에는 이용자에게 장기간이 소요되는 사유와 처리일정을 서비스 내 공지하거나 제24조 제1항에 따라 통지합니다.</p>
                    <p>③ 운영자와 이용자 간에 분쟁이 발생하여 제3의 분쟁조정기관이 조정할 경우 운영자는 이용제한 등 이용자에게 조치한 사항을 성실히 증명하고, 조정기관의 조정에 따를 수 있습니다.</p>
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
