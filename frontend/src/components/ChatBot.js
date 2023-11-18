/*
    Work on Chatbot
    I have added API request code. Add everything else
    Look at Search.js for guidance
*/


const handleSearch = async () => {
    // Redirect to the specified link when the button is clicked
    try {
        const resp = await axios.post("http://127.0.0.1:5000/chat", {
        user_q: question
      });
      console.log(resp);
      // inspect console for all data
    } catch (err) {
      console.log(err);
    }
  };
