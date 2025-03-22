class SpaceTravelAssistant {
  constructor() {
    this.openai = new OpenAI(process.env.OPENAI_KEY);
  }

  async generateInsights(userPreferences) {
    const prompt = `As a space travel expert, provide recommendations for:
      - Optimal travel dates
      - Celestial events
      - Emerging space tech opportunities
      User preferences: ${JSON.stringify(userPreferences)}`;

    return this.openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
  }
}
