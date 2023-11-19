import openai

def chat_response(question, transcript,max_tokens=750):
    try:
        # Set up your OpenAI API key
        openai.api_key = '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'

        # Generate a summary using OpenAI GPT-3
        response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question,
        max_tokens=400,  # Adjust token limit as needed
        temperature=0.5,  # Adjust the creativity of the response
        #stop=["\n\n"]  # Stop the generation at double newlines for better formatting
        )
        # there's a limit of about videos of length 4 mins
        print("Response",response)
        chat_answer = response['choices'][0]['text']
        print("Chat Answer",chat_answer)
        return chat_answer

    except Exception as e:
        return f"An error occurred: {str(e)}"