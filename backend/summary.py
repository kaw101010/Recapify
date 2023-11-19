from transcripts_test import *
import openai

def generate_summary(transcript, max_tokens=750):
    # update max_tokens to higher values
    try:
        # Set up your OpenAI API key
        openai.api_key = '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'

        # Generate a summary using OpenAI GPT-3
        response = openai.Completion.create(
            engine="text-davinci-003",  # Specify the GPT-3 engine
            prompt=f"Can you give me a detailed Summary of the following text:\n'{transcript}'",
            max_tokens=max_tokens,
            best_of = 3
        )
        # there's a limit of about videos of length 4 mins

        summary = response['choices'][0]['text']
        return summary

    except Exception as e:
        return f"An error occurred: {str(e)}"