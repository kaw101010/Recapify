from flask import Flask, render_template, request, redirect
from summary import generate_summary
from flask_cors import CORS
from transcripts_test import *
from detailed import detailed_notes
from chatbot import chat_response

app = Flask(__name__)
CORS(app)
app.config["SECRET_KEY"] = '&@*80e2^2%98(#!-;/"nw`5~oj,'

global_storage = {}

@app.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "GET":
        ################################# INSERT DEPLOYED REACT APP URL HERE ############################################
        return "Hey! Go to <url> to look at our app!"

@app.route("/summary", methods=["GET", "POST"])
def summary():
    if request.method == "POST":
        youtube_link = request.json.get("youtube_link")
        # print(youtube_link)
        transcript = get_full_transcript(youtube_link)
        global_storage["transcript"] = transcript
        brief_txt = generate_summary(transcript)
        # this has all-> detailed, pointers, brief
        detailed_text = detailed_notes(transcript)
        # brief_txt = ""
        # ADD POINTERS HERE #####################################################################################
        pointers_text = ""
        summary_dict = {"detailed" : detailed_text, "brief" : brief_txt, "pointers" : pointers_text}
        return summary_dict

@app.route("/chat", methods=["GET", "POST"])
def chatbot():
    if request.method == "POST":
        question = request.json.get("user_q")
        if "transcript" in global_storage:
            transcript = global_storage['transcript']
            return chat_response(question, transcript)
        else:
            redirect("/summary")

if __name__ == "__main__":
    app.run(debug=True)