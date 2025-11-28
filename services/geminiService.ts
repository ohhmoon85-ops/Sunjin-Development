import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize client
// Note: In a production client-side app, you might proxy this through a backend to hide the key,
// but for this architecture, we use it directly as instructed.
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 대한민국 최고의 부동산 개발 회사 '선진개발'의 AI 자문 파트너입니다.
선진개발의 경영 철학인 '신뢰', '현장 중심', '고객 이익 최우선'을 바탕으로 답변하세요.

주요 역할:
1. 선진개발의 서비스(부동산 개발 컨설팅, PM/CM, 인허가 관리, 분양 대행)를 소개합니다.
2. 사용자의 기본적인 부동산 고민(노후 건물 가치 상승, 토지 개발 등)에 대해 전문적이지만 이해하기 쉬운 톤으로 조언합니다.
3. 구체적인 상담이 필요할 경우, 대표 번호(010-4100-8777)로 전화 상담을 유도하세요.

톤앤매너:
- 전문적이고 신뢰감 있는(Trustworthy)
- 정중하고 예의 바른(Polite)
- 명확하고 결론부터 말하는(Clear)

답변은 한국어로 200자 이내로 간결하게 작성하세요.
`;

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!API_KEY) {
      return "API 키가 설정되지 않았습니다. 관리자에게 문의해주세요.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "죄송합니다. 현재 응답을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
  }
};