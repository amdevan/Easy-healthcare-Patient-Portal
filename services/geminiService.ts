import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if the key is available to avoid immediate errors on load if missing
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const sendMessageToAssistant = async (message: string): Promise<string> => {
  if (!ai) {
    console.error("Gemini API Key is missing.");
    return "I'm sorry, I cannot connect to the server right now. Please try again later.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "You are a helpful, empathetic, and professional virtual assistant for 'Easy healthcare', a healthcare patient portal. Your goal is to assist users who are trying to log in, register, or have general questions about the platform. You can answer basic general health wellness questions but MUST disclaim that you are not a doctor and cannot provide medical advice. Keep answers concise (under 50 words) and friendly.",
      },
    });
    
    return response.text || "I didn't quite catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble thinking right now. Please try again in a moment.";
  }
};