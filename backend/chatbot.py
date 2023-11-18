import openai

def chat_response(question, transcript,max_tokens=750):
    try:
        # Set up your OpenAI API key
        openai.api_key = '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'

        # Generate a summary using OpenAI GPT-3
        response = openai.Answer.create(
        search_model="text-davinci-003", 
        model="text-davinci-003",
        question=question,
        documents=[transcript],
        max_tokens=max_tokens  # Adjust as per your desired answer length
        )  

        # there's a limit of about videos of length 4 mins

        chat_answer = response['answers'][0]['text'].strip()
        return chat_answer

    except Exception as e:
        return f"An error occurred: {str(e)}"