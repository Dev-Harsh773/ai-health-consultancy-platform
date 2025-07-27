// services/groqService.js
const Groq = require('groq-sdk');

// Initialize the Groq client with the API key from your .env file
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

/**
 * Generates a health report using Groq AI.
 * @param {object} userData - An object containing user health data.
 * @param {number} userData.age - User's age.
 * @param {string} userData.gender - User's gender.
 * @param {number} userData.height - User's height in cm.
 * @param {number} userData.weight - User's weight in kg.
 * @param {number} userData.bmi - User's calculated BMI.
 * @param {string} userData.bmiCategory - User's BMI category.
 * @param {number} userData.bmr - User's calculated BMR.
 * @returns {Promise<string>} The AI-generated health report as a string.
 */
exports.generateAIReport = async ({ age, gender, height, weight, bmi, bmiCategory, bmr }) => {
    // This is the prompt template from the Master Development Guide.
    // We dynamically insert the user's data into this prompt.
    const prompt = `
Generate a comprehensive health consultation report (maximum 1 page) for the following user.
The report must be structured with clear sections, professional language, and a motivational tone.
Do not provide medical diagnoses. Focus on general wellness, prevention, and lifestyle improvements.

User Profile:
- Age: ${age} years
- Gender: ${gender}
- Height: ${height} cm
- Weight: ${weight} kg
- Body Mass Index (BMI): ${bmi} (${bmiCategory})
- Basal Metabolic Rate (BMR): ${bmr} calories/day

Please provide the report with the following mandatory sections:
1.  **Health Status Overview**: A brief, encouraging summary of the user's current health status based on their metrics.
2.  **Body Composition Analysis**: An explanation of what their BMI means in practical terms.
3.  **Nutritional Recommendations**: Actionable advice on diet, including types of food to focus on and hydration. Provide a sample one-day meal plan (e.g., Breakfast, Lunch, Dinner, Snacks).
4.  **Exercise Suggestions**: Specific types of exercises suitable for the user (e.g., cardiovascular, strength training, flexibility). Suggest a weekly frequency and duration.
5.  **Lifestyle Improvements**: Recommendations on sleep, stress management, and other positive habits.
6.  **Goal Setting Advice**: Tips on how to set realistic and achievable health and fitness goals.

Format the output clearly using Markdown for headings and lists.
`;

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            // We recommend Llama 3 8b for a good balance of speed and quality for this task.
            model: 'llama3-8b-8192', 
        });

        // Return the content of the AI's response
        return chatCompletion.choices[0]?.message?.content || 'Error: Could not generate AI report.';

    } catch (error) {
        console.error("Error calling Groq AI:", error);
        // In case of an API error, we return a user-friendly error message.
        return "We're sorry, but the AI report could not be generated at this time. Please try again later.";
    }
};