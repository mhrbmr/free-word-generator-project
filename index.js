async function generateMyWord() {
  const fetchRandomWord = await fetch('https://random-word-api.vercel.app/api?words=1');
  const randomWord = await fetchRandomWord.json();

  document.getElementById("word").innerHTML = randomWord;

  const fetchWordInfo = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
  const wordInfo = await fetchWordInfo.json();

  if (wordInfo.title === "No Definitions Found") {
    document.getElementById("definition").innerHTML = "Sorry, no definition found for this word via dictionaryapi.dev";
    document.getElementById("definition").style.color = "tomato";
  } else {
    const meaning = await wordInfo[0].meanings[0].definitions[0].definition;
    document.getElementById("definition").style.color = "black";
    document.getElementById("definition").innerHTML = meaning;
  }
  
  document.getElementById('word-wrapper').style.display = "block";
}
